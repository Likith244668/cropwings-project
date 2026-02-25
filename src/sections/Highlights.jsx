import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { GradientText } from "../components/atoms/GradientText";
import { MagicBentoCard } from "../components/layout/MagicBentoCard";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const highlights = [
  { icon: "🚁", title: "Live Drone Demos", desc: "Watch agricultural drones in action over real crop fields", image: IMAGES.highlights.spraying, col: 2, row: 2 },
  { icon: "🔬", title: "Technology Expo", desc: "200+ exhibitors showcasing cutting-edge agritech", image: IMAGES.highlights.expo, col: 1, row: 1 },
  { icon: "📋", title: "Licensing Support", desc: "DGCA compliance & certification guidance", image: IMAGES.highlights.licensing, col: 1, row: 1 },
  { icon: "🎮", title: "Pilot Zone", desc: "Hands-on drone flight experience & training", image: IMAGES.highlights.pilot, col: 1, row: 1 },
  { icon: "🤝", title: "Dealer Connect", desc: "B2B matchmaking for distributors", image: IMAGES.highlights.dealer, col: 1, row: 1 },
  { icon: "🎤", title: "Leadership Panels", desc: "Industry leaders shaping agri-drone policy", image: IMAGES.highlights.panels, col: 2, row: 1 },
];

export function Highlights() {
  return (
    <section id="highlights" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Event Highlights</SectionLabel>
        <ScrollReveal>
          <h2 style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, color: T.text, marginBottom: "2.5rem" }}>
            <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>
              Magic Bento
            </GradientText>
            {" "}Experience
          </h2>
        </ScrollReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "200px",
          gap: "1rem",
        }} className="highlights-grid">
          {highlights.map((h, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <MagicBentoCard image={h.image} colSpan={h.col} rowSpan={h.row} style={{
                gridColumn: `span ${h.col}`,
                gridRow: `span ${h.row}`,
                height: "100%",
              }}>
                <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{h.icon}</span>
                <h3 style={{ fontFamily: font.display, fontSize: "1.2rem", fontWeight: 700, color: T.text, marginBottom: "0.3rem" }}>
                  {h.title}
                </h3>
                <p style={{ fontFamily: font.body, fontSize: "0.8rem", color: T.textDim, lineHeight: 1.5 }}>
                  {h.desc}
                </p>
              </MagicBentoCard>
            </ScrollReveal>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .highlights-grid { grid-template-columns: 1fr !important; }
            .highlights-grid > div > div { grid-column: span 1 !important; grid-row: span 1 !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
