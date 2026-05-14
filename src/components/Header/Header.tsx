"use client";

import Image from "next/image";
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
        <Image
          src="/michigan-logo.webp"
          alt={SITE.name}
          width={2039}
          height={694}
          priority
          className={styles.logoImg}
        />
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
