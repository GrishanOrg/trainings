export const TEAM_SIZE_OPTIONS = [
  "1-10",
  "10-100",
  "100-500",
  "500-1000",
  "1000-10000",
  "10000+",
] as const;

export type TeamSizeOption = (typeof TEAM_SIZE_OPTIONS)[number];

export type LeadSubmissionInput = {
  name?: unknown;
  work_email?: unknown;
  company?: unknown;
  use_case?: unknown;
  message?: unknown;
  team_size?: unknown;
  page_url?: unknown;
  website?: unknown;
};

export type LeadSubmission = {
  name: string;
  work_email: string;
  company: string;
  use_case: string;
  message: string;
  team_size: TeamSizeOption | "";
  page_url: string;
  website: string;
};

export type LeadFieldName =
  | "name"
  | "work_email"
  | "company"
  | "use_case"
  | "message"
  | "team_size";

export type LeadValidationResult =
  | {
      success: true;
      data: LeadSubmission;
    }
  | {
      success: false;
      errors: Partial<Record<LeadFieldName, string>>;
    };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLeadSubmission(
  input: LeadSubmissionInput,
): LeadValidationResult {
  const normalizedTeamSize = normalizeSingleLine(input.team_size);
  const data: LeadSubmission = {
    name: normalizeSingleLine(input.name),
    work_email: normalizeSingleLine(input.work_email).toLowerCase(),
    company: normalizeSingleLine(input.company),
    use_case: normalizeSingleLine(input.use_case),
    message: normalizeMultiline(input.message),
    team_size: normalizeTeamSize(normalizedTeamSize),
    page_url: normalizeSingleLine(input.page_url),
    website: normalizeSingleLine(input.website),
  };

  const errors: Partial<Record<LeadFieldName, string>> = {};

  if (!data.name) {
    errors.name = "Enter your name.";
  } else if (data.name.length > 120) {
    errors.name = "Use 120 characters or fewer.";
  }

  if (!data.work_email) {
    errors.work_email = "Enter your work email.";
  } else if (!EMAIL_PATTERN.test(data.work_email)) {
    errors.work_email = "Enter a valid email address.";
  } else if (data.work_email.length > 160) {
    errors.work_email = "Use 160 characters or fewer.";
  }

  if (!data.company) {
    errors.company = "Enter your company name.";
  } else if (data.company.length > 160) {
    errors.company = "Use 160 characters or fewer.";
  }

  if (!data.use_case) {
    errors.use_case = "Enter the training use case.";
  } else if (data.use_case.length > 200) {
    errors.use_case = "Use 200 characters or fewer.";
  }

  if (!data.message) {
    errors.message = "Add a short description of your material or pilot.";
  } else if (data.message.length > 4000) {
    errors.message = "Use 4000 characters or fewer.";
  }

  if (
    normalizedTeamSize &&
    !TEAM_SIZE_OPTIONS.includes(normalizedTeamSize as TeamSizeOption)
  ) {
    errors.team_size = "Choose one of the listed team size ranges.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return { success: true, data };
}

export function buildLeadEmailPayload(input: {
  submission: LeadSubmission;
  submittedAt: string;
  ip: string;
  userAgent: string;
}) {
  const { submission, submittedAt, ip, userAgent } = input;
  const lines = [
    "New lead from Badger Shift landing page",
    "",
    `Name: ${submission.name}`,
    `Work email: ${submission.work_email}`,
    `Company: ${submission.company}`,
    `Use case: ${submission.use_case}`,
    `Message: ${submission.message}`,
    `Team size: ${submission.team_size || "Not provided"}`,
    `Page URL: ${submission.page_url || "Not provided"}`,
    `Submitted at: ${submittedAt}`,
    `IP: ${ip || "Unknown"}`,
    `User-Agent: ${userAgent || "Unknown"}`,
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6">
      <h2 style="margin:0 0 16px">[Badger Shift] New lead</h2>
      <table style="border-collapse:collapse;width:100%">
        <tbody>
          ${renderRow("Name", submission.name)}
          ${renderRow("Work email", submission.work_email)}
          ${renderRow("Company", submission.company)}
          ${renderRow("Use case", submission.use_case)}
          ${renderRow("Message", submission.message, true)}
          ${renderRow("Team size", submission.team_size || "Not provided")}
          ${renderRow("Page URL", submission.page_url || "Not provided")}
          ${renderRow("Submitted at", submittedAt)}
          ${renderRow("IP", ip || "Unknown")}
          ${renderRow("User-Agent", userAgent || "Unknown")}
        </tbody>
      </table>
    </div>
  `;

  return {
    subject: "[Badger Shift] New lead",
    text: lines.join("\n"),
    html,
  };
}

function normalizeSingleLine(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim();
}

function normalizeMultiline(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\r\n/g, "\n").trim();
}

function normalizeTeamSize(value: string): TeamSizeOption | "" {
  if (!value) {
    return "";
  }

  return TEAM_SIZE_OPTIONS.includes(value as TeamSizeOption)
    ? (value as TeamSizeOption)
    : "";
}

function renderRow(label: string, value: string, preserveWhitespace = false) {
  const safeValue = escapeHtml(value);
  const whiteSpace = preserveWhitespace ? "pre-wrap" : "normal";

  return `
    <tr>
      <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:700;vertical-align:top;width:180px">
        ${escapeHtml(label)}
      </td>
      <td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:${whiteSpace}">
        ${safeValue}
      </td>
    </tr>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
