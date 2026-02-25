import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { GradientText } from "../components/atoms/GradientText";
import { ScrollReveal } from "../components/effects/ScrollReveal";

export function RythuVedika() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      minHeight: 400, display: "flex", alignItems: "center",
    }}>
      {/* Background image */}
      <img
        src={IMAGES.nanoBanana[0]}
        alt="" loading="lazy"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
      />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${T.bg}ee, ${T.bg}88)` }} />

      <div style={{ position: "relative", zIndex: 2, padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 4rem)", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <SectionLabel>Co-Powered By</SectionLabel>
        <ScrollReveal>
          <h2 style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, color: T.text, marginBottom: "1rem" }}>
            <GradientText style={{ fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}>
              Rythu Vedika
            </GradientText>
          </h2>
          <p style={{ fontFamily: font.body, fontSize: "1rem", color: T.textDim, maxWidth: 600, lineHeight: 1.7 }}>
            Empowering Telangana's farming community through technology adoption and drone-assisted agriculture for better crop yields.
          </p>
        </ScrollReveal>

        {/* Nano banana images */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {IMAGES.nanoBanana.map((img, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1}>
              <div style={{
                width: 180, height: 120, borderRadius: 16, overflow: "hidden",
                border: `1px solid ${T.glassBorder}`,
              }}>
                <img src={img} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
