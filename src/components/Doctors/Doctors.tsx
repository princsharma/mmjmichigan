import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { CERT_BADGES } from "@/data/trust";
import styles from "./Doctors.module.css";

const TEAM = [
  { initials: "RS", name: "Dr. Rebecca S., M.D.", focus: "Internal Medicine" },
  { initials: "TM", name: "Dr. Theo M., D.O.", focus: "Pain Management" },
  { initials: "KJ", name: "Dr. Karen J., M.D.", focus: "Psychiatry / PTSD" },
  { initials: "AL", name: "Dr. Anwar L., M.D.", focus: "Family Medicine" },
];

export default function Doctors() {
  return (
    <section
      className={styles.section}
      aria-labelledby="doctors-title"
      id="doctors"
    >
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            align="center"
            variant="dark"
            tag="Our Medical Team"
            title={
              <span id="doctors-title">
                Expert Care from Michigan-Licensed Physicians
              </span>
            }
            description="Our network of Michigan-licensed physicians specializes in cannabis evaluations for the MMMP. Each doctor stays current with Cannabis Regulatory Agency guidance and reviews your medical history with care."
          />
        </Reveal>

        <Reveal>
          <div className={styles.avatarRow}>
            {TEAM.map((doc, i) => (
              <div key={doc.name} className={styles.avatarCard}>
                <div
                  className={styles.avatar}
                  data-i={i % 4}
                  aria-hidden="true"
                >
                  {doc.initials}
                </div>
                <div className={styles.docName}>{doc.name}</div>
                <div className={styles.docFocus}>{doc.focus}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.quoteBlock}>
            <div className={styles.liveRow}>
              <span className={styles.liveDot} aria-hidden="true" />
              <span className={styles.liveLabel}>
                Live Michigan-Licensed Consultation
              </span>
            </div>
            <blockquote className={styles.quote}>
              &ldquo;Every patient deserves a clear, compassionate conversation
              about whether medical cannabis is right for them. Our role is to
              listen carefully, review your history honestly, and make sure
              your Michigan application is grounded in real clinical judgment.&rdquo;
            </blockquote>
            <div className={styles.quoteAttr}>
              — Care Team, Michigan MMJ Card
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.badgeRow}>
            {CERT_BADGES.map((badge) => (
              <div key={badge.label} className={styles.badge}>
                <Icon name={badge.icon} size={16} strokeWidth={2.5} />
                {badge.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.ctaRow}>
            <Link href="#get-started" className={styles.btn}>
              Start Your Journey Today
              <Icon name="arrow-right" size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
