// Technologies confirmed in Matheus's own repositories. `usedIn` names the
// projects where each group appears, so every claim has evidence.

export type StackGroup = {
  area: string;
  items: string[];
  usedIn: string;
};

export const stack: StackGroup[] = [
  {
    area: "Interfaces",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML e CSS", "Tailwind CSS", "Vite"],
    usedIn: "FINC, Retiro VOLTEMOS, Gerador de Currículo, S.A.I.T.E.",
  },
  {
    area: "Backend e APIs",
    items: ["Node.js", "Express", "Python", "FastAPI", "Flask", "APIs REST", "Zod"],
    usedIn: "FINC, Retiro VOLTEMOS, Conversor de vídeo, Site de casamento",
  },
  {
    area: "Dados",
    items: ["PostgreSQL", "Supabase", "MySQL"],
    usedIn: "FINC, Retiro VOLTEMOS, Site de casamento",
  },
  {
    area: "Infraestrutura e qualidade",
    items: ["Git e GitHub", "Vercel", "Render", "Vitest", "Playwright", "Testing Library"],
    usedIn: "todos os projetos publicados",
  },
];
