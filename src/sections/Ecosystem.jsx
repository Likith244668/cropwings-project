import { T, font } from "../config/tokens";
import { ScrollReveal } from "../components/effects/ScrollReveal";
import { motion } from "framer-motion";

/* ────── Minimal Line Icons ────── */
const Icon = ({ children }) => (
  <svg
    width="26" height="26" viewBox="0 0 28 28"
    fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
  >
    {children}
  </svg>
);

const icons = {
  drone: (
    <Icon>
      <circle cx="6" cy="6" r="3.5" opacity="0.45" />
      <circle cx="22" cy="6" r="3.5" opacity="0.45" />
      <circle cx="6" cy="22" r="3.5" opacity="0.45" />
      <circle cx="22" cy="22" r="3.5" opacity="0.45" />
      <line x1="9" y1="9" x2="19" y2="19" />
      <line x1="19" y1="9" x2="9" y2="19" />
      <circle cx="14" cy="14" r="2.5" fill="currentColor" opacity="0.15" />
    </Icon>
  ),
  pilot: (
    <Icon>
      <circle cx="14" cy="10" r="4.5" />
      <path d="M5.5 26c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5" />
      <path d="M9 8.5l5-3.5 5 3.5" />
    </Icon>
  ),
  govt: (
    <Icon>
      <line x1="3" y1="25" x2="25" y2="25" />
      <line x1="6" y1="25" x2="6" y2="14" />
      <line x1="12" y1="25" x2="12" y2="14" />
      <line x1="16" y1="25" x2="16" y2="14" />
      <line x1="22" y1="25" x2="22" y2="14" />
      <line x1="3" y1="14" x2="25" y2="14" />
      <path d="M3 14L14 5L25 14" />
    </Icon>
  ),
  startup: (
    <Icon>
      <path d="M14 3c0 0 7 3.5 7 13.5L17.5 20h-7L7 16.5C7 6.5 14 3 14 3z" />
      <circle cx="14" cy="13" r="2" fill="currentColor" opacity="0.15" />
      <line x1="10.5" y1="20" x2="8.5" y2="24" />
      <line x1="17.5" y1="20" x2="19.5" y2="24" />
      <line x1="14" y1="20" x2="14" y2="24" />
    </Icon>
  ),
  fpo: (
    <Icon>
      <path d="M14 4v18" />
      <path d="M14 8c-3.5-1.5-7 0.5-7 3.5s3.5 3 7 1.5" />
      <path d="M14 14c3.5-1.5 7 0.5 7 3.5s-3.5 3-7 1.5" />
      <line x1="9" y1="25" x2="19" y2="25" />
    </Icon>
  ),
  investor: (
    <Icon>
      <polyline points="3,22 9,15 14,18 20,9 25,5" />
      <polyline points="20,5 25,5 25,10" />
      <line x1="3" y1="25" x2="25" y2="25" />
    </Icon>
  ),
  enterprise: (
    <Icon>
      <rect x="6" y="3" width="16" height="22" rx="1" />
      <rect x="9.5" y="7" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.12" />
      <rect x="16" y="7" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.12" />
      <rect x="9.5" y="13" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.12" />
      <rect x="16" y="13" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.12" />
      <path d="M12 25v-4.5h4V25" />
    </Icon>
  ),
  research: (
    <Icon>
      <path d="M11 3v9.5l-4.5 7V22h15v-2.5L17 12V3" />
      <line x1="9" y1="3" x2="19" y2="3" />
      <circle cx="12" cy="18.5" r="1" fill="currentColor" opacity="0.15" />
      <circle cx="16.5" cy="17" r="1.5" fill="currentColor" opacity="0.15" />
    </Icon>
  ),
};

