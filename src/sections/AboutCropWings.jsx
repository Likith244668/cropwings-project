import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { GradientText } from "../components/atoms/GradientText";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const stats = [
  { num: "5L+", label: "Acres Covered" },
  { num: "500+", label: "Drones Deployed" },
  { num: "2000+", label: "Trained Pilots" },
  { num: "1M+", label: "Farmers Impacted" },
];

export function AboutCropWings() {
  return (
    <section style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>About CropWings</SectionLabel>
        <ScrollReveal>
          <h2 style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, color: T.text, marginBottom: "1.5rem", maxWidth: 700 }}>
            Pioneering India's{" "}
            <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>
              Agricultural Drone Revolution
            </GradientText>
          </h2>
        </ScrollReveal>

        {/* Bento layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem", marginTop: "2rem",
        }}>
          {/* Image card */}
          <ScrollReveal style={{
            gridRow: "span 2",
            borderRadius: 20, overflow: "hidden", position: "relative", minHeight: 300,
          }}>
            <img src={IMAGES.about.techFarm} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${T.bg}aa, transparent)` }} />
          </ScrollReveal>

          {/* Stats */}
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <div style={{
                background: T.glass, backdropFilter: "blur(20px)",
                border: `1px solid ${T.glassBorder}`, borderRadius: 20,
                padding: "1.8rem", display: "flex", flexDirection: "column",
                justifyContent: "center", height: "100%",
              }}>
                <GradientText style={{ fontFamily: font.display, fontSize: "2rem", fontWeight: 800 }}>
                  {s.num}
                </GradientText>
                <span style={{ fontFamily: font.mono, fontSize: "0.65rem", letterSpacing: "0.15em", color: T.textDim, marginTop: "0.4rem", textTransform: "uppercase" }}>
                  {s.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
