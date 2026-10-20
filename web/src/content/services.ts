import type { ProjectType } from "@/lib/contact";

export type Service = {
  id: ProjectType;
  title: string;
  description: string;
  solutions: string[];
};

export const services: Service[] = [
  {
    id: "site",
    title: "Desenvolvimento web",
    description:
      "Sites institucionais e landing pages rápidos, responsivos e prontos para aparecer bem no Google.",
    solutions: ["Sites institucionais", "Landing pages de produto ou evento", "Páginas com formulários e integrações"],
  },
  {
    id: "saas",
    title: "Aplicações SaaS",
    description:
      "Produtos por assinatura com contas de usuário, painéis e regras de negócio pensadas para crescer.",
    solutions: ["Cadastro e login de usuários", "Painéis e relatórios", "Planos e áreas restritas"],
  },
  {
    id: "mobile",
    title: "Aplicativos mobile",
    description:
      "Aplicativos para celular conectados ao mesmo backend do seu sistema web, com foco em uso diário.",
    solutions: ["Apps para clientes ou equipes", "Versões mobile de sistemas existentes", "Notificações e integrações"],
  },
  {
    id: "web",
    title: "Sistemas e plataformas sob medida",
    description:
      "Software feito para o processo da sua operação, em vez de adaptar a operação a uma ferramenta genérica.",
    solutions: ["Sistemas de gestão internos", "Inscrições, reservas e pedidos", "Painéis administrativos"],
  },
  {
    id: "api",
    title: "APIs e integrações",
    description:
      "Backends e APIs REST que conectam bancos de dados, serviços de pagamento, mensageria e outros sistemas.",
    solutions: ["APIs REST documentadas", "Integração com serviços externos", "Modelagem de banco de dados"],
  },
  {
    id: "automation",
    title: "Automação e soluções tecnológicas",
    description:
      "Rotinas manuais transformadas em fluxos automáticos, com consultoria para escolher a solução certa.",
    solutions: ["Notificações e relatórios automáticos", "Integração entre planilhas e sistemas", "Consultoria técnica"],
  },
];
