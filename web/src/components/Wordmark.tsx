import styles from "./Wordmark.module.css";

// The Dev Zone mark: a selection frame with corner handles — the "zone".
export function ZoneMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="1" width="5" height="5" fill="var(--signal)" />
      <rect x="18" y="1" width="5" height="5" fill="currentColor" />
      <rect x="1" y="18" width="5" height="5" fill="currentColor" />
      <rect x="18" y="18" width="5" height="5" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <span className={`${styles.wordmark} ${tone === "light" ? styles.light : ""}`}>
      <ZoneMark className={styles.mark} />
      <span className={styles.text}>Dev Zone</span>
    </span>
  );
}
