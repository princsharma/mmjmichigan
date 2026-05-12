import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { NAV_LINKS, SITE } from "@/constants/site";
import styles from "./Footer.module.css";

const LEGAL_LINKS = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "HIPAA Notice" },
  { href: "#", label: "Sitemap" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link
            href="#top"
            className={styles.logo}
            aria-label={`${SITE.name} home`}
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
            <span>{SITE.shortName}</span>
          </Link>
          <p className={styles.tagline}>
            Online medical marijuana evaluations for Michigan residents,
            fully compliant with the Michigan Medical Marihuana Program
            administered by the Cannabis Regulatory Agency.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className={styles.emailLink}
            aria-label={`Email ${SITE.email}`}
          >
            <span className={styles.emailIcon}>
              <Icon name="mail" size={16} strokeWidth={2} />
            </span>
            {SITE.email}
          </a>
        </div>

        <nav className={styles.col} aria-label="Footer navigation">
          <h3 className={styles.colTitle}>Explore</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="#hero-form">Get Started</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Legal links">
          <h3 className={styles.colTitle}>Legal</h3>
          <ul>
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>State Compliance</h3>
          <p className={styles.colCopy}>
            Administered by the Michigan Cannabis Regulatory Agency under
            the Michigan Medical Marihuana Act of 2008.
          </p>
          <div className={styles.complianceChip}>
            <span className={styles.pulseDot} aria-hidden="true" />
            MI-Licensed Physicians
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {year} {SITE.name}. All rights reserved.
        </p>
        <p className={styles.disclaimer}>
          This service is independent of the State of Michigan. We do not
          issue state-registered cards — the Cannabis Regulatory Agency does.
        </p>
      </div>
    </footer>
  );
}
