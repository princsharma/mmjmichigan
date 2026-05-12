import Icon from "@/components/Icon/Icon";
import Reveal from "@/components/Reveal/Reveal";
import { STATS } from "@/data/stats";
import styles from "./StatsBar.module.css";

export default function StatsBar() {
  return (
    <section className={styles.bar} aria-label="Key statistics">
      <div className={styles.inner}>
        {STATS.map((stat, idx) => (
          <Reveal key={stat.label} delay={idx * 0.08}>
            <div className={styles.cell}>
              <div className={styles.icon}>
                <Icon name={stat.icon} size={26} strokeWidth={2} />
              </div>
              <span className={styles.num}>{stat.value}</span>
              <span className={styles.lbl}>{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
