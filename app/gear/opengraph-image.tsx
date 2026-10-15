import { ImageResponse } from "next/og";

export const alt = "Flyby Shine gear and books for drone cleaning operators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function GearOpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 76px",
        background: "linear-gradient(135deg, #000 0%, #161510 58%, #5a3a00 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", color: "#FCB017", fontSize: 30, fontWeight: 800 }}>
        FLYBY SHINE · OPERATOR RESOURCES
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1020 }}>
        <div style={{ display: "flex", fontSize: 82, lineHeight: 1, fontWeight: 900 }}>
          Gear + books for real operating decisions.
        </div>
        <div style={{ display: "flex", marginTop: 30, color: "#f4ead0", fontSize: 29 }}>
          Compare focused options. Verify compatibility. Buy only what solves the job problem.
        </div>
      </div>
      <div style={{ display: "flex", width: 300, height: 9, background: "#FCB017" }} />
    </div>,
    size,
  );
}
