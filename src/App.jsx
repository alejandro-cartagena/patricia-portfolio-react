import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}

export default App;
