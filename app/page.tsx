import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParallaxWrapper from "@/components/parallax-wrapper"
import ParallaxBackground from "@/components/parallax-background"

export default function Home() {
  return (
    <ParallaxWrapper>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <ParallaxBackground />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </ParallaxWrapper>
  )
}
