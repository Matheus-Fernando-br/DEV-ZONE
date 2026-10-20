import { site } from "@/lib/site";
import styles from "./Contact.module.css";
import { ContactForm } from "./ContactForm";

const channels = [
  { label: "E-mail", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { label: "WhatsApp", value: site.contact.whatsappLabel, href: `https://wa.me/${site.contact.whatsapp}`, external: true },
  { label: "LinkedIn", value: "Matheus Ribeiro", href: site.contact.linkedin, external: true },
  { label: "GitHub", value: "Matheus-Fernando-br", href: site.contact.github, external: true },
];

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
            {channels.map((channel) => (
              <div key={channel.label} className={styles.channel}>
                <dt>{channel.label}</dt>
                <dd>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {channel.value}
                    {channel.external && <span className="visually-hidden"> (abre em nova aba)</span>}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Fale sobre o seu projeto</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
