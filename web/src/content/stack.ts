// Technologies confirmed in Matheus's own repositories. `usedIn` names the
// projects where each group appears, so every claim has evidence.

export type StackGroup = {
  area: string;
  items: string[];
  usedIn: string;
};

export const stack: StackGroup[] = [
  {
    area: "Interfaces e mobile",
    items: ["React", "Next.js", "React Native", "Expo", "TypeScript", "JavaScript", "HTML e CSS", "Tailwind CSS"],
    usedIn: "FINC, Gerador de Currículo, Obra Fácil, Genoma Relatórios, Retiro VOLTEMOS",
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
