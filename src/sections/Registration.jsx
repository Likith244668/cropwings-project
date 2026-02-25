import { motion } from "framer-motion";
import { T, font } from "../config/tokens";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { GradientText } from "../components/atoms/GradientText";
import { Btn } from "../components/atoms/Btn";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const regCards = [
  { icon: "🎫", title: "Visitor", price: "Free", desc: "Access to exhibition halls & demo zones", color: T.green },
  { icon: "🏢", title: "Exhibitor", price: "₹50K+", desc: "Premium stall space & B2B networking", color: T.gold },
  { icon: "⭐", title: "Sponsor", price: "Custom", desc: "Maximum brand visibility & speaking slots", color: "#ff8844" },
  { icon: "🎮", title: "Drone Pilot", price: "₹999", desc: "Training workshop & certification", color: "#6699ff" },
];

export function Registration() {
  return (
    <section id="register" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Registration</SectionLabel>
        <SectionTitle>Join the Movement</SectionTitle>
        <p style={{ fontFamily: font.body, color: T.textDim, maxWidth: 500, marginTop: "1rem", marginBottom: "3rem", lineHeight: 1.7 }}>
          Choose your path and be part of India's agri-drone revolution.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
          {regCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, borderColor: card.color + "44" }}
                style={{
                  background: T.glass, backdropFilter: "blur(20px)",
                  border: `1px solid ${T.glassBorder}`, borderRadius: 20,
                  padding: "2rem", height: "100%",
                  display: "flex", flexDirection: "column",
                  transition: "border-color 0.3s",
                }}
              >
                <span style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{card.icon}</span>
                <h3 style={{ fontFamily: font.display, fontSize: "1.2rem", fontWeight: 700, color: T.text, marginBottom: "0.3rem" }}>
                  {card.title}
                </h3>
                <GradientText colors={[card.color, T.green, card.color]} style={{ fontFamily: font.display, fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.8rem" }}>
                  {card.price}
                </GradientText>
                <p style={{ fontFamily: font.body, fontSize: "0.85rem", color: T.textDim, lineHeight: 1.6, flex: 1 }}>
                  {card.desc}
                </p>
                <Btn variant={i === 0 ? "primary" : "secondary"} style={{ marginTop: "1.5rem", width: "100%", textAlign: "center" }}>
                  Register →
                </Btn>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
