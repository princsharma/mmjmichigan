import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 5%",
        textAlign: "center",
        background: "var(--cream)",
        color: "var(--g1)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          marginBottom: "1rem",
          letterSpacing: "-0.03em",
          fontWeight: 800,
        }}
      >
        404
      </h1>
      <p
        style={{
          color: "var(--muted)",
          maxWidth: "440px",
          marginBottom: "2rem",
          lineHeight: 1.7,
        }}
      >
        The page you were looking for could not be found.
      </p>
      <Link
        href="/"
        style={{
          background: "linear-gradient(135deg,#52b788,#2d7a52)",
          color: "#ffffff",
          padding: "14px 32px",
          borderRadius: "60px",
          fontWeight: 700,
          boxShadow: "0 10px 36px rgba(82,183,136,.4)",
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
