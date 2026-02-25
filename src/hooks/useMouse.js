import { useCallback } from "react";
import { useMotionValue } from "framer-motion";

export function useMouse() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [x, y]);
  return { x, y, handleMove };
}
