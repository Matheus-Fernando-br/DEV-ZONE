import { ImageResponse } from "next/og";

export const alt = "Dev Zone — Engenharia de software para transformar ideias em produtos digitais.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const handle = (position: Record<string, number>, fill: string) => (
  <div style={{ position: "absolute", width: 18, height: 18, background: fill, border: "3px solid #2b3bf5", ...position }} />
);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f2f4f7",
          backgroundImage:
            "linear-gradient(to right, rgba(10,22,38,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,22,38,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#0a1626",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700 }}>
          <div style={{ width: 30, height: 30, border: "3px solid #0a1626", display: "flex" }} />
          Dev Zone
        </div>
        <div style={{ position: "relative", display: "flex", border: "3px solid #2b3bf5", padding: "40px 44px" }}>
          {handle({ top: -11, left: -11 }, "#ffffff")}
          {handle({ top: -11, right: -11 }, "#ffffff")}
          {handle({ bottom: -11, left: -11 }, "#ffffff")}
          {handle({ bottom: -11, right: -11 }, "#ffffff")}
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Engenharia de software para transformar ideias em produtos digitais.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#4a5567" }}>
          Sites, sistemas web, SaaS, APIs e automação, do esboço ao deploy.
        </div>
      </div>
    ),
    size,
  );
}
