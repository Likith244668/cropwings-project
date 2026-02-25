import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, font } from "../../config/tokens";
import { GradientText } from "../atoms/GradientText";

const links = ["About", "Highlights", "Gallery", "Exhibit", "Schedule"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].getBoundingClientRect().top <= 200) {
          setActive(links[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(1.5rem, 4vw, 4rem)",
        height: 70, display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? `${T.bg}ee` : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.glassBorder}` : "none",
        transition: "background 0.3s, backdrop-filter 0.3s",
      }}
    >
      <div style={{ fontFamily: font.display, fontWeight: 800, fontSize: "1.3rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ color: T.green, fontSize: "1.5rem" }}>●</span>
        <GradientText style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: font.display }}>CropWings</GradientText>
      </div>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-desktop">
        {links.map((l) => (
          <motion.button
            key={l}
            onClick={() => scrollTo(l)}
            whileHover={{ y: -2 }}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: font.body, fontSize: "0.85rem", fontWeight: 500,
              color: active === l ? T.green : T.textDim,
              letterSpacing: "0.02em",
              transition: "color 0.3s",
            }}
          >
            {l}
          </motion.button>
        ))}
      </div>

      {/* Mobile toggle */}
      <motion.button
        className="nav-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
      >
        <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} style={{ height: 2, background: T.green, borderRadius: 2, display: "block" }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ height: 2, background: T.green, borderRadius: 2, display: "block" }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} style={{ height: 2, background: T.green, borderRadius: 2, display: "block" }} />
        </div>
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute", top: 70, left: 0, right: 0,
              background: `${T.bg}f5`, backdropFilter: "blur(30px)",
              padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem",
              borderBottom: `1px solid ${T.glassBorder}`,
            }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: font.body, fontSize: "1.1rem", fontWeight: 500,
                  color: active === l ? T.green : T.text, textAlign: "left",
                }}
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
