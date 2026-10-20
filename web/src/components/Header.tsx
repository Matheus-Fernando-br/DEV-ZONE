"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";
import styles from "./Header.module.css";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.dataset.menuOpen = "true";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 960px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      delete document.documentElement.dataset.menuOpen;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header} data-scrolled={scrolled || open} data-open={open}>
      <div className={`container ${styles.bar}`}>
        <a href="#inicio" className={styles.brand} aria-label="Dev Zone, voltar ao início" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav className={styles.desktopNav} aria-label="Principal">
          <ul role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contato" className={`button button-signal ${styles.cta}`}>
          Solicitar orçamento
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span className={styles.toggleIcon} aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} className={styles.panel} hidden={!open}>
        <nav aria-label="Principal (celular)" className="container">
          <ul role="list" className={styles.panelList}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className={`button button-signal ${styles.panelCta}`} onClick={() => setOpen(false)}>
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
