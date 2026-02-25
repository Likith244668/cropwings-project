import { motion } from "framer-motion";
import { T } from "../../config/tokens";

export function DroneIcon({ size = 80, color = T.green }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="42" rx="12" ry="5" fill={color} opacity="0.2" />
      <rect x="34" y="36" width="12" height="8" rx="3" fill={color} opacity="0.8" />
      <line x1="28" y1="38" x2="16" y2="30" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="52" y1="38" x2="64" y2="30" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="28" y1="42" x2="16" y2="50" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="52" y1="42" x2="64" y2="50" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <circle cx="16" cy="30" r="7" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="64" cy="30" r="7" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="16" cy="50" r="7" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="64" cy="50" r="7" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
      {[16, 64].map(cx => [30, 50].map(cy => (
        <motion.circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" stroke={color} strokeWidth="0.5" fill="none" opacity="0.3"
          animate={{ r: [7, 10, 7] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      )))}
    </svg>
  );
}
