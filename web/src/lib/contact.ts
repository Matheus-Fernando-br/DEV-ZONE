// Client-side mirror of the API validation (api/src/contact-schema.js).
// The server validates again; this only gives faster, friendlier feedback.

export const projectTypes = {
  site: "Site institucional ou landing page",
  web: "Sistema web sob medida",
  saas: "Aplicação SaaS",
  mobile: "Aplicativo mobile",
  api: "API ou integração",
  automation: "Automação de processos",
  other: "Outro / ainda não sei",
} as const;

export const budgets = {
  "ate-3k": "Até R$ 3 mil",
  "3k-10k": "R$ 3 mil a R$ 10 mil",
  "10k-30k": "R$ 10 mil a R$ 30 mil",
  "30k+": "Acima de R$ 30 mil",
  "a-definir": "Ainda não definido",
} as const;

export type ProjectType = keyof typeof projectTypes;
export type Budget = keyof typeof budgets;

export const limits = {
  name: { min: 2, max: 80 },
  email: { max: 120 },
  message: { min: 20, max: 2000 },
} as const;

export type ContactInput = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: ContactInput): FieldErrors {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (name.length < limits.name.min) errors.name = "Informe seu nome.";
  else if (name.length > limits.name.max) errors.name = `Use no máximo ${limits.name.max} caracteres no nome.`;

  if (!email) errors.email = "Informe seu e-mail.";
  else if (email.length > limits.email.max || !EMAIL.test(email)) errors.email = "Informe um e-mail válido.";

  if (!(input.projectType in projectTypes)) errors.projectType = "Escolha o tipo de projeto.";

  if (input.budget && !(input.budget in budgets)) errors.budget = "Escolha uma faixa de orçamento válida.";

  if (message.length < limits.message.min)
    errors.message = `Descreva o que você precisa em pelo menos ${limits.message.min} caracteres.`;
  else if (message.length > limits.message.max)
    errors.message = `Use no máximo ${limits.message.max} caracteres na descrição.`;

  return errors;
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string; fields?: FieldErrors };

export async function submitContact(
  endpoint: string,
  payload: ContactInput & { website: string; startedAt: number },
  { timeoutMs = 90_000, fetcher = fetch }: { timeoutMs?: number; fetcher?: typeof fetch } = {},
): Promise<SubmitResult> {
  if (!endpoint) {
    return { ok: false, error: "O envio pelo formulário está indisponível. Use o e-mail ou o WhatsApp ao lado." };
  }
  let response: Response;
  try {
    response = await fetcher(`${endpoint}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, budget: payload.budget || undefined }),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch {
    return {
      ok: false,
      error: "Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.",
    };
  }
  const body = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string; fields?: FieldErrors }
    | null;
  if (response.ok && body?.ok === true) return { ok: true };
  return {
    ok: false,
    error: body?.error ?? "Não foi possível enviar sua mensagem agora. Tente novamente.",
    fields: body?.fields,
  };
}
