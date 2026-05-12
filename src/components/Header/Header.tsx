"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/constants/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className={styles.nav} role="banner">
      <Link
        href="#top"
        className={styles.logo}
        aria-label={`${SITE.name} home`}
        onClick={close}
      >
        <svg
          className={styles.logoIcon}
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            cx="20"
            cy="20"
            r="19"
            fill="rgba(82,183,136,0.12)"
            stroke="rgba(82,183,136,0.3)"
            strokeWidth="1"
          />
          <path
            d="M20 6C20 6 10 12 10 21C10 27.6 14.5 33 20 33C25.5 33 30 27.6 30 21C30 12 20 6 20 6Z"
            fill="#52b788"
            opacity="0.7"
          />
          <path
            d="M20 10C20 10 14 15 14 21C14 24.8 16.7 28 20 28C23.3 28 26 24.8 26 21C26 15 20 10 20 10Z"
            fill="#95d5b2"
          />
          <line
            x1="20"
            y1="16"
            x2="20"
            y2="31"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="22"
            x2="17"
            y2="19"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="26"
            x2="23"
            y2="23"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {SITE.shortName}
      </Link>

      <nav aria-label="Primary" className={styles.desktopNav}>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link href="#hero-form" className={styles.navCta}>
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className={styles.hamburger}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`${styles.bar} ${open ? styles.barOpen1 : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen2 : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen3 : ""}`} />
      </button>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={close}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#hero-form" className={styles.navCta} onClick={close}>
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
