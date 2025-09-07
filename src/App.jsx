"use client"

import { useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// Add this import
import ParallaxBackground from "./components/ParallaxBackground"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ParallaxProvider>
      <div
        className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}
      >
        <ParallaxBackground darkMode={darkMode} />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </ParallaxProvider>
  )
}

export default App
