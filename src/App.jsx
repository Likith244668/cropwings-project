import { ParticleField } from "./components/effects/ParticleField";
import { CursorRibbon } from "./components/effects/CursorRibbon";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Divider } from "./components/atoms/Divider";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Highlights } from "./sections/Highlights";
import { Ecosystem } from "./sections/Ecosystem";
import { BrandMarquee } from "./sections/BrandMarquee";
import { Exhibit } from "./sections/Exhibit";
import { Sponsorship } from "./sections/Sponsorship";
import { Schedule } from "./sections/Schedule";
import { AboutCropWings } from "./sections/AboutCropWings";
import { RythuVedika } from "./sections/RythuVedika";
import { Gallery } from "./sections/Gallery";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { CTABanner } from "./sections/CTABanner";

export default function CropWingsApp() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ParticleField />
      <CursorRibbon />
      <Nav />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Highlights />
        <Divider />
        <Ecosystem />
        <BrandMarquee />
        <Divider />
        <Exhibit />
        <Divider />
        <Sponsorship />
        <Divider />
        <Schedule />
        <Divider />
        <AboutCropWings />
        <Divider />
        <RythuVedika />
        <Divider />
        <Gallery />
        <Divider />
        <FAQ />
        <Divider />
        <CTABanner />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
