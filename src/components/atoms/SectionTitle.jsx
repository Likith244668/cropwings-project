import { GlowText } from "./GlowText";
import { T, font } from "../../config/tokens";

export function SectionTitle({ children, delay = 0.1 }) {
  return (
    <GlowText delay={delay} style={{
      fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.8rem)",
      fontWeight: 800, lineHeight: 1.1, color: T.text, letterSpacing: "-0.02em",
    }}>
      {children}
    </GlowText>
  );
}
