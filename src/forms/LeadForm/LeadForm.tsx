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

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
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

  const onSubmit = async () => {
    setSubmitError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  };

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

        {submitted ? (
          <div className={styles.success} role="status" aria-live="polite">
            <Icon name="check" size={22} strokeWidth={2.5} />
            <div>
              <strong>Thanks! We received your request.</strong>
              <p>One of our Michigan care coordinators will reach out shortly.</p>
            </div>
          </div>
        ) : (
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
                placeholder="Enter your phone number"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                {...register("phone")}
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
                <a href="#" rel="nofollow">
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
              {isSubmitting ? "Booking..." : "Book My Appointment"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
