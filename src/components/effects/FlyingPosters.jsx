import { motion } from "framer-motion";
import { T } from "../../config/tokens";

export function FlyingPosters({ images = [] }) {
  if (!images.length) return null;
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {images.map((img, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, (i % 2 === 0 ? 30 : -30), 0],
            y: [0, -20 - i * 5, 0],
            rotate: [-3 + i * 2, 3 - i, -3 + i * 2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            position: "absolute",
            left: `${15 + i * 22}%`,
            top: `${10 + (i % 3) * 25}%`,
            width: 100 + i * 10,
            height: 130 + i * 12,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 20px ${T.green}11`,
            border: `1px solid ${T.glassBorder}`,
          }}
        >
          <img
            src={img}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
