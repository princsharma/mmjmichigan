"use client";

import { useCallback, useState } from "react";
import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { TESTIMONIALS } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  );

  const active = TESTIMONIALS[index];

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            tag="Patient Reviews"
            title={
              <span id="testimonials-title">
                Hear from Michigan Patients Like You
              </span>
            }
            description="From Detroit to Grand Rapids, Lansing to Ann Arbor, Michigan patients describe their telehealth evaluation experience in their own words."
          />
        </Reveal>

        <Reveal>
          <div
            className={styles.stage}
            role="region"
            aria-roledescription="carousel"
            aria-label="Patient testimonials"
            aria-live="polite"
          >
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
            >
              <Icon name="arrow-left" size={18} strokeWidth={2.5} />
            </button>

            <article
              key={active.name}
              className={styles.card}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
            >
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <div
                className={styles.stars}
                aria-label={`Rated ${active.rating} out of 5 stars`}
              >
                {"★".repeat(active.rating)}
              </div>
              <blockquote className={styles.text}>
                &ldquo;{active.text}&rdquo;
              </blockquote>
              <div className={styles.divider} />
              <footer className={styles.person}>
                <div className={styles.ava} aria-hidden="true">
                  {active.initials}
                </div>
                <div>
                  <div className={styles.name}>{active.name}</div>
                  <div className={styles.loc}>
                    <Icon name="pin" size={12} strokeWidth={2} />
                    {active.location}
                  </div>
                </div>
              </footer>
            </article>

            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
            >
              <Icon name="arrow-right" size={18} strokeWidth={2.5} />
            </button>
          </div>

          <div
            className={styles.dots}
            role="tablist"
            aria-label="Choose testimonial"
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${t.name}`}
                className={`${styles.dot} ${
                  i === index ? styles.dotActive : ""
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
