# Dev Zone

Plataforma oficial da **Dev Zone**: apresentação dos serviços de desenvolvimento de software de Matheus Fernando, projetos reais do portfólio e formulário de contato com entrega no Telegram.

| Parte | Pasta | Tecnologia | Hospedagem |
| --- | --- | --- | --- |
| Site | [`web/`](web) | Next.js 16 (App Router), React 19, TypeScript, CSS Modules | Vercel |
| API | [`api/`](api) | Node.js 22, Express 5, Zod | Render |

```text
Navegador ──POST /api/contact──▶ API Dev Zone (Render) ──▶ Telegram Bot API
                                        │
                                        └─(fallback)─▶ API do portfólio (/api/send-message) ──▶ Telegram
```

O token do Telegram existe **somente** no backend. O site recebe apenas a URL pública da API.

---

## Rodar localmente

Requisito: Node.js 22+.

```bash
# API
cd api
cp .env.example .env        # preencha ALLOWED_ORIGINS e o modo de entrega
npm install
npm run dev                 # http://localhost:3001/api/health

# Site (outro terminal)
cd web
cp .env.example .env.local  # NEXT_PUBLIC_API_URL=http://localhost:3001
npm install
npm run dev                 # http://localhost:3000
```

### Verificações

| Pasta | Comando | O que faz |
| --- | --- | --- |
| `api` | `npm test` | Testes da API (validação, CORS, rate limit, antispam, entrega) |
| `web` | `npm run lint` | ESLint (regras do Next.js) |
| `web` | `npm run typecheck` | TypeScript |
| `web` | `npm test` | Testes do formulário e da validação (Vitest + Testing Library) |
| `web` | `npm run build` | Build de produção |

O workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml) roda tudo isso em cada push e pull request.

---

## Variáveis de ambiente

### API (`api/`, configuradas no Render)

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `ALLOWED_ORIGINS` | sim | Origens autorizadas no CORS, separadas por vírgula (ex.: `https://dev-zone.vercel.app`) |
| `TELEGRAM_TOKEN` | recomendada | Token do bot. **Secreto.** |
| `TELEGRAM_CHAT_ID` | recomendada | Chat que recebe as mensagens. |
| `CONTACT_RELAY_URL` | opcional | Relay já existente que possui as credenciais do Telegram. Usado só quando `TELEGRAM_*` estão vazios. |
| `NODE_ENV` | sim | `production` |
| `UPSTREAM_TIMEOUT_MS` | opcional | Timeout das chamadas externas (padrão 60000) |
| `RATE_LIMIT_WINDOW_MS` / `RATE_LIMIT_MAX` | opcional | Janela e limite de envios por IP (padrão 5 a cada 15 min) |

O modo de entrega ativo aparece em `GET /api/health` (`telegram`, `relay` ou `unconfigured`), sem expor valores.

### Site (`web/`, configuradas na Vercel)

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | URL pública da API (ex.: `https://dev-zone-api.onrender.com`) |
| `NEXT_PUBLIC_SITE_URL` | Opcional. URL canônica. Sem ela, usa o domínio de produção da Vercel. |

Nunca coloque segredos em variáveis `NEXT_PUBLIC_*`: elas vão para o navegador.

---

## Deploy

**Vercel (site):** projeto conectado a este repositório, *Root Directory* `web`, framework Next.js, branch de produção `main`.

**Render (API):** web service Node conectado a este repositório, branch `main`. A configuração está descrita em [`render.yaml`](render.yaml): build `npm ci --omit=dev`, start `node src/server.js`, health check `/api/health`.

---

## Segurança do formulário

- Validação no navegador e novamente no servidor (Zod), com limites de tamanho por campo e corpo máximo de 10 kB.
- Remoção de caracteres de controle e invisíveis; a mensagem vai ao Telegram como texto puro.
- Rate limit por IP, honeypot e tempo mínimo de preenchimento contra bots.
- CORS e verificação de `Origin` restritos às origens configuradas.
- Timeout nas chamadas externas e respostas de erro genéricas, sem detalhes internos.
- Logs estruturados sem conteúdo das mensagens, e-mails ou tokens.
- Nada é armazenado: a mensagem é repassada e descartada.
- O site só mostra "Mensagem enviada" depois que a API confirma a entrega.
- Cabeçalhos de segurança no site (CSP, `X-Frame-Options`, `Referrer-Policy`) e Helmet na API.

---

## Conteúdo

- Projetos: [`web/src/content/projects.ts`](web/src/content/projects.ts), adaptado de `Curriculo/FrontEnd/src/editar/curriculo.js` e conferido com o README e as dependências de cada repositório.
- Serviços, tecnologias e processo: arquivos em [`web/src/content/`](web/src/content).
- Imagens dos projetos: geradas em `web/public/projects/` com `node scripts/optimize-images.mjs <pasta-das-capturas>` (recorte 16:10, WebP).

## Design

Identidade original baseada no motivo da "zona": o quadro de seleção com alças e medidas reais (o tamanho exibido no hero é medido ao vivo). Paleta fria de prancheta (`#F2F4F7`, `#0A1626`, `#2B3BF5`), uma única família tipográfica (Archivo variável, usando o eixo de largura) e tokens em [`web/src/app/globals.css`](web/src/app/globals.css).
