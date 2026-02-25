import { motion } from "framer-motion";
import { T, font } from "../../config/tokens";

export function Btn({ children, variant = "primary", onClick, style = {} }) {
  const isPrimary = variant === "primary";
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: isPrimary ? `0 0 40px ${T.green}44` : `0 0 30px ${T.gold}33` }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        fontFamily: font.body, fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.04em",
        padding: "14px 36px", borderRadius: 60, cursor: "pointer",
        background: isPrimary ? `linear-gradient(135deg, ${T.green}, ${T.greenDim})` : "transparent",
        color: isPrimary ? T.bg : T.gold,
        border: isPrimary ? "none" : `1.5px solid ${T.gold}`,
        ...style,
      }}
    >
      {children}
    </motion.button>
  );
}
