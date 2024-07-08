import React from "react";

import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";

function HomePage() {
  return (
    <div id="hero">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default HomePage;
