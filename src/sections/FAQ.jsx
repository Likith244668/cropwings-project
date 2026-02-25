import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, font } from "../config/tokens";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const faqs = [
  { q: "When and where is the event?", a: "CropWings Agri Drone Show is scheduled for March 2025 in Hyderabad, India. The exact venue will be announced soon." },
  { q: "Who can attend the event?", a: "The event is open to drone manufacturers, agricultural enterprises, licensed pilots, investors, startups, government bodies, researchers, and anyone interested in agricultural drone technology." },
  { q: "Is there a cost to attend?", a: "Visitor passes are free. Exhibitor stalls start at ₹50,000. Drone pilot training workshops are ₹999. Sponsorship packages are custom-priced." },
  { q: "Will there be live drone demonstrations?", a: "Yes! We have a dedicated 5-acre live demonstration field where you can watch agricultural drones in action, including spraying, mapping, and survey operations." },
  { q: "How can I become a sponsor or exhibitor?", a: "Contact us at events@cropwings.com or fill out the registration form on this website. Our team will get back to you within 24 hours." },
];

export function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionLabel>FAQ</SectionLabel>
        <SectionTitle>Common Questions</SectionTitle>

        <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <motion.div
                style={{
                  background: T.glass, backdropFilter: "blur(16px)",
                  border: `1px solid ${open === i ? T.green + "33" : T.glassBorder}`,
                  borderRadius: 16, overflow: "hidden",
                  transition: "border-color 0.3s",
                  boxShadow: open === i ? `0 0 20px ${T.green}11` : "none",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%", padding: "1.2rem 1.5rem", background: "none", border: "none",
                    cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontFamily: font.body, fontSize: "0.95rem", fontWeight: 600, color: T.text }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    style={{ color: T.green, fontSize: "1.3rem", fontWeight: 300, flexShrink: 0, marginLeft: "1rem" }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{
                        padding: "0 1.5rem 1.2rem",
                        fontFamily: font.body, fontSize: "0.85rem", color: T.textDim, lineHeight: 1.7,
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
