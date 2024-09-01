import React from "react";

import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import PhotoGallerySection from "../components/PhotoGallerySection";
import CallToAction from "../components/CallToAction";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
// import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";

// React Animate On Scroll
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

function HomePage() {
  return (
    <div>
      <HeroSection />

      {/* SKILLS */}
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={360}
        animateOnce={true}
      >
        <SkillsSection />
      </ScrollAnimation>

      {/* SERVICES */}
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={360}
        animateOnce={true}
      >
        <ServicesSection />
      </ScrollAnimation>

      {/* PHOTO GALLERY */}
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={360}
        animateOnce={true}
      >
        <PhotoGallerySection />
      </ScrollAnimation>

      {/* CALL TO ACTION */}
      <CallToAction />

      {/* ABOUT */}
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={280}
        animateOnce={true}
      >
        <AboutSection />
      </ScrollAnimation>

      {/* PROJECTS */}
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={360}
        animateOnce={true}
      >
        <ProjectsSection />
      </ScrollAnimation>
      {/* <ReviewsSection /> */}

      {/* CONTACT */}
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={360}
        animateOnce={true}
      >
        <ContactSection />
      </ScrollAnimation>
    </div>
  );
}

export default HomePage;
