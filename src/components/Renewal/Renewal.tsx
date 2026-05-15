import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { RENEWAL_STEPS } from "@/data/renewal";
import styles from "./Renewal.module.css";

export default function Renewal() {
  return (
    <section className={styles.section} aria-labelledby="renewal-title">
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            tag="Card Renewal"
            title={
              <span id="renewal-title">
                How to Renew Your Michigan
                <br />
                Medical Marihuana Card
              </span>
            }
            description="Michigan medical marihuana cards are typically valid for two years. Renew before your expiration date through the Cannabis Regulatory Agency patient portal to keep your registration current."
          />
        </Reveal>
        <ol className={styles.grid}>
          {RENEWAL_STEPS.map((step, idx) => (
            <li key={step.num} className={styles.cardWrap}>
              <Reveal delay={idx * 0.1} className={styles.card}>
                <div className={styles.numBadge}>{step.num}</div>
                <div className={styles.icon}>
                  <Icon name={step.icon} size={20} strokeWidth={2.5} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
