import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { T, font } from "../config/tokens";
import { SectionLabel } from "../components/atoms/SectionLabel";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { ScrollReveal } from "../components/effects/ScrollReveal";

const tiers = [
  {
    label: "Premium",
    title: "Title Sponsor",
    color: T.gold,
    desc: "Maximum brand visibility across all event touchpoints",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    label: "Innovation",
    title: "Technology Partner",
    color: T.green,
    desc: "Showcase your technology solutions & innovations",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    label: "Education",
    title: "Knowledge Partner",
    color: "#b0b0b0",
    desc: "Shape the conversation around agri-drone education",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    label: "Outreach",
    title: "Media Partner",
    color: "#ff8844",
    desc: "Amplify your reach through event media coverage",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    label: "Governance",
    title: "Government Partner",
    color: "#6699ff",
    desc: "Drive policy & regulatory framework development",
    colSpan: 2,
    rowSpan: 1,
  },
];

export function Sponsorship() {
  return (
    <section style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 4rem)" }}>
      <style>{`
        .sponsor-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 200px;
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .sponsor-bento-grid {
            grid-template-columns: 1fr;
          }
          .sponsor-bento-grid > * {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
        @keyframes sponsor-ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(4); opacity: 0; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Sponsorship</SectionLabel>
        <SectionTitle>Partner With Us</SectionTitle>
        <p
          style={{
            fontFamily: font.body,
            color: T.textDim,
            maxWidth: 600,
            marginTop: "1rem",
            marginBottom: "3rem",
            lineHeight: 1.7,
          }}
        >
          Align your brand with India's largest agricultural drone ecosystem
          event.
        </p>

        <div className="sponsor-bento-grid">
          {tiers.map((tier, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              style={{
                gridColumn: `span ${tier.colSpan}`,
                gridRow: `span ${tier.rowSpan}`,
              }}
            >
              <SponsorBentoCard {...tier} />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={tiers.length * 0.1}>
            <CTACard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function SponsorBentoCard({ label, title, color, desc }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState([]);

  const handleMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMouse({ x, y });

      if (cardRef.current) {
        const tiltX = (y / 100 - 0.5) * 8;
        const tiltY = (x / 100 - 0.5) * -8;
        gsap.to(cardRef.current, {
          rotateX: tiltX,
          rotateY: tiltY,
          duration: 0.4,
          ease: "power2.out",
          transformPerspective: 800,
        });
      }
    },
    []
  );

  const handleLeave = useCallback(() => {
    setHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    }
  }, []);

  const handleClick = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(
        () => setRipples((prev) => prev.filter((r) => r.id !== id)),
        800
      );
    },
    []
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      style={{
        position: "relative",
        borderRadius: 20,
        height: "100%",
        cursor: "pointer",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* Border glow — follows cursor */}
      <div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius: 21,
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, ${color}55 0%, transparent 50%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* Card body */}
      <div
        style={{
          position: "absolute",
          inset: 1,
          borderRadius: 19,
          background: T.glass,
          backdropFilter: "blur(20px)",
          overflow: "hidden",
        }}
      >
        {/* Spotlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, ${color}15 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "1.5rem",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top — category label */}
          <span
            style={{
              fontFamily: font.mono,
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: `${color}aa`,
            }}
          >
            {label}
          </span>

          {/* Bottom — title + description */}
          <div>
            <h3
              style={{
                fontFamily: font.display,
                fontSize: "1.15rem",
                fontWeight: 700,
                color: T.text,
                margin: 0,
                marginBottom: "0.4rem",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: font.body,
                fontSize: "0.8rem",
                color: T.textDim,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {desc}
            </p>
          </div>
        </div>

        {/* Click ripples */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: 40,
              height: 40,
              marginLeft: -20,
              marginTop: -20,
              borderRadius: "50%",
              background: `${color}33`,
              animation: "sponsor-ripple 0.8s ease-out forwards",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />
        ))}
      </div>

      {/* Static border — always visible */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 20,
          border: `1px solid ${T.glassBorder}`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function CTACard() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      style={{
        position: "relative",
        borderRadius: 20,
        height: "100%",
        background: `linear-gradient(135deg, ${T.green}12, ${T.green}04)`,
        border: `1px solid ${hovered ? T.green + "44" : T.glassBorder}`,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "1.5rem",
        transition: "border-color 0.3s ease",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: `${T.green}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "0.75rem",
          border: `1px solid ${T.green}33`,
        }}
      >
        <span
          style={{
            fontSize: "1.4rem",
            color: T.green,
            lineHeight: 1,
          }}
        >
          +
        </span>
      </motion.div>
      <h3
        style={{
          fontFamily: font.display,
          fontSize: "1rem",
          fontWeight: 700,
          color: T.text,
          margin: 0,
          marginBottom: "0.3rem",
        }}
      >
        Become a Sponsor
      </h3>
      <p
        style={{
          fontFamily: font.body,
          fontSize: "0.75rem",
          color: T.textDim,
          margin: 0,
          lineHeight: 1.4,
        }}
      >
        Join the ecosystem
      </p>
    </motion.div>
  );
}
