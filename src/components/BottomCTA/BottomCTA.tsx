import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { BOTTOM_CTA_FEATURES } from "@/data/featurePairs";
import styles from "./BottomCTA.module.css";

export default function BottomCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <svg
        className={styles.deco}
        viewBox="0 0 1440 800"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M720 -100C720 -100 200 100 100 400C0 700 300 850 720 850C1140 850 1440 700 1340 400C1240 100 720 -100 720 -100Z"
          fill="#52b788"
        />
      </svg>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <Icon name="calendar" size={14} strokeWidth={2.5} />
          Get Started Today
        </div>
        <h2 id="cta-title" className={styles.title}>
          Consult with a Michigan
          <br />
          MMJ Doctor Today
        </h2>
        <p className={styles.desc}>
          Speak with a Michigan-licensed physician through a secure online
          consultation — fully aligned with the Michigan Medical Marihuana
          Program.
        </p>
        <div className={styles.features}>
          {BOTTOM_CTA_FEATURES.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.iconWrap}>
                <Icon name={feature.icon} size={22} strokeWidth={2.5} />
              </div>
              <div className={styles.featureText}>
                <h3>{feature.title}</h3>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="#get-started" className={styles.btn}>
          <Icon name="calendar" size={20} strokeWidth={2.5} />
          Book Your Appointment Now
        </Link>
      </div>
    </section>
  );
}
