import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import profileImage from "@/assets/profile.jpg";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(142 76% 36% / 0.3), transparent 50%)`
        }}
      />

      {/* Floating glass bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute glass-bubble backdrop-blur-sm border border-glass-border rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              background: "linear-gradient(135deg, hsl(var(--glass)), hsl(var(--glass-dark)))",
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Terminal container */}
        <div className="glass-dark rounded-2xl p-8 shadow-glass border border-glass-border">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-muted-foreground text-sm ml-4 font-mono">
              terminal@portfolio:~$
            </span>
          </div>

          {/* Profile section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            {/* Profile image */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                // src={profileImage}
                alt="Muhammad Ahtisham Arif"
                className="w-40 h-40 rounded-full object-cover border-4 border-terminal-green shadow-glow"
              />
            </motion.div>

            {/* Terminal content */}
            <div className="flex-1 text-left">
              <div className="text-terminal-text font-mono text-lg lg:text-xl mb-4">
                <Typewriter
                  options={{
                    strings: [
                      "$ whoami",
                      "Muhammad Ahtisham Arif",
                      "$ cat role.txt",
                      "Software Engineer | Full Stack Developer",
                      "$ ls skills/",
                      "React.js  Node.js  TypeScript  Python",
                      "$ echo 'Welcome to my portfolio!'",
                      "Building the future, one line at a time...",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </div>

              <p className="text-foreground/80 text-base lg:text-lg mb-6 leading-relaxed">
                Passionate about building interactive, scalable, and responsive web applications 
                with expertise in modern technologies and full-stack development.
              </p>

              {/* Social links */}
              <div className="flex gap-4 mb-6">
                {[
                  { icon: FaGithub, href: "https://github.com/ahtisham0100", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-ahtisham0100/", label: "LinkedIn" },
                  { icon: FaEnvelope, href: "mailto:ahtisham0100@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                    className="p-3 rounded-full glass border border-glass-border glow-on-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="text-xl text-terminal-text" />
                  </motion.a>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-terminal-green text-background font-semibold font-mono transition-all duration-300 hover:bg-terminal-green-bright hover:shadow-glow text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 rounded-lg border border-terminal-green text-terminal-green font-semibold font-mono transition-all duration-300 hover:bg-terminal-green hover:text-background glow-on-hover text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </div>
            </div>
          </div>

          {/* Terminal prompt */}
          <div className="flex items-center gap-2 text-terminal-text font-mono text-sm">
            <span className="text-terminal-green">$</span>
            <span>Ready to collaborate</span>
            <span className="terminal-cursor text-terminal-green">|</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

