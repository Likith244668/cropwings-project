import { useRef } from "react";
import { motion } from "framer-motion";
import { T } from "../../config/tokens";

export function ParticleField() {
  const particles = useRef(
    Array.from({ length: 40 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 2 + 1, dur: Math.random() * 8 + 6, delay: Math.random() * 4,
    }))
  ).current;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {particles.map((p, i) => (
        <motion.div key={i}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: "50%", background: T.green }}
        />
      ))}
    </div>
  );
}
