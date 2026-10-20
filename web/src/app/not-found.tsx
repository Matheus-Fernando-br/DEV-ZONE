import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container section" style={{ minHeight: "70vh", display: "grid", alignContent: "center", gap: "1.5rem" }}>
      <h1 className="section-title">Página não encontrada.</h1>
      <p className="section-intro">O endereço acessado não existe. Volte para a página inicial da Dev Zone.</p>
      <p>
        <Link href="/" className="button button-signal">
          Ir para o início
        </Link>
      </p>
    </main>
  );
}
