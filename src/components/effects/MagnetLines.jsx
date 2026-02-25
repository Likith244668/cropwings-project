import { useEffect, useRef } from "react";
import { T } from "../../config/tokens";

export function MagnetLines({ rows = 12, cols = 24 }) {
  const svgRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const raf = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const lines = svg.querySelectorAll("line");

    const onMove = (e) => {
      const rect = svg.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -1000, y: -1000 }; };

    const animate = () => {
      lines.forEach((line) => {
        const ox = parseFloat(line.dataset.ox);
        const oy = parseFloat(line.dataset.oy);
        const dx = mouse.current.x - ox;
        const dy = mouse.current.y - oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / 120);
        const angle = Math.atan2(dy, dx);
        const offsetX = Math.cos(angle) * force * 18;
        const offsetY = Math.sin(angle) * force * 18;
        line.setAttribute("x2", ox + 16 + offsetX);
        line.setAttribute("y2", oy + offsetY);
      });
      raf.current = requestAnimationFrame(animate);
    };

    svg.addEventListener("mousemove", onMove);
    svg.addEventListener("mouseleave", onLeave);
    animate();

    return () => {
      svg.removeEventListener("mousemove", onMove);
      svg.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const lineElements = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c / (cols - 1)) * 100;
      const y = (r / (rows - 1)) * 100;
      lineElements.push(
        <line
          key={`${r}-${c}`}
          x1={`${x}%`} y1={`${y}%`}
          x2={`${x + 1.5}%`} y2={`${y}%`}
          data-ox={x} data-oy={y}
          stroke={T.green} strokeWidth="0.5" opacity="0.25"
        />
      );
    }
  }

  return (
    <svg
      ref={svgRef}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0, pointerEvents: "auto" }}
      preserveAspectRatio="none"
    >
      {lineElements}
    </svg>
  );
}
