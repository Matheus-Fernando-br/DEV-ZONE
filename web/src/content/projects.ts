// Real projects, adapted from the portfolio data (Curriculo/FrontEnd/src/editar/curriculo.js)
// and checked against each repository's README and manifests. Only add facts that
// can be verified in the project itself.

export type ProjectStatus = "Publicado" | "Em desenvolvimento" | "Projeto de estudo";

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem?: string;
  features: string[];
  stack: string[];
  status: ProjectStatus;
  demo?: string;
  repo: string;
  image: string;
  imageAlt: string;
  tier: "featured" | "highlight" | "index";
};

export const projects: Project[] = [
  {
    slug: "finc",
    name: "FINC",
    category: "SaaS de gestão fiscal",
    summary:
      "Plataforma de gestão e emissão de notas fiscais para MEIs e pequenas empresas.",
    problem:
      "Pequenos negócios costumam emitir notas, controlar estoque e acompanhar o caixa em ferramentas separadas. A FINC reúne essas rotinas em um só sistema.",
    features: [
      "Cadastros, estoque e compras",
      "Vendas com PDV, orçamentos e pedidos",
      "Emissão de NF-e, NFC-e e NFS-e",
      "Finanças e relatórios",
    ],
    stack: ["TypeScript", "React", "Vite", "Express", "PostgreSQL", "Supabase", "Zod", "Vitest", "Playwright"],
    status: "Em desenvolvimento",
    demo: "https://finc-seven.vercel.app/",
    repo: "https://github.com/Matheus-Fernando-br/Project-FINC",
    image: "/projects/finc.webp",
    imageAlt: "Página inicial da plataforma FINC com a proposta de emissão automática de notas fiscais.",
    tier: "featured",
  },
  {
    slug: "gerador-curriculo",
    name: "Gerador de Currículo Online",
    category: "Aplicação web",
    summary:
      "Ferramenta gratuita que monta um currículo profissional a partir de um formulário e gera o PDF no navegador.",
    features: [
      "Formulário por seções com campos dinâmicos",
      "Geração de PDF 100% no navegador",
      "Área Plus com login: modelos, cores, fontes e seções personalizáveis",
    ],
    stack: ["React", "JavaScript", "html2pdf.js", "Node.js"],
    status: "Publicado",
    demo: "https://geradorcurriculoonline.vercel.app",
    repo: "https://github.com/Matheus-Fernando-br/Gerador-de-Curriculo-Online",
    image: "/projects/gerador-curriculo-2026.webp",
    imageAlt: "Página inicial do Gerador de Currículo Online com o título \"Chega de não ser convocado para entrevistas\" e o botão para começar.",
    tier: "highlight",
  },
  {
    slug: "obra-facil",
    name: "Obra Fácil",
    category: "Aplicativo mobile",
    summary:
      "Aplicativo de gestão de obras, clientes e orçamentos para construtoras, empreiteiros e profissionais da construção civil.",
    problem:
      "Muitos profissionais controlam clientes e obras pelo WhatsApp, em planilhas e cadernos. O Obra Fácil reúne tudo em um só aplicativo.",
    features: [
      "Orçamentos com status, validade e exportação em PDF",
      "Acompanhamento de obras com progresso e prazos",
      "Clientes com contato rápido por telefone e WhatsApp",
      "Relatórios em PDF e planilha, com tema claro e escuro",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Expo Router"],
    status: "Em desenvolvimento",
    repo: "https://github.com/Matheus-Fernando-br/OBRA-FACIL",
    image: "/projects/obra-facil.webp",
    imageAlt: "Três telas do aplicativo Obra Fácil: lista de orçamentos, painel inicial com receita aprovada e lista de obras no tema escuro.",
    tier: "highlight",
  },
  {
    slug: "genoma-relatorios",
    name: "Genoma Relatórios",
    category: "Sistema web institucional",
    summary:
      "Central de formulários do Colégio Genoma: preenche os modelos oficiais da rede e gera o documento pronto em PDF.",
    features: [
      "Formulários gerados a partir de um schema, com validação de campos",
      "Pré-visualização do documento A4 em tempo real",
      "PDF vetorial fiel aos modelos oficiais em Word",
      "Modelo em branco para impressão e rascunho salvo no navegador",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Publicado",
    repo: "https://github.com/Matheus-Fernando-br/GENOMA",
    image: "/projects/genoma-relatorios.webp",
    imageAlt: "Formulário de solicitação de evento ao lado da pré-visualização do documento oficial em A4.",
    tier: "index",
  },
  {
    slug: "retiro",
    name: "Retiro VOLTEMOS",
    category: "Sistema de inscrições",
    summary:
      "Sistema de inscrições e pagamentos do retiro anual da igreja Centro Internacional de Avivamento Primavera.",
    problem:
      "A organização precisava receber inscrições e acompanhar pagamentos sem planilhas manuais.",
    features: [
      "Inscrição em três etapas",
      "Pagamento por PIX ou cartão",
      "Painel administrativo com login protegido (JWT)",
      "Gestão de inscrições e pagamentos",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Supabase"],
    status: "Publicado",
    demo: "https://retirovoltemos.vercel.app/",
    repo: "https://github.com/Matheus-Fernando-br/RETIRO",
    image: "/projects/retiro.webp",
    imageAlt: "Landing page do Retiro VOLTEMOS 2027 com chamada para inscrição.",
    tier: "index",
  },
  {
    slug: "saite",
    name: "S.A.I.T.E.",
    category: "Agente de IA",
    summary:
      "Agente pessoal de inteligência artificial, começando pela web e com expansão planejada para mobile e desktop.",
    features: ["Interface de conversas na web", "Backend próprio para o agente"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Supabase"],
    status: "Em desenvolvimento",
    demo: "https://saite-agent.vercel.app/",
    repo: "https://github.com/Matheus-Fernando-br/S.A.I.T.E.",
    image: "/projects/saite.webp",
    imageAlt: "Interface escura do agente S.A.I.T.E. pronta para iniciar uma nova conversa.",
    tier: "index",
  },
  {
    slug: "cia-primavera",
    name: "CIA Primavera",
    category: "Site institucional",
    summary:
      "Site institucional da igreja Centro Internacional de Avivamento Primavera, com cultos, eventos e transmissões.",
    features: ["Horários de cultos e eventos", "Transmissões do YouTube integradas", "Localização com Google Maps"],
    stack: ["HTML", "CSS", "JavaScript", "Vite"],
    status: "Publicado",
    demo: "https://cia-primavera.vercel.app",
    repo: "https://github.com/Matheus-Fernando-br/CIA-PRIMAVERA",
    image: "/projects/cia-primavera.webp",
    imageAlt: "Página inicial do site do Centro Internacional de Avivamento Primavera.",
    tier: "index",
  },
  {
    slug: "casamento",
    name: "Site de casamento",
    category: "Site de evento",
    summary:
      "Site do casamento com a história do casal, contagem regressiva e lista de presentes.",
    features: ["Carrossel de fotos", "Lista de presentes com carrinho", "Cópia da chave Pix com um toque"],
    stack: ["React", "Vite", "Node.js", "Express", "Supabase"],
    status: "Publicado",
    demo: "https://casamentomatheusekariny.vercel.app/",
    repo: "https://github.com/Matheus-Fernando-br/Casamento",
    image: "/projects/casamento.webp",
    imageAlt: "Página inicial do site de casamento com foto do casal e contagem regressiva.",
    tier: "index",
  },
  {
    slug: "conversor-video",
    name: "Conversor de vídeo para MP3",
    category: "Ferramenta web",
    summary: "Converte vídeos em MP3 direto pelo navegador, com interface minimalista.",
    features: ["Upload com arrastar e soltar", "Conversão com FFmpeg e barra de progresso", "Download automático do áudio"],
    stack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "FFmpeg"],
    status: "Publicado",
    demo: "https://conversordevideo.vercel.app/",
    repo: "https://github.com/Matheus-Fernando-br/DownYT",
    image: "/projects/conversor-video.webp",
    imageAlt: "Conversor de vídeo para MP3 com prévia do vídeo carregado e botão converter.",
    tier: "index",
  },
  {
    slug: "formulario",
    name: "Formulário responsivo",
    category: "Estudo acadêmico",
    summary: "Formulário de contato acessível e responsivo, feito só com HTML5 e CSS3.",
    features: ["Validação nativa do navegador", "Modo escuro", "Layout adaptável"],
    stack: ["HTML", "CSS"],
    status: "Projeto de estudo",
    demo: "https://matheus-fernando-br.github.io/Formulario-Atividade-Unileste/",
    repo: "https://github.com/Matheus-Fernando-br/Formulario-Atividade-Unileste",
    image: "/projects/formulario.webp",
    imageAlt: "Formulário de contato com campos de nome, e-mail, assunto e mensagem.",
    tier: "index",
  },
  {
    slug: "mario-game",
    name: "Mario Jump",
    category: "Jogo web",
    summary: "Jogo de pular obstáculos no navegador, com placar e reinício.",
    features: ["Controle pelo teclado", "Placar em tempo real"],
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Projeto de estudo",
    demo: "https://mario-game-plum.vercel.app",
    repo: "https://github.com/Matheus-Fernando-br/Mario-Game",
    image: "/projects/mario-game.webp",
    imageAlt: "Cena do jogo com o personagem diante de um cano verde.",
    tier: "index",
  },
  {
    slug: "reserva-restaurante",
    name: "Reservas de restaurante",
    category: "Aplicação desktop",
    summary: "Sistema desktop de reservas com escolha de data, horário, mesa e dados do cliente.",
    features: ["Fluxo de reserva em etapas", "Seleção visual de mesas"],
    stack: ["Java", "Swing"],
    status: "Projeto de estudo",
    repo: "https://github.com/Matheus-Fernando-br/Reserva-Restaurante",
    image: "/projects/reserva-restaurante.webp",
    imageAlt: "Tela de seleção de mesas do sistema de reservas em Java.",
    tier: "index",
  },
  {
    slug: "calculadora",
    name: "Calculadora",
    category: "Aplicação desktop",
    summary: "Calculadora simples com interface gráfica.",
    features: ["Operações básicas"],
    stack: ["Java", "Swing"],
    status: "Projeto de estudo",
    repo: "https://github.com/Matheus-Fernando-br/Simple-Calculator-Project",
    image: "/projects/calculadora.webp",
    imageAlt: "Janela da calculadora em Java exibindo o resultado 450.",
    tier: "index",
  },
];
