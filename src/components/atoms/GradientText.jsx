import { motion } from "framer-motion";
import { T } from "../../config/tokens";

export function GradientText({ children, colors, style = {} }) {
  const c = colors || [T.green, T.gold, T.green];
  return (
    <motion.span
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: `linear-gradient(90deg, ${c.join(", ")})`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline-block",
        ...style,
      }}
    >
      {children}
    </motion.span>
  );
}
