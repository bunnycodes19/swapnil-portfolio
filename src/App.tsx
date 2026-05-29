import { useState } from "react";

import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactPopup from "./components/ContactPopup";

function App() {
  const [contactOpen, setContactOpen] =
    useState(false);

  return (
    <main className="bg-[#0C0C0C] overflow-x-hidden">
      <HeroSection
        onContactClick={() =>
          setContactOpen(true)
        }
      />

      <MarqueeSection />

      <AboutSection
      onContactClick={() =>setContactOpen(true)
  }
/>

      <ServicesSection />

      <ExperienceSection />

      <ProjectsSection />

      <ContactPopup
        open={contactOpen}
        onClose={() =>
          setContactOpen(false)
        }
      />
    </main>
  );
}

export default App;