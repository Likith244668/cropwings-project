import { motion } from "framer-motion";
import { T, font } from "../config/tokens";
import { GradientText } from "../components/atoms/GradientText";
import { Btn } from "../components/atoms/Btn";
import { ScrollReveal } from "../components/effects/ScrollReveal";
import { FlyingPosters } from "../components/effects/FlyingPosters";
import { IMAGES } from "../config/images";

export function CTABanner() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 4rem)",
      background: `radial-gradient(ellipse 100% 80% at 50% 50%, ${T.greenDark}33, ${T.bg})`,
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <ScrollReveal>
          <h2 style={{
            fontFamily: font.display, fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 800, lineHeight: 1.1, color: T.text, marginBottom: "1rem",
          }}>
            The Future of Farming{" "}
            <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>
              Starts Here
            </GradientText>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p style={{
            fontFamily: font.mono, fontSize: "0.8rem", letterSpacing: "0.15em",
            color: T.textDim, marginBottom: "2.5rem", textTransform: "uppercase",
          }}>
            May 9th, 2026 · PJTSAU University, Hyderabad
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Btn>Partner With Us</Btn>
          </div>
        </ScrollReveal>
      </div>

      <FlyingPosters images={IMAGES.flyingPosters} />
    </section>
  );
}
