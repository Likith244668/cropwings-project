import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";

export function GlowText({ children, delay = 0, style = {} }) {
  const [ref, inView] = useReveal();
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "inline-block", ...style }}
    >
      {children}
    </motion.span>
  );
}
