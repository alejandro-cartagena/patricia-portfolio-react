import React from "react";

import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import CallToAction from "../components/CallToAction";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <CallToAction />
      <AboutSection />
      <ProjectsSection />
      {/* <ReviewsSection /> */}
      <ContactSection />
    </div>
  );
}

export default HomePage;
