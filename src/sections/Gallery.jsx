import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { GradientText } from "../components/atoms/GradientText";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const labels = [
  "Aerial Spraying Demo", "Exhibition Hall", "Keynote Stage",
  "Pilot Training Zone", "B2B Matchmaking", "Panel Discussions",
  "Drone Fleet", "Crop Fields",
];

export function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Gallery</SectionLabel>
        <ScrollReveal>
          <h2 style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, color: T.text, marginBottom: "2.5rem" }}>
            <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>Visual</GradientText> Showcase
          </h2>
        </ScrollReveal>

        {/* Bento masonry grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "180px",
          gap: "0.8rem",
        }} className="gallery-grid">
          {IMAGES.gallery.map((img, i) => {
            const isWide = i === 0 || i === 5;
            const isTall = i === 2 || i === 7;
            return (
              <ScrollReveal key={i} delay={i * 0.06} style={{
                gridColumn: isWide ? "span 2" : "span 1",
                gridRow: isTall ? "span 2" : "span 1",
              }}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelected(i)}
                  style={{
                    width: "100%", height: "100%", borderRadius: 16, overflow: "hidden",
                    cursor: "pointer", position: "relative",
                    border: `1px solid ${T.glassBorder}`,
                  }}
                >
                  <img src={img} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(to top, ${T.bg}cc, transparent 50%)`,
                  }} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: "absolute", inset: 0,
                      boxShadow: `inset 0 0 30px ${T.green}22`,
                      borderRadius: 16,
                    }}
                  />
                  <span style={{
                    position: "absolute", bottom: 12, left: 14,
                    fontFamily: font.mono, fontSize: "0.65rem", color: T.textDim,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>
                    {labels[i]}
                  </span>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              style={{
                position: "fixed", inset: 0, zIndex: 200,
                background: `${T.bg}ee`, backdropFilter: "blur(30px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", padding: "2rem",
              }}
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={IMAGES.gallery[selected]}
                alt=""
                style={{ maxWidth: "90%", maxHeight: "85vh", borderRadius: 16, objectFit: "contain" }}
              />
              <span style={{
                position: "absolute", top: 30, right: 30,
                fontFamily: font.mono, fontSize: "0.8rem", color: T.textDim,
              }}>
                ESC to close
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          @media (max-width: 768px) {
            .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
