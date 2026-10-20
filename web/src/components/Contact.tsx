import { site } from "@/lib/site";
import styles from "./Contact.module.css";
import { ContactForm } from "./ContactForm";
import { SocialIcons } from "./SocialIcons";

export function Contact() {
  return (
    <section id="contato" className={styles.contact} aria-labelledby="contato-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <h2 id="contato-title" className={styles.title}>
            Tem uma ideia ou um processo que precisa de software?
          </h2>
          <p className={styles.lead}>
            Conte o que você precisa. Empresas, empreendedores e profissionais são bem-vindos, seja um site novo ou um
            sistema completo. Eu respondo pessoalmente, com perguntas objetivas e uma proposta de caminho.
          </p>

          <dl className={styles.channels}>
            <div className={styles.channel}>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </dd>
            </div>
          </dl>
          <SocialIcons />
        </div>

        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Fale sobre o seu projeto</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
