import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const title = "Zact";
  const subtitle = "Your AI teammate that participates in real time.";

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
          background:
            "radial-gradient(circle at 15% 20%, rgba(242,200,141,0.28) 0%, rgba(0,0,0,0) 55%), radial-gradient(circle at 70% 10%, rgba(127,175,196,0.28) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, #0B1220 0%, #101A2B 45%, #0B1220 100%)",
          color: "#F6F8FA",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, Arial, sans-serif',
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, opacity: 0.9, letterSpacing: 0.6 }}>{`{zact}`}</div>
          <div style={{ fontSize: 18, opacity: 0.75 }}>usezact.com</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div style={{ fontSize: 86, fontWeight: 700, lineHeight: 1.02 }}>{title}</div>
          <div style={{ fontSize: 34, fontWeight: 500, opacity: 0.9, lineHeight: 1.25 }}>
            {subtitle}
          </div>
          <div style={{ fontSize: 22, opacity: 0.75, lineHeight: 1.35 }}>
            Joins calls with context • Participates live • Turns decisions into follow‑through
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "rgba(242,200,141,0.95)",
            }}
          />
          <div style={{ fontSize: 18, opacity: 0.75 }}>
            Calm, human‑first AI for meetings
          </div>
        </div>
      </div>
    ),
    size
  );
}


