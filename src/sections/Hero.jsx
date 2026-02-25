import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -80]);

  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => { setTimeout(() => setLoaded(true), 300); }, []);

  const heroImage = isMobile ? IMAGES.heroMobile : IMAGES.heroOverlay;

  return (
    <motion.section
      id="hero"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      {/* Full-screen background image with Ken Burns */}
      <motion.div style={{
        position: "absolute", inset: 0, scale,
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
          animation: "kenBurns 20s ease-in-out infinite alternate",
        }} />
      </motion.div>

      {/* Dark gradient overlays */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to bottom, ${T.bg}88 0%, transparent 30%, transparent 50%, ${T.bg} 100%)`,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, ${T.bg}aa 100%)`,
      }} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${T.green}06 1px, transparent 1px), linear-gradient(90deg, ${T.green}06 1px, transparent 1px)`,
        backgroundSize: "80px 80px", opacity: 0.4,
      }} />

      {/* Center content - minimal */}
      <motion.div style={{
        opacity, y, position: "relative", zIndex: 10, height: "100%",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: isMobile ? "flex-end" : "center",
        paddingBottom: isMobile ? 30 : 0,
      }}>
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            background: isMobile ? "rgba(0,0,0,0.55)" : T.glass,
            backdropFilter: "blur(20px)",
            border: `1px solid ${isMobile ? "rgba(255,255,255,0.2)" : T.glassBorder}`,
            borderRadius: 60, padding: "10px 28px",
            fontFamily: font.mono, fontSize: "0.7rem", letterSpacing: "0.2em",
            color: isMobile ? "#ffffff" : T.green, textTransform: "uppercase",
          }}
        >
          May 9th, 2026 · PJTSAU University, Hyderabad
        </motion.div>

        {/* Big statement */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.2 }}
          style={{
            fontFamily: font.display, fontSize: "clamp(2rem, 6vw, 4.5rem)",
            fontWeight: 800, lineHeight: 1.1, textAlign: "center",
            color: T.text, marginTop: "1.5rem", maxWidth: 800,
            padding: "0 1rem",
          }}
        >
          {/* Building India's{" "} */}
          <span style={{
            background: `linear-gradient(135deg, ${T.green}, ${T.gold || "#c9a84c"})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            {/* Agri Drone Ecosystem */}
          </span>
        </motion.h1>

        {/* Stats pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
          style={{
            display: "flex", gap: "2rem", marginTop: "1.5rem",
            fontFamily: font.mono, fontSize: "0.8rem", letterSpacing: "0.1em",
            color: isMobile ? "#e8ede9" : T.textDim,
            ...(isMobile && {
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 60, padding: "10px 24px",
            }),
          }}
        >
          <span><strong style={{ color: isMobile ? "#ffffff" : T.green, fontSize: "1.1rem" }}>250+</strong> Pilots</span>
          <span><strong style={{ color: isMobile ? "#ffffff" : T.green, fontSize: "1.1rem" }}>25+</strong> Companies</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          zIndex: 10, display: isMobile ? "none" : "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}
      >
        <span style={{ fontFamily: font.mono, fontSize: "0.6rem", letterSpacing: "0.2em", color: T.textDim }}>SCROLL</span>
        <div style={{ width: 1, height: 30, background: `linear-gradient(${T.green}, transparent)` }} />
      </motion.div>
    </motion.section>
  );
}
