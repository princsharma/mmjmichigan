import Icon from "@/components/Icon/Icon";
import LeadForm from "@/forms/LeadForm/LeadForm";
import { CONDITION_GROUPS } from "@/data/conditions";
import styles from "./GetStarted.module.css";

const HIGHLIGHTS = [
  {
    icon: "shield-check" as const,
    title: "Michigan-Licensed Physicians",
    text: "Every doctor on our network holds an active Michigan medical license.",
  },
  {
    icon: "lock" as const,
    title: "HIPAA-Compliant Telehealth",
    text: "Your medical information is encrypted and never shared without consent.",
  },
  {
    icon: "calendar" as const,
    title: "Same-Day Appointments",
    text: "Most Michigan patients are seen within 24 hours of submitting their form.",
  },
];

export default function GetStarted() {
  const conditionTeasers = CONDITION_GROUPS.flatMap((g) => g.items)
    .slice(0, 10)
    .map((c) => c.name);

  return (
    <section
      id="get-started"
      className={styles.section}
      aria-labelledby="get-started-title"
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Apply Online</span>
          <h2 id="get-started-title" className={styles.title}>
            Start Your <em>Michigan</em> MMJ Card Application
          </h2>
          <p className={styles.desc}>
            Fill out the short form on the right and one of our Michigan care
            coordinators will reach out to schedule your secure telehealth visit
            with a Michigan-licensed physician.
          </p>
          <ul className={styles.highlights}>
            {HIGHLIGHTS.map((h) => (
              <li key={h.title} className={styles.highlight}>
                <span className={styles.highlightIcon}>
                  <Icon name={h.icon} size={18} strokeWidth={2.5} />
                </span>
                <div>
                  <div className={styles.highlightTitle}>{h.title}</div>
                  <p>{h.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.teaser}>
            <div className={styles.teaserHead}>
              <Icon name="check" size={14} strokeWidth={3} />
              Common Michigan qualifying conditions
            </div>
            <div className={styles.chipRow}>
              {conditionTeasers.map((c) => (
                <span key={c} className={styles.chip}>
                  {c}
                </span>
              ))}
              <a href="#conditions" className={styles.chipMore}>
                See full list
                <Icon name="arrow-right" size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
