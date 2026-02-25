import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, font } from "../config/tokens";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const schedule = {
  1: [
    { time: "09:00", title: "Grand Inauguration", desc: "Opening ceremony with dignitaries" },
    { time: "10:30", title: "Keynote: Future of Agri Drones", desc: "Vision for Indian agricultural aviation" },
    { time: "12:00", title: "Live Drone Demos", desc: "Spraying, mapping & survey demonstrations" },
    { time: "14:00", title: "Technology Expo Opens", desc: "Browse 200+ exhibitor stalls" },
    { time: "16:00", title: "Panel: Policy & Regulation", desc: "DGCA framework & licensing updates" },
  ],
  2: [
    { time: "09:30", title: "Pilot Training Workshop", desc: "Hands-on drone operation certification" },
    { time: "11:00", title: "B2B Matchmaking", desc: "Pre-scheduled business meetings" },
    { time: "13:00", title: "Investor Connect", desc: "Pitch sessions with VCs & angel investors" },
    { time: "15:00", title: "Awards Ceremony", desc: "Recognizing agri-drone excellence" },
  ],
};

export function Schedule() {
  const [day, setDay] = useState(1);

  return (
    <section id="schedule" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionLabel>Schedule</SectionLabel>
        <SectionTitle>Event Timeline</SectionTitle>

        {/* Day toggle with sliding pill */}
        <div style={{
          display: "inline-flex", gap: 4, background: T.glass,
          borderRadius: 60, padding: 4, marginTop: "2rem", marginBottom: "3rem",
          border: `1px solid ${T.glassBorder}`, position: "relative",
        }}>
          {[1, 2].map((d) => (
            <motion.button
              key={d}
              onClick={() => setDay(d)}
              style={{
                fontFamily: font.body, fontWeight: 600, fontSize: "0.85rem",
                padding: "10px 28px", borderRadius: 60, border: "none",
                cursor: "pointer", position: "relative", zIndex: 2,
                background: "transparent",
                color: day === d ? T.bg : T.textDim,
                transition: "color 0.3s",
              }}
            >
              Day {d}
            </motion.button>
          ))}
          <motion.div
            layout
            style={{
              position: "absolute", top: 4, bottom: 4,
              width: "calc(50% - 4px)", borderRadius: 60,
              background: T.green,
            }}
            animate={{ left: day === 1 ? 4 : "calc(50%)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{ position: "relative", paddingLeft: "2rem" }}
          >
            {/* Timeline line */}
            <div style={{
              position: "absolute", left: 5, top: 0, bottom: 0, width: 1,
              background: `linear-gradient(${T.green}44, transparent)`,
            }} />

            {schedule[day].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div style={{ marginBottom: "2rem", position: "relative" }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: "-2rem", top: 6, width: 10, height: 10,
                    borderRadius: "50%", background: T.green, boxShadow: `0 0 12px ${T.green}66`,
                    transform: "translateX(-4.5px)",
                  }} />
                  <span style={{ fontFamily: font.mono, fontSize: "0.7rem", color: T.green, letterSpacing: "0.15em" }}>{item.time}</span>
                  <h4 style={{ fontFamily: font.display, fontSize: "1.1rem", fontWeight: 700, color: T.text, marginTop: "0.3rem" }}>{item.title}</h4>
                  <p style={{ fontFamily: font.body, fontSize: "0.85rem", color: T.textDim, marginTop: "0.2rem" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
