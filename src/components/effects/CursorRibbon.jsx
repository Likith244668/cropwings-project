import { useEffect, useRef } from "react";
import { T } from "../../config/tokens";

export function CursorRibbon() {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      points.current.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (points.current.length > 60) points.current.shift();
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = points.current;
      if (pts.length > 2) {
        for (let i = 1; i < pts.length; i++) {
          const p = pts[i];
          const prev = pts[i - 1];
          p.life -= 0.015;
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(10,255,106,${p.life * 0.3})`;
          ctx.lineWidth = p.life * 3;
          ctx.lineCap = "round";
          ctx.stroke();
        }
        points.current = pts.filter((p) => p.life > 0);
      }
      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none" }}
    />
  );
}
