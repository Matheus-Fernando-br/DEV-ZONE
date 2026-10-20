import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = localFont({
  src: "../fonts/archivo-variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-archivo",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner, url: site.contact.github }],
  creator: site.owner,
  keywords: [
    "desenvolvimento de software",
    "desenvolvedor full stack",
    "sites institucionais",
    "landing pages",
    "sistemas web",
    "SaaS",
    "APIs",
    "automação",
    "Timóteo MG",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f2f4f7",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  areaServed: { "@type": "Country", name: "Brasil" },
  address: { "@type": "PostalAddress", addressLocality: "Timóteo", addressRegion: "MG", addressCountry: "BR" },
  founder: {
    "@type": "Person",
    name: site.owner,
    jobTitle: "Desenvolvedor Full Stack",
    sameAs: [site.contact.github, site.contact.linkedin],
  },
  sameAs: [site.contact.instagram, site.contact.youtube, site.contact.github, site.contact.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
