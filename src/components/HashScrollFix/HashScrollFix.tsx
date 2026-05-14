"use client";

import { useEffect } from "react";

export default function HashScrollFix() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      if (href === "#top") {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
        return;
      }

      const id = decodeURIComponent(href.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      e.stopPropagation();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search + href
      );
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
