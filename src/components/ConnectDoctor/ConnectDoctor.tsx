import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { CONNECT_DOCTOR_FEATURES } from "@/data/featurePairs";
import styles from "./ConnectDoctor.module.css";

export default function ConnectDoctor() {
  return (
    <section
      className={styles.section}
      aria-labelledby="connect-doctor-title"
    >
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            tag="Speak With a Physician"
            title={
              <span id="connect-doctor-title">
                Connect With a Doctor for Your
                <br />
                Michigan Medical Marijuana Card
              </span>
            }
            description="Michigan-licensed physicians offer secure online consultations to guide patients through the MMMP evaluation with care and confidence."
          />
        </Reveal>

        <Reveal>
          <div className={styles.featureGrid}>
            {CONNECT_DOCTOR_FEATURES.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <div className={styles.iconWrap}>
                  <Icon name={feature.icon} size={24} strokeWidth={2.5} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.subtitle}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.ctaRow}>
            <Link href="#hero-form" className={styles.btnPrimary}>
              Schedule Consultation
              <Icon name="arrow-right" size={18} strokeWidth={2.5} />
            </Link>
            <Link href="#how-it-works" className={styles.btnOutline}>
              Learn More
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
