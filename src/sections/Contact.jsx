import { T, font } from "../config/tokens";
import { IMAGES } from "../config/images";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { Btn } from "../components/atoms/Btn";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const contactInfo = [
  { icon: "📍", label: "Location", value: "Hyderabad, Telangana, India" },
  { icon: "✉️", label: "Email", value: "events@cropwings.com" },
  { icon: "📞", label: "Phone", value: "+91 98765 43210" },
  { icon: "🌐", label: "Website", value: "www.cropwings.com" },
];

export function Contact() {
  return (
    <section style={{ position: "relative", padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)", overflow: "hidden" }}>
      {/* Background */}
      <img src={IMAGES.contact} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.08 }} />
      <div style={{ position: "absolute", inset: 0, background: `${T.bg}f0` }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <SectionLabel>Contact</SectionLabel>
        <SectionTitle>Get In Touch</SectionTitle>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem", marginTop: "2.5rem",
        }}>
          {/* Contact info */}
          <ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {contactInfo.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: T.glass, border: `1px solid ${T.glassBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem", flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: font.mono, fontSize: "0.65rem", color: T.textDim, letterSpacing: "0.15em", textTransform: "uppercase" }}>{c.label}</div>
                    <div style={{ fontFamily: font.body, fontSize: "0.9rem", color: T.text, marginTop: 2 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.2}>
            <div style={{
              background: T.glass, backdropFilter: "blur(20px)",
              border: `1px solid ${T.glassBorder}`, borderRadius: 20,
              padding: "2rem",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {["Full Name", "Email", "Organization"].map((label) => (
                  <input
                    key={label}
                    placeholder={label}
                    style={{
                      padding: "12px 16px", borderRadius: 12,
                      background: `${T.bg}80`, border: `1px solid ${T.glassBorder}`,
                      color: T.text, fontFamily: font.body, fontSize: "0.85rem",
                      outline: "none",
                    }}
                    onFocus={(e) => e.target.style.borderColor = T.green + "44"}
                    onBlur={(e) => e.target.style.borderColor = T.glassBorder}
                  />
                ))}
                <textarea
                  placeholder="Message"
                  rows={4}
                  style={{
                    padding: "12px 16px", borderRadius: 12,
                    background: `${T.bg}80`, border: `1px solid ${T.glassBorder}`,
                    color: T.text, fontFamily: font.body, fontSize: "0.85rem",
                    outline: "none", resize: "vertical",
                  }}
                  onFocus={(e) => e.target.style.borderColor = T.green + "44"}
                  onBlur={(e) => e.target.style.borderColor = T.glassBorder}
                />
                <Btn style={{ width: "100%", textAlign: "center" }}>Send Message</Btn>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
