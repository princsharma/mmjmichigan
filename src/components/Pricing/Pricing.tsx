import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { PRICING_PLANS } from "@/data/pricing";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section
      className={styles.section}
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <svg
        className={styles.deco}
        width="500"
        height="500"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="200" cy="200" r="200" fill="#52b788" />
        <circle cx="200" cy="200" r="140" fill="#52b788" />
      </svg>
      <div className={styles.wrap}>
        <Reveal>
          <SectionHeader
            variant="dark"
            tag="Transparent Pricing"
            title={
              <span id="pricing-title">
                Three Plans for Every Michigan Patient
              </span>
            }
            description="Flat-rate physician evaluation pricing. The Michigan Cannabis Regulatory Agency charges a separate state registration fee paid through the MMMP portal."
          />
        </Reveal>
        <div className={styles.grid}>
          {PRICING_PLANS.map((plan, idx) => (
            <Reveal key={plan.id} delay={idx * 0.1}>
              <article
                className={`${styles.card} ${
                  plan.popular ? styles.popular : ""
                }`}
              >
                {plan.popular && (
                  <span className={styles.popBadge}>★ Most Popular</span>
                )}
                <div className={styles.icon}>
                  <Icon name={plan.icon} size={24} strokeWidth={2.5} />
                </div>
                <div className={styles.title}>{plan.title}</div>
                <div className={styles.subtitle}>{plan.subtitle}</div>
                <div className={styles.amt}>
                  <sup>$</sup>
                  {plan.price}
                </div>
                <ul className={styles.featList}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.featItem}>
                      <span className={styles.featCheck}>
                        <Icon name="check" size={11} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#hero-form"
                  className={
                    plan.popular ? styles.btnPrimary : styles.btnOutline
                  }
                >
                  {plan.ctaLabel}
                  <Icon name="arrow-right" size={16} strokeWidth={2.5} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className={styles.note}>
          Note: The Michigan state registration fee is paid separately to the
          Cannabis Regulatory Agency through the MMMP patient portal — verify
          the current fee on the official Michigan.gov website before applying.
        </p>
      </div>
    </section>
  );
}
