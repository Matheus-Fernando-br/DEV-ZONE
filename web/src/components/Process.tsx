import { processSteps } from "@/content/process";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section id="processo" className={`section ${styles.process}`} aria-labelledby="processo-title">
      <div className="container">
        <header className="section-head">
          <h2 id="processo-title" className="section-title">
            Como um projeto acontece.
          </h2>
          <p className="section-intro">
            Etapas claras, entregas que você acompanha e nenhuma surpresa no fim. Cada fase termina com algo concreto
            para revisar.
          </p>
        </header>

        <ol role="list" className={styles.steps}>
          {processSteps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
