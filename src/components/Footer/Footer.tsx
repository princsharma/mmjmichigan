import Image from "next/image";
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
            <Image
              src="/michigan-logo.webp"
              alt={SITE.name}
              width={2039}
              height={694}
              className={styles.logoImg}
            />
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
