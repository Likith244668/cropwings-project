import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { GradientText } from "../components/atoms/GradientText";
import { Btn } from "../components/atoms/Btn";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const prompts = [
  "Drone spraying rice paddy at sunset",
  "Aerial view of banana plantation with monitoring drone",
  "Agricultural drone fleet over wheat fields",
  "Precision agriculture mapping with thermal drone",
  "Nano drone inspecting crop health",
  "Drone delivering pesticide over green farmland",
];

export function ImageGenDemo() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const images = IMAGES.aiDemo;

  const generate = () => {
    if (generating) return;
    setGenerating(true);
    setRevealed(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setGenerating(false);
      setRevealed(true);
    }, 2500);
  };

  const fillPrompt = (p) => {
    setPrompt(p);
  };

  return (
    <section style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <SectionLabel>AI Demo</SectionLabel>
          <ScrollReveal>
            <h2 style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, color: T.text }}>
              <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>
                Imagine
              </GradientText>
              {" "}Your Drone Scene
            </h2>
          </ScrollReveal>
        </div>

        {/* Prompt input */}
        <ScrollReveal>
          <div style={{
            display: "flex", gap: "0.8rem", marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}>
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your agricultural drone scene..."
              style={{
                flex: 1, minWidth: 250, padding: "14px 20px", borderRadius: 60,
                background: T.glass, border: `1px solid ${T.glassBorder}`,
                color: T.text, fontFamily: font.body, fontSize: "0.9rem",
                outline: "none", backdropFilter: "blur(16px)",
              }}
              onFocus={(e) => e.target.style.borderColor = T.green + "44"}
              onBlur={(e) => e.target.style.borderColor = T.glassBorder}
            />
            <Btn onClick={generate} style={{ flexShrink: 0 }}>
              {generating ? "Generating..." : "Generate ✨"}
            </Btn>
          </div>

          {/* Prompt suggestions */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            {prompts.slice(0, 3).map((p, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.03, borderColor: T.green + "44" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => fillPrompt(p)}
                style={{
                  background: T.glass, border: `1px solid ${T.glassBorder}`,
                  borderRadius: 60, padding: "8px 16px", cursor: "pointer",
                  fontFamily: font.body, fontSize: "0.75rem", color: T.textDim,
                  transition: "border-color 0.3s",
                }}
              >
                {p}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Image display */}
        <ScrollReveal>
          <div style={{
            position: "relative", width: "100%", height: 400, borderRadius: 20,
            overflow: "hidden", border: `1px solid ${T.glassBorder}`,
            background: T.glass,
          }}>
            <AnimatePresence mode="wait">
              {generating ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: "1.5rem",
                    background: `radial-gradient(ellipse at center, ${T.greenDark}44, ${T.bg})`,
                  }}
                >
                  {/* Loading animation */}
                  <div style={{ position: "relative", width: 60, height: 60 }}>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      style={{
                        width: 60, height: 60, borderRadius: "50%",
                        border: `2px solid ${T.glassBorder}`,
                        borderTopColor: T.green,
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 8,
                      borderRadius: "50%", background: `${T.green}22`,
                      animation: "pulse-green 1.5s ease infinite",
                    }} />
                  </div>
                  <span style={{ fontFamily: font.mono, fontSize: "0.75rem", color: T.green, letterSpacing: "0.15em" }}>
                    GENERATING...
                  </span>
                  {/* Fake progress bar */}
                  <div style={{ width: 200, height: 3, background: T.glassBorder, borderRadius: 3, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 2.3, ease: "easeOut" }}
                      style={{ height: "100%", background: T.green, borderRadius: 3 }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`image-${currentImage}`}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <img
                    src={images[currentImage]}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${T.bg}88, transparent 40%)` }} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
