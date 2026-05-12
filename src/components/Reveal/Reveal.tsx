"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Direction = "up" | "left" | "right";

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  style,
  id,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const baseClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
      ? "reveal-right"
      : "reveal";

  const combined = [
    baseClass,
    visible ? "visible" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const computedStyle: CSSProperties = {
    transitionDelay: delay ? `${delay}s` : undefined,
    ...style,
  };

  return (
    <div ref={ref} id={id} className={combined} style={computedStyle}>
      {children}
    </div>
  );
}
