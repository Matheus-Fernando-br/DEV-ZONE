"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./ZoneFrame.module.css";

type Size = { width: number; height: number };

// A design-tool style selection frame around its children. The dimension
// labels show the frame's real rendered size and follow it as the viewport changes.
export function ZoneFrame({ label, children }: { label: string; children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Size | null>(null);

  useEffect(() => {
    const element = frameRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      const box = entry.borderBoxSize?.[0];
      const width = box ? box.inlineSize : entry.contentRect.width;
      const height = box ? box.blockSize : entry.contentRect.height;
      setSize({ width: Math.round(width), height: Math.round(height) });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.zone}>
      <div className={styles.rulerTop} aria-hidden="true">
        <span className={styles.rulerLine} />
        <span className={styles.rulerValue}>{size ? `${size.width}` : " "}</span>
        <span className={styles.rulerLine} />
      </div>

      <div ref={frameRef} className={styles.frame}>
        <span className={styles.tag} aria-hidden="true">
          {label}
        </span>
        <span className={`${styles.handle} ${styles.tl}`} aria-hidden="true" />
        <span className={`${styles.handle} ${styles.tr}`} aria-hidden="true" />
        <span className={`${styles.handle} ${styles.bl}`} aria-hidden="true" />
        <span className={`${styles.handle} ${styles.br}`} aria-hidden="true" />
        <div className={styles.content}>{children}</div>
      </div>

      <div className={styles.rulerSide} aria-hidden="true">
        <span className={styles.rulerLine} />
        <span className={styles.rulerValue}>{size ? `${size.height}` : " "}</span>
        <span className={styles.rulerLine} />
      </div>
    </div>
  );
}
