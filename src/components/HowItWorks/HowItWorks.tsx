import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { STEPS } from "@/data/steps";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section
      className={styles.section}
      id="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <svg
        className={styles.deco}
        viewBox="0 0 1440 800"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M720 50 C720 50 300 100 200 400 C100 700 400 750 720 750 C1040 750 1340 700 1240 400 C1140 100 720 50 720 50Z"
          fill="#52b788"
        />
      </svg>
      <Reveal>
        <div className={styles.headerWrap}>
          <SectionHeader
            variant="dark"
            tag="Simple Process"
            title={
              <span id="how-it-works-title">
                How to Get a Michigan
                <br />
                Medical Marihuana Card Online
              </span>
            }
            description="Complete your physician evaluation with us, then submit your certification through the Michigan Medical Marihuana Program (MMMP) portal administered by the Cannabis Regulatory Agency (CRA)."
          />
        </div>
      </Reveal>

      <div className={styles.timelineWrap}>
        <div className={styles.line} aria-hidden="true" />
        <ol className={styles.timeline}>
          {STEPS.map((step, idx) => {
            const side = idx % 2 === 0 ? styles.right : styles.left;
            return (
              <li
                key={step.title}
                className={`${styles.row} ${side}`}
              >
                <Reveal
                  direction={idx % 2 === 0 ? "right" : "left"}
                  className={styles.cardSlot}
                >
                  <article className={styles.card}>
                    <div className={styles.cardHead}>
                      <span className={styles.stepNum}>
                        Step 0{idx + 1}
                      </span>
                      <div className={styles.bubble}>
                        <Icon
                          name={step.icon}
                          size={26}
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </Reveal>
                <span className={styles.dot} aria-hidden="true">
                  <span className={styles.dotInner} />
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <div className={styles.cta}>
        <Link href="#hero-form" className={styles.btn}>
          Consult With a Michigan MMJ Doctor
          <Icon name="arrow-right" size={18} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
