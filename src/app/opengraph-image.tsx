import { ImageResponse } from "next/og";
import { business } from "@/config/site";

export const alt = `${business.name}, ${business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen para compartir en redes. Provisoria: reemplazar por una con el logo y una foto reales. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#a51446",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 30, color: "#fbdce8", display: "flex" }}>{business.tagline}</div>
        <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 1.05, marginTop: 18, display: "flex" }}>
          {business.name}
        </div>
        <div style={{ fontSize: 36, marginTop: 34, opacity: 0.9, display: "flex" }}>
          {`${business.address.street}, ${business.address.city}`}
        </div>
      </div>
    ),
    size,
  );
}
