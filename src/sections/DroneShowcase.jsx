import { lazy, Suspense } from "react";
import { T, font } from "../config/tokens";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { GradientText } from "../components/atoms/GradientText";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const DroneModelViewer = lazy(() =>
  import("../components/three/DroneModelViewer").then((m) => ({ default: m.DroneModelViewer }))
);

function LoadingFallback() {
  return (
    <div style={{
      width: "100%", height: 500, borderRadius: 20,
      background: T.glass, border: `1px solid ${T.glassBorder}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: "1rem",
    }}>
      <div style={{
        width: 40, height: 40, border: `2px solid ${T.glassBorder}`,
        borderTopColor: T.green, borderRadius: "50%",
        animation: "spinRotor 1s linear infinite",
      }} />
      <span style={{ fontFamily: font.mono, fontSize: "0.75rem", color: T.textDim }}>Loading 3D Model...</span>
    </div>
  );
}

export function DroneShowcase() {
  return (
    <section style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <SectionLabel>3D Showcase</SectionLabel>
          <ScrollReveal>
            <h2 style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, color: T.text }}>
              Interactive{" "}
              <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>
                Drone Model
              </GradientText>
            </h2>
            <p style={{ fontFamily: font.body, fontSize: "0.9rem", color: T.textDim, marginTop: "0.8rem" }}>
              Drag to rotate · Auto-rotating view
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div style={{
            borderRadius: 20, overflow: "hidden",
            border: `1px solid ${T.glassBorder}`,
            background: `radial-gradient(ellipse at center, ${T.greenDark}33, ${T.bg})`,
          }}>
            <Suspense fallback={<LoadingFallback />}>
              <DroneModelViewer />
            </Suspense>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
