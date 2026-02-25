import { motion } from "framer-motion";
import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { GradientText } from "../components/atoms/GradientText";

import { ScrollReveal } from "../components/effects/ScrollReveal";
import { FlyingPosters } from "../components/effects/FlyingPosters";

const exhibitStats = [
  { num: "50+", label: "Premium Stalls" },
  { num: "5 Acre", label: "Live Demo Field" },
  { num: "3", label: "Exhibition Halls" },
  { num: "B2B", label: "Matchmaking" },
];

export function Exhibit() {
  return (
    <section id="exhibit" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "3rem", alignItems: "center" }}>
          {/* Left: content */}
          <ScrollReveal>
            <SectionLabel>Exhibition</SectionLabel>
            <h2 style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, color: T.text, marginBottom: "1.5rem" }}>
              Showcase Your{" "}
              <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>Innovation</GradientText>
            </h2>
            <p style={{ fontFamily: font.body, color: T.textDim, lineHeight: 1.7, marginBottom: "2rem", maxWidth: 450 }}>
              Premium exhibition space designed for agri-drone manufacturers, technology providers, and agricultural enterprises.
            </p>
          </ScrollReveal>

          {/* Right: image + stats */}
          <ScrollReveal delay={0.2}>
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden" }}>
              <img src={IMAGES.exhibit} alt="" loading="lazy" style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 20 }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${T.bg}ee, transparent 60%)`, borderRadius: 20 }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem",
                display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.8rem",
              }}>
                {exhibitStats.map((s, i) => (
                  <div key={i} style={{
                    background: `${T.glass}`, backdropFilter: "blur(12px)",
                    border: `1px solid ${T.glassBorder}`, borderRadius: 12,
                    padding: "0.8rem", textAlign: "center",
                  }}>
                    <div style={{ fontFamily: font.display, fontSize: "1.1rem", fontWeight: 800, color: T.green }}>{s.num}</div>
                    <div style={{ fontFamily: font.mono, fontSize: "0.6rem", color: T.textDim, letterSpacing: "0.1em", marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Flying posters decoration */}
      <FlyingPosters images={IMAGES.flyingPosters.slice(0, 2)} />
    </section>
  );
}
