import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";

export function ScrollReveal({ children, direction = "up", delay = 0, distance = 60, style = {} }) {
  const [ref, inView] = useReveal();
  const offsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(8px)", ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
