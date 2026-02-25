import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";
import { T } from "../../config/tokens";

export function Divider() {
  const [ref, inView] = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        height: 1,
        background: `linear-gradient(90deg, transparent, ${T.green}33, transparent)`,
        margin: "0 auto", maxWidth: 600, transformOrigin: "center",
      }}
    />
  );
}
