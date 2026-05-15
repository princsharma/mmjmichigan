"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import {
  CONDITION_GROUPS,
  type ConditionGroupId,
} from "@/data/conditions";
import styles from "./Conditions.module.css";

export default function Conditions() {
  const [active, setActive] = useState<ConditionGroupId>(
    CONDITION_GROUPS[0].id
  );
  const activeGroup =
    CONDITION_GROUPS.find((g) => g.id === active) ?? CONDITION_GROUPS[0];

  return (
    <section
      className={styles.section}
      id="conditions"
      aria-labelledby="conditions-title"
    >
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.headerRow}>
            <SectionHeader
              align="left"
              tag="Eligibility"
              title={
                <span id="conditions-title">
                  Qualifying Conditions for a Michigan
                  <br />
                  Medical Marihuana Card
                </span>
              }
              description="To qualify, you must have at least one debilitating medical condition recognized under the Michigan Medical Marihuana Act (MMMA). The list below reflects categories published by the Cannabis Regulatory Agency — your physician will confirm eligibility during the evaluation."
            />
            <aside className={styles.highlight}>
              <div className={styles.highlightIcon}>
                <Icon name="shield-check" size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3>Not sure if you qualify?</h3>
                <p>
                  Our Michigan-licensed physician reviews your medical history
                  during the consultation and confirms whether your condition
                  meets MMMA requirements.
                </p>
              </div>
            </aside>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.tabsWrap}>
            <div
              className={styles.tabs}
              role="tablist"
              aria-label="Qualifying conditions by category"
            >
              {CONDITION_GROUPS.map((group) => {
                const isActive = active === group.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    id={`tab-${group.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${group.id}`}
                    tabIndex={isActive ? 0 : -1}
                    className={`${styles.tab} ${
                      isActive ? styles.tabActive : ""
                    }`}
                    onClick={() => setActive(group.id)}
                  >
                    {group.label}
                    <span className={styles.tabCount}>
                      {group.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`panel-${activeGroup.id}`}
              aria-labelledby={`tab-${activeGroup.id}`}
              className={styles.panel}
            >
              <p className={styles.panelDesc}>{activeGroup.description}</p>
              <ul className={styles.grid}>
                {activeGroup.items.map((cond) => (
                  <li key={cond.name} className={styles.pill}>
                    <span className={styles.icon}>
                      <Icon
                        name={cond.variant}
                        size={12}
                        strokeWidth={2.5}
                      />
                    </span>
                    {cond.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
