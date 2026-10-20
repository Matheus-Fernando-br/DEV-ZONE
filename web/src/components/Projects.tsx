import Image from "next/image";
import { projects, type Project } from "@/content/projects";
import styles from "./Projects.module.css";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">
      {children}
      <span className="visually-hidden"> (abre em nova aba)</span>
      <svg className={styles.externalIcon} viewBox="0 0 12 12" aria-hidden="true" focusable="false">
        <path d="M3.5 2.5h6v6M9.5 2.5 2.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </a>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className={styles.links}>
      {project.demo && <ExternalLink href={project.demo}>Abrir projeto</ExternalLink>}
      <ExternalLink href={project.repo}>Ver código</ExternalLink>
    </div>
  );
}

function Status({ status }: { status: Project["status"] }) {
  return (
    <span className={styles.status} data-status={status}>
      <span className={styles.statusMark} aria-hidden="true" />
      {status}
    </span>
  );
}

function Media({ project, sizes, priority = false }: { project: Project; sizes: string; priority?: boolean }) {
  return (
    <div className={styles.media}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={1600}
        height={1000}
        sizes={sizes}
        priority={priority}
        className={styles.image}
      />
      <span className={styles.corner} data-pos="tl" aria-hidden="true" />
      <span className={styles.corner} data-pos="br" aria-hidden="true" />
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul role="list" className={styles.stack} aria-label="Tecnologias">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Projects() {
  const featured = projects.find((project) => project.tier === "featured")!;
  const highlights = projects.filter((project) => project.tier === "highlight");
  const index = projects.filter((project) => project.tier === "index");

  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <div className="container">
        <header className="section-head">
          <h2 id="projetos-title" className="section-title">
            Projetos reais, em uso e com código aberto.
          </h2>
          <p className="section-intro">
            Cada projeto resolve um problema específico de quem usa. Todos têm o código publicado no GitHub, e a maioria
            está no ar para você testar.
          </p>
        </header>

        <article className={`${styles.project} ${styles.featured}`} aria-labelledby={`p-${featured.slug}`}>
          <Media project={featured} sizes="(min-width: 1100px) 760px, 100vw" />
          <div className={styles.body}>
            <div className={styles.kicker}>
              <span>{featured.category}</span>
              <Status status={featured.status} />
            </div>
            <h3 id={`p-${featured.slug}`} className={styles.name}>
              {featured.name}
            </h3>
            <p className={styles.summary}>{featured.summary}</p>
            {featured.problem && <p className={styles.problem}>{featured.problem}</p>}
            <ul role="list" className={styles.features}>
              {featured.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Stack items={featured.stack} />
            <ProjectLinks project={featured} />
          </div>
        </article>

        <div className={styles.highlights}>
          {highlights.map((project) => (
            <article key={project.slug} className={styles.project} aria-labelledby={`p-${project.slug}`}>
              <Media project={project} sizes="(min-width: 900px) 600px, 100vw" />
              <div className={styles.body}>
                <div className={styles.kicker}>
                  <span>{project.category}</span>
                  <Status status={project.status} />
                </div>
                <h3 id={`p-${project.slug}`} className={styles.name}>
                  {project.name}
                </h3>
                <p className={styles.summary}>{project.summary}</p>
                <ul role="list" className={styles.features}>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Stack items={project.stack} />
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.indexBlock}>
          <h3 className={styles.indexTitle}>Mais projetos</h3>
          <ul role="list" className={styles.index}>
            {index.map((project) => (
              <li key={project.slug} className={styles.row}>
                <div className={styles.thumb}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1600}
                    height={1000}
                    sizes="(min-width: 900px) 220px, 40vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.rowMain}>
                  <h4 className={styles.rowName}>{project.name}</h4>
                  <p className={styles.rowCategory}>
                    {project.category}
                    <Status status={project.status} />
                  </p>
                  <p className={styles.rowSummary}>{project.summary}</p>
                </div>
                <p className={styles.rowStack}>{project.stack.join(", ")}</p>
                <ProjectLinks project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
