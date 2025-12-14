import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "radial-gradient(circle at 15% 30%, rgba(94,159,179,0.26) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 70% 0%, rgba(242,200,141,0.22) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, #0B1220 0%, #0F1A2B 50%, #0B1220 100%)",
          color: "#F6F8FA",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            opacity: 0.9,
            letterSpacing: 0.6,
            marginBottom: 16,
          }}
        >
          {`{zact}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.08 }}>
            Your AI teammate,
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.08 }}>
            live in the meeting.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 22, opacity: 0.78 }}>
          Participates in real time • Keeps context • Handles the follow‑through
        </div>
      </div>
    ),
    size
  );
}


