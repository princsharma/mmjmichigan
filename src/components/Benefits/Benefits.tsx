import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { BENEFITS } from "@/data/benefits";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles.section} aria-labelledby="benefits-title">
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            tag="Card Benefits"
            title={
              <span id="benefits-title">
                Benefits of Your Michigan
                <br />
                Medical Marihuana Card
              </span>
            }
            description="With a valid Michigan medical marihuana card, qualifying patients access medical cannabis through state-licensed provisioning centers under the Michigan Medical Marihuana Program, with legal protection under the MMMA."
          />
        </Reveal>
        <div className={styles.grid}>
          {BENEFITS.map((benefit, idx) => (
            <Reveal key={benefit.title} delay={idx * 0.1}>
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon name={benefit.icon} size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <span className={styles.tag}>{benefit.tag}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
