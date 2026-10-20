import { stack } from "@/content/stack";
import styles from "./StackSection.module.css";

export function StackSection() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <div className="container">
        <header className="section-head">
          <h2 id="stack-title" className="section-title">
            Tecnologias usadas nos projetos.
          </h2>
          <p className="section-intro">
            Ferramentas modernas e estáveis, escolhidas pelo que cada projeto precisa. Esta lista mostra apenas o que já
            está em uso nos projetos acima.
          </p>
        </header>

        <div className={styles.grid}>
          {stack.map((group) => (
            <section key={group.area} className={styles.group} aria-labelledby={`stack-${group.area}`}>
              <h3 id={`stack-${group.area}`} className={styles.area}>
                {group.area}
              </h3>
              <ul role="list" className={styles.items}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.usedIn}>
                Usado em {group.usedIn}
                {group.usedIn.endsWith(".") ? "" : "."}
              </p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
