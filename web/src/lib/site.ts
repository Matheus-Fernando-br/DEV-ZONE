// Single source for brand, URLs and confirmed contact details.

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Dev Zone",
  url: resolveSiteUrl(),
  title: "Dev Zone — Engenharia de software sob medida",
  description:
    "Dev Zone desenvolve sites, sistemas web, aplicações SaaS, APIs e automações sob medida — do planejamento ao deploy em produção.",
  contact: {
    email: "devzonedigital@gmail.com",
    github: "https://github.com/Matheus-Fernando-br",
    linkedin: "https://www.linkedin.com/in/matheus-fernando-",
    instagram: "https://www.instagram.com/devzoneoficial",
    youtube: "https://www.youtube.com/@devzoneoficial",
  },
} as const;

export const apiUrl = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export const nav = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#stack", label: "Tecnologias" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
] as const;
