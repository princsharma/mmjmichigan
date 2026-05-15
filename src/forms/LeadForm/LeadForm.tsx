"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  leadFormSchema,
  type LeadFormValues,
} from "@/schemas/leadForm.schema";
import Icon from "@/components/Icon/Icon";
import styles from "./LeadForm.module.css";

const STATE = {
  stateAbbr: "MI",
  stateName: "Michigan",
  city: "Detroit",
  timezone: "EST",
} as const;

const UTM_SOURCE = "medicalmarijuanacardmichigan";

const HEALLY_BASE_URL = "https://mymmj.getheally.com/patient_admin/prefill";

function base64UrlEncode(input: string): string {
  return btoa(input)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length >= 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length >= 4) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return digits;
}

export default function LeadForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      terms: undefined,
      marketingOptIn: false,
    },
  });

  const onSubmit = (data: LeadFormValues) => {
    setSubmitError(null);
    try {
      const nameParts = data.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] ?? "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const payload = {
        first_name: firstName,
        last_name: lastName,
        email: data.email,
        phone: data.phone,
        state: STATE.stateAbbr,
        state_of_evaluation: STATE.stateAbbr,
        timezone: STATE.timezone,
        city: STATE.city,
        extra_data: {
          "contact[contact_type]": "Web Form",
          "product[name]": "Eva",
          utm_source: UTM_SOURCE,
        },
      };

      const preset = base64UrlEncode(JSON.stringify(payload));

      if (typeof window !== "undefined") {
        const w = window as Window & {
          dataLayer?: Record<string, unknown>[];
        };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "heallyValidatedSubmit",
          utm_source: UTM_SOURCE,
        });
      }

      window.location.assign(
        `${HEALLY_BASE_URL}?redirect=sched&preset=${preset}&utm_source=${UTM_SOURCE}`
      );
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  const phoneReg = register("phone");

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerIcon}>
            <Icon name="doc" size={22} strokeWidth={2.5} />
          </div>
          <div>
            <div className={styles.cardTitle}>Get Started Today</div>
            <div className={styles.cardSubtitle}>
              Begin your Michigan medical marihuana card application
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="Michigan MMJ card evaluation request"
        >
          <div className={styles.field}>
            <label htmlFor="fullName">Full Name *</label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              aria-invalid={!!errors.fullName}
              aria-describedby={
                errors.fullName ? "fullName-error" : undefined
              }
              {...register("fullName")}
            />
            {errors.fullName && (
              <span
                id="fullName-error"
                className={styles.error}
                role="alert"
              >
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="Enter your email address"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <span id="email-error" className={styles.error} role="alert">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="999-999-9999"
              maxLength={12}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              name={phoneReg.name}
              ref={phoneReg.ref}
              onBlur={phoneReg.onBlur}
              onChange={(e) => {
                const formatted = formatPhone(e.target.value);
                setValue("phone", formatted, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
            />
            {errors.phone && (
              <span id="phone-error" className={styles.error} role="alert">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className={styles.checkboxRow}>
            <input
              id="terms"
              type="checkbox"
              aria-invalid={!!errors.terms}
              aria-describedby={errors.terms ? "terms-error" : undefined}
              {...register("terms")}
            />
            <label htmlFor="terms">
              I accept the{" "}
              <a href="#" rel="nofollow" title="Terms and conditions">
                Terms and Conditions
              </a>{" "}
              *
            </label>
          </div>
          {errors.terms && (
            <span id="terms-error" className={styles.error} role="alert">
              {errors.terms.message}
            </span>
          )}

          <div className={styles.checkboxRow}>
            <input
              id="marketingOptIn"
              type="checkbox"
              {...register("marketingOptIn")}
            />
            <label htmlFor="marketingOptIn">
              I agree to receive emails with educational updates and Michigan
              MMJ offers.
            </label>
          </div>

          {submitError && (
            <p className={styles.error} role="alert">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting || !isValid}
            aria-busy={isSubmitting}
          >
            <Icon name="calendar" size={18} strokeWidth={2.5} />
            {isSubmitting ? "Redirecting…" : "Apply for Your MMJ Card"}
          </button>
        </form>
      </div>
    </div>
  );
}
