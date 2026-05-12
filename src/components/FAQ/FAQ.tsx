"use client";

import { useMemo, useState } from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import {
  FAQS,
  FAQ_GROUPS,
  type FaqGroupId,
} from "@/data/faq";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [activeGroup, setActiveGroup] = useState<FaqGroupId>(
    FAQ_GROUPS[0].id
  );
  const [openIndex, setOpenIndex] = useState<number>(0);

  const visible = useMemo(
    () => FAQS.filter((f) => f.group === activeGroup),
    [activeGroup]
  );

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <svg
        className={styles.deco}
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
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            tag="FAQ"
            title={<span id="faq-title">Frequently Asked Questions</span>}
            description="Everything you need to know about getting and renewing your Michigan medical marihuana card."
          />
        </Reveal>

        <Reveal>
          <div className={styles.layout}>
            <aside className={styles.sideNav} aria-label="FAQ categories">
              <div className={styles.sideTitle}>Jump to</div>
              <ul>
                {FAQ_GROUPS.map((group) => {
                  const isActive = activeGroup === group.id;
                  const count = FAQS.filter(
                    (f) => f.group === group.id
                  ).length;
                  return (
                    <li key={group.id}>
                      <button
                        type="button"
                        className={`${styles.sideBtn} ${
                          isActive ? styles.sideBtnActive : ""
                        }`}
                        onClick={() => {
                          setActiveGroup(group.id);
                          setOpenIndex(0);
                        }}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span>{group.label}</span>
                        <span className={styles.sideCount}>{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <div className={styles.list}>
              {visible.map((item, idx) => {
                const isOpen = openIndex === idx;
                const buttonId = `faq-btn-${activeGroup}-${idx}`;
                const panelId = `faq-panel-${activeGroup}-${idx}`;
                return (
                  <div
                    key={item.question}
                    className={`${styles.item} ${
                      isOpen ? styles.open : ""
                    }`}
                  >
                    <button
                      type="button"
                      className={styles.btn}
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    >
                      {item.question}
                      <span className={styles.qIcon} aria-hidden="true">
                        +
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.body}
                      hidden={!isOpen}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