/* ────── Data ────── */
const actors = [
  { key: "drone",      label: "Drone OEMs",         desc: "Leading manufacturers shaping aerial agritech" },
  { key: "pilot",      label: "Licensed Pilots",     desc: "Certified operators driving precision agriculture" },
  { key: "govt",       label: "Government Bodies",   desc: "Policy makers & regulatory authorities" },
  { key: "startup",    label: "Agri Startups",       desc: "Innovators disrupting the agri value chain" },
  { key: "fpo",        label: "FPOs & Cooperatives", desc: "Farmer collectives scaling modern practices" },
  { key: "investor",   label: "Investors & VCs",     desc: "Capital partners fueling agritech growth" },
  { key: "enterprise", label: "Agri Enterprises",    desc: "Industry leaders in crop science & inputs" },
  { key: "research",   label: "Research Institutes",  desc: "Academic & R&D pioneers in agriculture" },
];

const stats = [
  { value: "8",      label: "Verticals" },
  { value: "200+",   label: "Companies" },
  { value: "5,000+", label: "Attendees" },
];

/* ────── Card ────── */
function ActorCard({ actor, icon, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      whileHover={{ y: -6, borderColor: T.green + "30" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        background: T.bgCard,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${T.glassBorder}`,
        borderTop: `2px solid ${T.green}20`,
        borderRadius: 16,
        padding: "clamp(1.4rem, 2.5vw, 2rem)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Faded editorial number */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 6,
          right: 14,
          fontFamily: font.display,
          fontSize: "2.8rem",
          fontWeight: 800,
          color: T.green,
          opacity: 0.04,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {num}
      </span>

      {/* Icon container */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: `${T.green}0a`,
          border: `1px solid ${T.green}12`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.1rem",
          color: T.green,
        }}
      >
        {icon}
      </div>

      {/* Label */}
      <h3
        style={{
          fontFamily: font.body,
          fontSize: "0.95rem",
          fontWeight: 600,
          color: T.text,
          margin: "0 0 0.35rem",
          letterSpacing: "-0.01em",
        }}
      >
        {actor.label}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: font.body,
          fontSize: "0.78rem",
          color: T.textDim,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {actor.desc}
      </p>
    </motion.div>
  );
}

/* ────── Section ────── */
export function Ecosystem() {
  return (
    <section
      style={{
        padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 4vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "60%",
          background: `radial-gradient(ellipse at center, ${T.green}06 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ── Centered Header ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <ScrollReveal>
            <div
              style={{
                fontFamily: font.mono,
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: T.green,
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <span style={{ width: 32, height: 1, background: T.green, opacity: 0.5, display: "inline-block" }} />
              Ecosystem
              <span style={{ width: 32, height: 1, background: T.green, opacity: 0.5, display: "inline-block" }} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              style={{
                fontFamily: font.display,
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: T.text,
                letterSpacing: "-0.03em",
                margin: "0 0 1.2rem",
              }}
            >
              Who Will Be There
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p
              style={{
                fontFamily: font.body,
                fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
                color: T.textDim,
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              The complete agri-drone value chain — united under one roof
              for the first time.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Stats Bar ── */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              flexWrap: "wrap",
              gap: "0.5rem 0",
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ textAlign: "center", padding: "0 clamp(1.5rem, 3vw, 3rem)" }}>
                  <div
                    style={{
                      fontFamily: font.display,
                      fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                      fontWeight: 800,
                      color: T.green,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: font.mono,
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      color: T.textDim,
                      textTransform: "uppercase",
                      marginTop: "0.4rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      height: 36,
                      background: `linear-gradient(to bottom, transparent, ${T.glassBorder}, transparent)`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Divider ── */}
        <ScrollReveal delay={0.25}>
          <div
            aria-hidden="true"
            style={{
              height: 1,
              background: `linear-gradient(to right, transparent, ${T.glassBorder}, transparent)`,
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          />
        </ScrollReveal>

        {/* ── Actor Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "clamp(0.75rem, 1.5vw, 1.2rem)",
          }}
        >
          {actors.map((a, i) => (
            <ScrollReveal key={a.key} delay={0.25 + i * 0.06}>
              <ActorCard actor={a} icon={icons[a.key]} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
