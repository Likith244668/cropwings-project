import { T } from "../../config/tokens";

export function BentoGrid({ children, columns = 3, gap = "1rem", style = {} }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridAutoRows: "220px",
      gap,
      ...style,
    }}>
      {children}
    </div>
  );
}

export function BentoCell({ children, colSpan = 1, rowSpan = 1, style = {} }) {
  return (
    <div style={{
      gridColumn: `span ${colSpan}`,
      gridRow: `span ${rowSpan}`,
      borderRadius: 20,
      overflow: "hidden",
      position: "relative",
      ...style,
    }}>
      {children}
    </div>
  );
}
