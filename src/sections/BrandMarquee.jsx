import { motion } from "framer-motion";
import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { ScrollReveal } from "../components/effects/ScrollReveal";

export function BrandMarquee() {
  const brands = IMAGES.brands;
  const doubled = [...brands, ...brands];

  return (
    <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingLeft: "clamp(1.5rem, 4vw, 4rem)", marginBottom: "2rem" }}>
        <SectionLabel>Our Partners</SectionLabel>
        <ScrollReveal>
          <h2 style={{ fontFamily: font.display, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 800, color: T.text }}>
            Trusted By Industry Leaders
          </h2>
        </ScrollReveal>
      </div>

      {/* Auto-scrolling marquee */}
      <div style={{ position: "relative" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to right, ${T.bg}, transparent)`, zIndex: 2 }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to left, ${T.bg}, transparent)`, zIndex: 2 }} />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ display: "flex", gap: "1.5rem", width: "fit-content" }}
        >
          {doubled.map((brand, i) => (
            <div
              key={i}
              style={{
                minWidth: 200, height: 80,
                background: T.glass, backdropFilter: "blur(16px)",
                border: `1px solid ${T.glassBorder}`, borderRadius: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, padding: "0 1.5rem",
              }}
            >
              <span style={{ fontFamily: font.mono, fontSize: "0.75rem", fontWeight: 500, color: T.textDim, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - reverse direction */}
      <div style={{ position: "relative", marginTop: "1rem" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to right, ${T.bg}, transparent)`, zIndex: 2 }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to left, ${T.bg}, transparent)`, zIndex: 2 }} />

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ display: "flex", gap: "1.5rem", width: "fit-content" }}
        >
          {[...doubled].reverse().map((brand, i) => (
            <div
              key={i}
              style={{
                minWidth: 180, height: 70,
                background: T.glass, backdropFilter: "blur(16px)",
                border: `1px solid ${T.glassBorder}`, borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, padding: "0 1.2rem",
              }}
            >
              <span style={{ fontFamily: font.mono, fontSize: "0.65rem", fontWeight: 500, color: T.textDim, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
