import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { HERO_TRUST } from "@/data/trust";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <svg
        className={styles.bgCircles}
        viewBox="0 0 1440 900"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="1100" cy="300" r="350" fill="#52b788" />
        <circle cx="200" cy="700" r="200" fill="#52b788" />
        <circle cx="700" cy="100" r="120" fill="#e9c46a" />
      </svg>

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.pulseDot} aria-hidden="true" />
            Michigan Licensed Physicians · State Compliant
          </div>
          <h1 className={styles.title} id="hero-title">
            Apply for a <em>Michigan</em>
            <br />
            Medical{" "}
            <span className={styles.underlineText}>Marijuana Card</span>
            <br />
            Online Today
          </h1>
          <p className={styles.desc}>
            Get evaluated by a Michigan-licensed physician through our secure
            telehealth platform — fully compliant with the Michigan Medical
            Marihuana Program (MMMP) administered by the Cannabis Regulatory
            Agency. Same-day appointments available statewide.
          </p>
          <div className={styles.trustRow}>
            {HERO_TRUST.map((chip) => (
              <div key={chip.label} className={styles.trustChip}>
                <Icon name={chip.icon} size={15} strokeWidth={2.5} />
                {chip.label}
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <Link href="#get-started" className={styles.btnHero}>
              <Icon name="calendar" size={20} strokeWidth={2.5} />
              Start My Evaluation Now
            </Link>
            <Link href="#how-it-works" className={styles.btnGhost}>
              How it works
              <Icon name="chevron-down" size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.illustration}>
            <svg
              viewBox="0 0 420 480"
              className={styles.illoSvg}
              fill="none"
              role="img"
              aria-label="Illustration of a physician with a stethoscope beside a cannabis leaf"
            >
              <defs>
                <linearGradient
                  id="heroDocGrad"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#52b788" />
                  <stop offset="100%" stopColor="#2d7a52" />
                </linearGradient>
                <linearGradient
                  id="heroLeafGrad"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#95d5b2" />
                  <stop offset="100%" stopColor="#52b788" />
                </linearGradient>
                <radialGradient id="heroRing" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="60%"
                    stopColor="rgba(82,183,136,0)"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(82,183,136,0.18)"
                  />
                </radialGradient>
              </defs>

              {/* Soft halo */}
              <circle cx="210" cy="220" r="200" fill="url(#heroRing)" />
              <circle
                cx="210"
                cy="220"
                r="170"
                stroke="rgba(149,213,178,0.18)"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="210"
                cy="220"
                r="120"
                stroke="rgba(149,213,178,0.12)"
                strokeWidth="1"
                fill="none"
              />

              {/* Cannabis leaf */}
              <g transform="translate(280 90) rotate(20)">
                <path
                  d="M0 60 C-12 30 -10 0 0 -60 C10 0 12 30 0 60Z"
                  fill="url(#heroLeafGrad)"
                  opacity="0.92"
                />
                <path
                  d="M0 50 C-30 40 -50 18 -64 -20 C-30 -10 -10 10 0 30Z"
                  fill="url(#heroLeafGrad)"
                  opacity="0.85"
                />
                <path
                  d="M0 50 C30 40 50 18 64 -20 C30 -10 10 10 0 30Z"
                  fill="url(#heroLeafGrad)"
                  opacity="0.85"
                />
                <path
                  d="M0 30 C-26 26 -44 6 -56 -34 C-24 -28 -8 -8 0 16Z"
                  fill="url(#heroLeafGrad)"
                  opacity="0.78"
                />
                <path
                  d="M0 30 C26 26 44 6 56 -34 C24 -28 8 -8 0 16Z"
                  fill="url(#heroLeafGrad)"
                  opacity="0.78"
                />
                <path
                  d="M0 60 L0 100"
                  stroke="#2d7a52"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>

              {/* Doctor figure (abstract) */}
              <g>
                {/* coat shoulders */}
                <path
                  d="M90 360 C120 290 170 270 210 270 C250 270 300 290 330 360 L330 440 L90 440 Z"
                  fill="#ffffff"
                  opacity="0.98"
                />
                {/* coat lapel */}
                <path
                  d="M180 290 L210 350 L240 290 L240 440 L180 440 Z"
                  fill="#f1faf3"
                />
                {/* head */}
                <circle
                  cx="210"
                  cy="220"
                  r="58"
                  fill="url(#heroDocGrad)"
                />
                {/* face highlight */}
                <ellipse
                  cx="195"
                  cy="210"
                  rx="14"
                  ry="6"
                  fill="rgba(255,255,255,0.18)"
                />
                {/* stethoscope */}
                <path
                  d="M160 320 C155 360 180 388 210 388 C240 388 265 360 260 320"
                  stroke="#0d2818"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="210" cy="395" r="10" fill="#e9c46a" />
                <circle
                  cx="210"
                  cy="395"
                  r="5"
                  fill="rgba(13,40,24,0.5)"
                />
                {/* ID badge */}
                <rect
                  x="247"
                  y="335"
                  width="40"
                  height="52"
                  rx="6"
                  fill="#0d2818"
                />
                <rect
                  x="253"
                  y="345"
                  width="28"
                  height="3"
                  rx="1.5"
                  fill="#52b788"
                />
                <rect
                  x="253"
                  y="352"
                  width="22"
                  height="2"
                  rx="1"
                  fill="rgba(149,213,178,0.6)"
                />
                <circle cx="267" cy="370" r="6" fill="#52b788" />
              </g>
            </svg>
          </div>
          <div className={styles.floatingBadge}>
            <Icon name="check" size={22} strokeWidth={2.5} />
            <div>
              <div className={styles.fbTitle}>98% Approval Rate</div>
              <div className={styles.fbSub}>5,000+ patients served</div>
            </div>
          </div>
          <div className={styles.floatingBadge2}>
            <Icon name="clock" size={18} strokeWidth={2.5} />
            <div>
              <div className={styles.fbTitle}>Same-Day</div>
              <div className={styles.fbSub}>MI telehealth visits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
