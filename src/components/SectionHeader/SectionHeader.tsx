import type { CSSProperties, ReactNode } from "react";
import styles from "./SectionHeader.module.css";

type Props = {
  tag: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  variant?: "light" | "dark";
  className?: string;
  style?: CSSProperties;
};

export default function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  variant = "light",
  className,
  style,
}: Props) {
  const wrapperClass = [
    styles.wrap,
    align === "center" ? styles.center : styles.left,
    variant === "dark" ? styles.dark : styles.light,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClass} style={style}>
      <span className={styles.tag}>{tag}</span>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.desc}>{description}</p> : null}
    </div>
  );
}
