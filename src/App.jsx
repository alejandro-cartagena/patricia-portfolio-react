import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
      <SkillsSection />
    </>
  )
}

export default App
