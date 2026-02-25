import { motion } from "framer-motion";
import { T } from "../../config/tokens";

export function GlassCard({ children, style = {}, onMouseMove, ...props }) {
  return (
    <motion.div
      onMouseMove={onMouseMove}
      style={{
        background: T.glass, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${T.glassBorder}`, borderRadius: 20, padding: "2rem",
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
