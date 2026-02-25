import { useState } from "react";
import { motion } from "framer-motion";
import { T } from "../../config/tokens";

export function MagicBentoCard({ children, image, colSpan = 1, rowSpan = 1, style = {} }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        position: "relative",
        overflow: "hidden",
        borderRadius: 20,
        background: T.glass,
        border: `1px solid ${T.glassBorder}`,
        cursor: "pointer",
        ...style,
      }}
    >
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: hovered ? 0.4 : 0.2,
            transition: "opacity 0.4s ease",
          }}
        />
      )}
      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(180deg, transparent 0%, ${T.bg}cc 100%)`,
      }} />
      {/* Mouse spotlight */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${T.green}22 0%, transparent 50%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
      }} />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        {children}
      </div>
    </motion.div>
  );
}
