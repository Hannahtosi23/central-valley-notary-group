import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Central Valley Notary Group — Fresno Mobile Notary and Loan Signing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0B",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#B7833A" strokeWidth="3" />
          <g transform="translate(26,26) scale(2)" fill="none" stroke="#E8C27A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 21h14" />
            <path d="M5 18h14v-1a3 3 0 0 0 -3 -3h-1.5l.5 -7a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2l.5 7h-1.5a3 3 0 0 0 -3 3v1z" />
          </g>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
          <div style={{ display: "flex", fontSize: 64, letterSpacing: 8, color: "#F4EEE2" }}>CENTRAL VALLEY</div>
          <div style={{ display: "flex", fontSize: 64, letterSpacing: 8, color: "#F4EEE2", marginTop: 4 }}>NOTARY GROUP</div>
        </div>
        <div style={{ display: "flex", width: 90, height: 3, backgroundColor: "#B7833A", marginTop: 34, marginBottom: 30 }} />
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#C9A15A" }}>PROFESSIONAL · RELIABLE · DISCREET</div>
        <div style={{ display: "flex", fontSize: 26, color: "#A2906F", marginTop: 26 }}>Fresno Mobile Notary and Loan Signing</div>
      </div>
    ),
    { ...size }
  );
}
