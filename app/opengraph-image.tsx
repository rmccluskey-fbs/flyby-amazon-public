import { ImageResponse } from "next/og";

export const alt = "Flyby Shine drone cleaning business resources";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 76px",
        background: "linear-gradient(135deg, #000 0%, #17130a 62%, #4a3100 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", color: "#FCB017", fontSize: 30, fontWeight: 800 }}>
        FLYBY SHINE
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
        <div style={{ display: "flex", fontSize: 74, lineHeight: 1.02, fontWeight: 900 }}>
          Build the business before buying the drone.
        </div>
        <div style={{ display: "flex", marginTop: 30, color: "#f4ead0", fontSize: 29 }}>
          Operator tools, books and focused equipment decisions.
        </div>
      </div>
      <div style={{ display: "flex", width: 300, height: 9, background: "#FCB017" }} />
    </div>,
    size,
  );
}
