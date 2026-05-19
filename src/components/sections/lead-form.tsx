"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

import {
  TEAM_SIZE_OPTIONS,
  type LeadFieldName,
} from "@/lib/lead";

type LeadFormState = {
  name: string;
  work_email: string;
  company: string;
  use_case: string;
  message: string;
  team_size: string;
  website: string;
};

const INITIAL_FORM_DATA: LeadFormState = {
  name: "",
  work_email: "",
  company: "",
  use_case: "",
  message: "",
  team_size: "",
  website: "",
};

type FormStatus = "default" | "sending" | "success" | "error";

export function LeadForm() {
  const [formData, setFormData] = useState<LeadFormState>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<FormStatus>("default");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<LeadFieldName, string>>
  >({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          page_url: window.location.href,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Partial<Record<LeadFieldName, string>>;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(
          result.error || "The request could not be sent. Please try again.",
        );
        setFieldErrors(result.fieldErrors ?? {});
        return;
      }

      setStatus("success");
      setFormData(INITIAL_FORM_DATA);
    } catch {
      setStatus("error");
      setErrorMessage("The request could not be sent. Please try again.");
    }
  }

  function updateField(name: keyof LeadFormState, value: string) {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function resetSuccessState() {
    setStatus("default");
  }

  return (
    <section className="lead-form-section" id="result">
      <div className="container">
        <div className="lead-form-section__inner">
          <div className="row align-items-stretch">
            <div className="col-xl-5 col-lg-5">
              <div className="lead-form-section__intro">
                <p className="lead-form-section__eyebrow">Meeting request</p>
                <h2 className="sec-title__title lead-form-section__title">
                  Request A <span>Short Intro Call</span>
                </h2>
                <p className="lead-form-section__text">
                  Share the training use case, team context and current setup.
                  We will use it to prepare a focused conversation about the
                  right pilot scope.
                </p>
                <ul className="lead-form-section__list">
                  <li>
                    <Image
                      className="about-two__checkmark"
                      src="/icon/checkmark.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>
                      Built around your existing SOPs, slides, PDFs or video
                    </span>
                  </li>
                  <li>
                    <Image
                      className="about-two__checkmark"
                      src="/icon/checkmark.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>Designed for frontline teams and mobile access</span>
                  </li>
                  <li>
                    <Image
                      className="about-two__checkmark"
                      src="/icon/checkmark.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>
                      SCORM-ready output that fits your current LMS setup
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="lead-form-card">
                <form className="lead-form" onSubmit={handleSubmit} noValidate>
                  <div className="lead-form__grid">
                    <div className="lead-form__field">
                      <label htmlFor="lead-name">Name</label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name ?? ""}
                        onChange={(event) => updateField("name", event.target.value)}
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? "lead-name-error" : undefined}
                      />
                      {fieldErrors.name ? (
                        <p className="lead-form__error" id="lead-name-error">
                          {fieldErrors.name}
                        </p>
                      ) : null}
                    </div>

                    <div className="lead-form__field">
                      <label htmlFor="lead-work-email">Work email</label>
                      <input
                        id="lead-work-email"
                        name="work_email"
                        type="email"
                        autoComplete="email"
                        value={formData.work_email ?? ""}
                        onChange={(event) =>
                          updateField("work_email", event.target.value)
                        }
                        aria-invalid={Boolean(fieldErrors.work_email)}
                        aria-describedby={
                          fieldErrors.work_email ? "lead-work-email-error" : undefined
                        }
                      />
                      {fieldErrors.work_email ? (
                        <p className="lead-form__error" id="lead-work-email-error">
                          {fieldErrors.work_email}
                        </p>
                      ) : null}
                    </div>

                    <div className="lead-form__field">
                      <label htmlFor="lead-company">Company</label>
                      <input
                        id="lead-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company ?? ""}
                        onChange={(event) => updateField("company", event.target.value)}
                        aria-invalid={Boolean(fieldErrors.company)}
                        aria-describedby={
                          fieldErrors.company ? "lead-company-error" : undefined
                        }
                      />
                      {fieldErrors.company ? (
                        <p className="lead-form__error" id="lead-company-error">
                          {fieldErrors.company}
                        </p>
                      ) : null}
                    </div>

                    <div className="lead-form__field">
                      <label htmlFor="lead-team-size">Team size</label>
                      <select
                        id="lead-team-size"
                        name="team_size"
                        value={formData.team_size ?? ""}
                        onChange={(event) => updateField("team_size", event.target.value)}
                        aria-invalid={Boolean(fieldErrors.team_size)}
                        aria-describedby={
                          fieldErrors.team_size ? "lead-team-size-error" : undefined
                        }
                      >
                        <option value="">Select a range</option>
                        {TEAM_SIZE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.team_size ? (
                        <p className="lead-form__error" id="lead-team-size-error">
                          {fieldErrors.team_size}
                        </p>
                      ) : null}
                    </div>

                    <div className="lead-form__field lead-form__field--full">
                      <label htmlFor="lead-use-case">Use case</label>
                      <input
                        id="lead-use-case"
                        name="use_case"
                        type="text"
                        value={formData.use_case ?? ""}
                        onChange={(event) => updateField("use_case", event.target.value)}
                        aria-invalid={Boolean(fieldErrors.use_case)}
                        aria-describedby={
                          fieldErrors.use_case ? "lead-use-case-error" : undefined
                        }
                      />
                      {fieldErrors.use_case ? (
                        <p className="lead-form__error" id="lead-use-case-error">
                          {fieldErrors.use_case}
                        </p>
                      ) : null}
                    </div>

                    <div className="lead-form__field lead-form__field--full">
                      <label htmlFor="lead-message">Message</label>
                      <textarea
                        id="lead-message"
                        name="message"
                        rows={6}
                        value={formData.message ?? ""}
                        onChange={(event) => updateField("message", event.target.value)}
                        aria-invalid={Boolean(fieldErrors.message)}
                        aria-describedby={
                          fieldErrors.message ? "lead-message-error" : undefined
                        }
                      />
                      {fieldErrors.message ? (
                        <p className="lead-form__error" id="lead-message-error">
                          {fieldErrors.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="lead-form__honeypot" aria-hidden="true">
                    <label htmlFor="lead-website">Leave this field empty</label>
                    <input
                      id="lead-website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website ?? ""}
                      onChange={(event) => updateField("website", event.target.value)}
                    />
                  </div>

                  <div className="lead-form__footer">
                    <button
                      className="thm-btn lead-form__submit"
                      type="submit"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending..." : "Request a call"}
                    </button>

                    <p className="lead-form__note">
                      We use this information only to prepare the conversation.
                    </p>
                  </div>

                  <div className="lead-form__status" aria-live="polite">
                    {status === "error" && errorMessage ? (
                      <p className="lead-form__status-message lead-form__status-message--error">
                        {errorMessage}
                      </p>
                    ) : null}
                  </div>
                </form>

                {status === "success" ? (
                  <div className="lead-form__success">
                    <div className="lead-form__success-card">
                      <p className="lead-form__success-eyebrow">Sent</p>
                      <h3>Your request was sent successfully</h3>
                      <p>
                        We have your details and will get back to you to arrange
                        the conversation.
                      </p>
                      <button
                        className="thm-btn lead-form__success-button"
                        type="button"
                        onClick={resetSuccessState}
                      >
                        Send another request
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
