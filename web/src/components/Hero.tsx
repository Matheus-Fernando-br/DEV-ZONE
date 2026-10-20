import { site } from "@/lib/site";
import styles from "./Hero.module.css";
import { ZoneFrame } from "./ZoneFrame";

const capabilities = ["Sites", "Sistemas web", "SaaS", "Apps mobile", "APIs", "Automação"];

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <ZoneFrame label="Dev Zone">
          <h1 id="hero-title" className={styles.title}>
            Engenharia de software para transformar ideias em produtos digitais.
          </h1>
        </ZoneFrame>

        <div className={styles.below}>
          <p className={styles.lead}>
            Sites, sistemas web, plataformas SaaS, APIs e aplicativos, do primeiro esboço ao deploy em produção. Código
            limpo, arquitetura pensada para crescer e comunicação direta com quem desenvolve.
          </p>
          <div className={styles.actions}>
            <a href="#contato" className="button button-signal">
              Solicitar orçamento
            </a>
            <a href="#projetos" className="button button-ghost">
              Ver projetos
            </a>
          </div>
        </div>

        <div className={styles.meta}>
          <p className={styles.byline}>
            Projetado e desenvolvido por <strong>{site.ownerShort}</strong>, desenvolvedor full stack em {site.location}.
          </p>
          <ul role="list" className={styles.capabilities} aria-label="O que a Dev Zone desenvolve">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
