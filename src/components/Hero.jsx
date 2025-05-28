import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import { Parallax } from "react-scroll-parallax"

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-blue-50"}`}
      ></div>

      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <Parallax
            key={i}
            translateY={[`${Math.random() * 100}px`, `${Math.random() * -100}px`]}
            opacity={[0.7, 1]}
            className="absolute"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              borderRadius: "50%",
              background: darkMode ? "rgba(37, 99, 235, 0.1)" : "rgba(191, 219, 254, 0.3)",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 text-center">
        <Parallax translateY={[-20, 20]} className="mb-6">
          <img
            src="pf.jpg"
            alt="Muhammad Ahtisham Arif"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </Parallax>

        <Parallax translateY={[-15, 15]} opacity={[0.8, 1]} className="mb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Muhammad Ahtisham Arif</h1>
        </Parallax>

        <div className="h-12 mb-6">
          <TypeAnimation
            sequence={["Software Engineering Student", 2000, "Full Stack Developer", 2000, "NUST (MCS) Student", 2000]}
            wrapper="h2"
            speed={50}
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium"
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>

        <Parallax translateY={[10, -10]} opacity={[0.8, 1]} className="mb-8">
          <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Passionate about building interactive, scalable, and responsive web applications with expertise in React,
            Node.js, and full-stack development.
          </p>
        </Parallax>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://github.com/ahtisham0100"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ahtisham0100/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="mailto:ahtisham0100@gmail.com"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        <Parallax translateY={[5, -5]} className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
          <a href="#projects" className="btn-outline">
            View Projects
          </a>
        </Parallax>
      </div>
    </section>
  )
}

export default Hero
