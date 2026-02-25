import { motion } from "framer-motion";
import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { GradientText } from "../components/atoms/GradientText";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const stats = [
  { num: "250+", label: "Pilots" },
  { num: "25+", label: "Companies" },
];

export function About() {
  return (
    <section id="about" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>About the Event</SectionLabel>
        <ScrollReveal>
          <h2 style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, color: T.text, marginBottom: "2rem" }}>
            Where Agriculture Meets{" "}
            <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>
              Autonomous Flight
            </GradientText>
          </h2>
        </ScrollReveal>

        {/* Bento grid layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}>
          {/* Large image card */}
          <ScrollReveal delay={0.1} style={{
            gridRow: "span 2",
            borderRadius: 20, overflow: "hidden", position: "relative", minHeight: 350,
          }}>
            <img src={IMAGES.about.droneField} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${T.bg}cc, transparent)` }} />
            <p style={{
              position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem",
              fontFamily: font.body, fontSize: "0.9rem", color: T.text, lineHeight: 1.6,
            }}>
              India's flagship agri drone ecosystem event bringing together the entire value chain.
            </p>
          </ScrollReveal>

          {/* Stat cards */}
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: T.green + "44" }}
                style={{
                  background: T.glass, backdropFilter: "blur(20px)",
                  border: `1px solid ${T.glassBorder}`, borderRadius: 20,
                  padding: "2rem", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", minHeight: 160,
                  transition: "border-color 0.3s",
                }}
              >
                <GradientText style={{ fontFamily: font.display, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
                  {s.num}
                </GradientText>
                <span style={{ fontFamily: font.mono, fontSize: "0.7rem", letterSpacing: "0.15em", color: T.textDim, marginTop: "0.5rem", textTransform: "uppercase" }}>
                  {s.label}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}

          {/* Image cards */}
          <ScrollReveal delay={0.4} style={{
            borderRadius: 20, overflow: "hidden", position: "relative", minHeight: 160,
          }}>
            <img src={IMAGES.highlights.spraying} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${T.bg}cc, transparent)` }} />
            <p style={{ position: "absolute", bottom: "1rem", left: "1rem", fontFamily: font.mono, fontSize: "0.65rem", color: T.textDim, letterSpacing: "0.1em", textTransform: "uppercase" }}>Live Demo Field</p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} style={{
            borderRadius: 20, overflow: "hidden", position: "relative", minHeight: 160,
          }}>
            <img src={IMAGES.highlights.expo} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${T.bg}cc, transparent)` }} />
            <p style={{ position: "absolute", bottom: "1rem", left: "1rem", fontFamily: font.mono, fontSize: "0.65rem", color: T.textDim, letterSpacing: "0.1em", textTransform: "uppercase" }}>Technology Expo</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
