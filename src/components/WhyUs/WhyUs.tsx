import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { WHY_US } from "@/data/whyUs";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <section
      className={styles.section}
      id="why-us"
      aria-labelledby="why-us-title"
    >
      <svg
        className={styles.bgDecor}
        width="600"
        height="600"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M200 20C200 20 40 80 40 200C40 310 110 380 200 380C290 380 360 310 360 200C360 80 200 20 200 20Z"
          fill="#52b788"
        />
      </svg>
      <div className={styles.headerWrap}>
        <Reveal>
          <SectionHeader
            tag="Why Choose Us"
            title={
              <span id="why-us-title">
                Why Michigan Patients Trust Us
                <br />
                for Their MMJ Card
              </span>
            }
            description="Every consultation is conducted by a Michigan-licensed physician who understands the Cannabis Regulatory Agency's requirements and provides compassionate, state-compliant guidance."
          />
        </Reveal>
      </div>
      <div className={styles.grid}>
        {WHY_US.map((item, idx) => (
          <Reveal key={item.num} delay={idx * 0.1}>
            <article className={styles.card}>
              <span className={styles.num}>{item.num}</span>
              <div className={styles.iconWrap}>
                <Icon name={item.icon} size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
