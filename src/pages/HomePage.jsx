import React from "react";

import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import ServicesSection from "../components/ServicesSection";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
