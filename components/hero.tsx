"use client"

import { useState, useEffect } from "react"
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Parallax } from "react-scroll-parallax"
import ResumeButton from "./resume-button"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
const headline =  ["Full Stack Developer", "Software Engineer", "Web Developer", "Tech Enthusiast"]
  useEffect(() => {
 let textIndex = 0
  let index = 0
      let fullText = headline[textIndex];
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
       
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        setTimeout(() => {
            textIndex = (textIndex + 1); // Cycle through the headlines
       if(textIndex >= headline.length) {
          textIndex = 0; // Reset to the first headline
        }
       fullText = headline[textIndex];
        index = 0; // Reset index for the next headline
        setTypedText(""); // Clear the text before typing the next headline
          } , 2000) // Pause before starting the next headline
     
      }
    }, 100)

    return () => clearInterval(typingInterval)

}, [])



  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <Parallax translateY={[-20, 20]} opacity={[0.8, 1]}>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Muhammad Ahtisham Arif
            </h1>
          </Parallax>

          <Parallax translateY={[-15, 15]} opacity={[0.7, 1]}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-8">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              A passionate full-stack developer with expertise in building interactive, scalable, and responsive web
              applications.
            </p>
          </Parallax>

          <Parallax translateY={[-10, 10]} opacity={[0.9, 1]}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <Mail size={16} />
                </a>
              </Button>
              <ResumeButton resumeUrl="/resume.html" />
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/ahtisham0100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ahtisham0100/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ahtisham0100@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </Parallax>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Parallax translateY={[-30, 30]} scale={[0.9, 1.1]} rotate={[-5, 5]}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-500 shadow-xl">
              <img
                src="/pf.jpg?height=320&width=320"
                alt="Muhammad Ahtisham Arif"
                className="w-full h-full object-cover"
              />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  )
}

export default Hero
