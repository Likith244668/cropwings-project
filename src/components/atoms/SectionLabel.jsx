import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";
import { T, font } from "../../config/tokens";

export function SectionLabel({ children, delay = 0 }) {
  const [ref, inView] = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      style={{
        fontFamily: font.mono, fontSize: "0.7rem", letterSpacing: "0.25em",
        color: T.green, textTransform: "uppercase", marginBottom: "1rem",
        display: "flex", alignItems: "center", gap: "0.75rem",
      }}
    >
      <span style={{ width: 32, height: 1, background: T.green, display: "inline-block" }} />
      {children}
    </motion.div>
  );
}
