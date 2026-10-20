import { nav, site } from "@/lib/site";
import styles from "./Footer.module.css";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Wordmark tone="light" />
          <p>
            Desenvolvimento de software sob medida por {site.ownerShort}, em {site.location}. Sites, sistemas web, SaaS,
            APIs e automações.
          </p>
        </div>

        <nav aria-label="Rodapé" className={styles.column}>
          <h2 className={styles.heading}>Navegação</h2>
          <ul role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h2 className={styles.heading}>Contato</h2>
          <ul role="list">
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <a href={site.contact.github} target="_blank" rel="noopener noreferrer">
                GitHub<span className="visually-hidden"> (abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="visually-hidden"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.base}`}>
        <p>
          © {year} {site.name}. Todos os direitos reservados.
        </p>
        <a href="#inicio">Voltar ao topo</a>
      </div>
    </footer>
  );
}
