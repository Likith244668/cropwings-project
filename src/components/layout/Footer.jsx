import { T, font } from "../../config/tokens";
import { GradientText } from "../atoms/GradientText";

export function Footer() {
  return (
    <footer style={{
      padding: "3rem clamp(1.5rem, 4vw, 4rem) 2rem",
      borderTop: `1px solid ${T.glassBorder}`,
      display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem",
    }}>
      <div>
        <div style={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ color: T.green }}>●</span>
          <GradientText style={{ fontSize: "1.2rem", fontWeight: 800, fontFamily: font.display }}>CropWings</GradientText>
        </div>
        <p style={{ fontFamily: font.body, fontSize: "0.75rem", color: T.textDim }}>
          India's Largest Agri Drone Ecosystem Event
        </p>
      </div>
      <p style={{ fontFamily: font.mono, fontSize: "0.65rem", letterSpacing: "0.15em", color: T.textDim }}>
        © 2026 CROPWINGS. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
