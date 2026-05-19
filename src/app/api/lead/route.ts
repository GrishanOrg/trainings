import { NextResponse } from "next/server";

import { buildLeadEmailPayload, validateLeadSubmission } from "@/lib/lead";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_SUBMIT_INTERVAL_MS = 30 * 1000;

type RateLimitEntry = {
  timestamps: number[];
  lastAcceptedAt: number;
};

declare global {
  var __leadRateLimitStore: Map<string, RateLimitEntry> | undefined;
}

const rateLimitStore: Map<string, RateLimitEntry> =
  globalThis.__leadRateLimitStore ?? new Map<string, RateLimitEntry>();

if (!globalThis.__leadRateLimitStore) {
  globalThis.__leadRateLimitStore = rateLimitStore;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const input =
    payload && typeof payload === "object"
      ? (payload as Record<string, string | undefined>)
      : {};

  const validation = validateLeadSubmission(input);

  if (!validation.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        fieldErrors: validation.errors,
      },
      { status: 400 },
    );
  }

  if (validation.data.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const ip = getClientIp(request);
  const rateLimitResult = applyRateLimit(ip);

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please try again in a few minutes.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimitResult.retryAfterSeconds),
        },
      },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    console.error("Lead form env vars are missing.");

    return NextResponse.json(
      { ok: false, error: "Lead form is not configured." },
      { status: 500 },
    );
  }

  const submittedAt = new Date().toISOString();
  const userAgent = request.headers.get("user-agent") ?? "";
  const emailPayload = buildLeadEmailPayload({
    submission: validation.data,
    submittedAt,
    ip,
    userAgent,
  });

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: validation.data.work_email,
        subject: emailPayload.subject,
        html: emailPayload.html,
        text: emailPayload.text,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();

      console.error("Resend send failed:", resendError);

      return NextResponse.json(
        { ok: false, error: "Email delivery failed." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Lead email request failed:", error);

    return NextResponse.json(
      { ok: false, error: "Email delivery failed." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Your request has been sent successfully.",
  });
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function applyRateLimit(ip: string) {
  const now = Date.now();
  const key = ip || "unknown";
  const current: RateLimitEntry = rateLimitStore.get(key) ?? {
    timestamps: [],
    lastAcceptedAt: 0,
  };

  current.timestamps = current.timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (
    current.lastAcceptedAt > 0 &&
    now - current.lastAcceptedAt < MIN_SUBMIT_INTERVAL_MS
  ) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(
        (MIN_SUBMIT_INTERVAL_MS - (now - current.lastAcceptedAt)) / 1000,
      ),
    };
  }

  if (current.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldestTimestamp = current.timestamps[0] ?? now;

    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(
        (RATE_LIMIT_WINDOW_MS - (now - oldestTimestamp)) / 1000,
      ),
    };
  }

  current.timestamps.push(now);
  current.lastAcceptedAt = now;
  rateLimitStore.set(key, current);
  cleanupRateLimitStore(now);

  return { allowed: true, retryAfterSeconds: 0 };
}

function cleanupRateLimitStore(now: number) {
  for (const [key, value] of rateLimitStore.entries()) {
    const activeTimestamps = value.timestamps.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
    );

    if (activeTimestamps.length === 0) {
      rateLimitStore.delete(key);
      continue;
    }

    value.timestamps = activeTimestamps;
    rateLimitStore.set(key, value);
  }
}
