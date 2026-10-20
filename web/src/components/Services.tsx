import { services } from "@/content/services";
import { ServiceLink } from "./ServiceLink";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="servicos" className={`section ${styles.services}`} aria-labelledby="servicos-title">
      <div className={`container ${styles.layout}`}>
        <header className={styles.head}>
          <h2 id="servicos-title" className="section-title">
            O que a Dev Zone desenvolve.
          </h2>
          <p className="section-intro">
            Soluções feitas sob medida para o seu problema, com a mesma pessoa cuidando do projeto do início ao fim.
          </p>
          <a href="#contato" className={`button button-signal ${styles.headCta}`}>
            Pedir orçamento
          </a>
        </header>

        <ul role="list" className={styles.list}>
          {services.map((service) => (
            <li key={service.id} className={styles.item}>
              <h3 className={styles.title}>{service.title}</h3>
              <div className={styles.detail}>
                <p className={styles.description}>{service.description}</p>
                <ul role="list" className={styles.solutions} aria-label={`Exemplos de ${service.title.toLowerCase()}`}>
                  {service.solutions.map((solution) => (
                    <li key={solution}>{solution}</li>
                  ))}
                </ul>
                <ServiceLink type={service.id}>Conversar sobre {service.title.toLowerCase()}</ServiceLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
