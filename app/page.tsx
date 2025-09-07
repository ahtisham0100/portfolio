"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Download,
  Code,
  Database,
  Server,
  Zap,
  Globe,
  Award,
  Calendar,
  User,
  Briefcase,
} from "lucide-react"

export default function CyberpunkPortfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Shadcn UI", "Bootstrap", "EJS"],
    backend: ["Node.js", "Express.js", "Firebase", "Supabase", "RESTful APIs", "RBAC", "Backend Optimization"],
    database: ["MongoDB", "Redis", "MySQL", "Database Design", "Normalization"],
    tools: ["Git", "GitHub", "Postman", "XAMPP", "Notion", "Notion Calendar", "Slack"],
  }

  const projects = [
    {
      title: "Restaurant E-commerce Platform",
      description:
        "Full-stack platform with real-time menu updates, Firebase authentication, and admin dashboards with role-based access control. Supports 50+ concurrent users using Cloud functions.",
      tech: ["React.js", "Node.js", "Firebase", "MySQL", "Cloud Functions"],
      achievement: "95% client satisfaction",
      icon: <Globe className="w-6 h-6" />,
      metrics: "50+ concurrent users",
    },
    {
      title: "Outdoor Sleeping Bags E-commerce",
      description:
        "E-commerce platform with product filters, dynamic discount badges, cart, wishlist, and social interaction tools (likes, reviews, comments). Optimized Express routes and MySQL queries.",
      tech: ["Express.js", "MySQL", "Bootstrap", "Node.js"],
      achievement: "30% faster API response",
      icon: <Server className="w-6 h-6" />,
      metrics: "40% improved mobile usability",
    },
  ]

  const certifications = [
    "HEC-Coursera Sponsored Licensee (2025)",
    "Udemy Full Stack Development Course",
    "Google Soft Skills Program",
    "Social Entrepreneurship | HP Life Foundation",
    "Meta Introduction to Web Development",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 cyberpunk-grid opacity-20" />
      <div className="fixed inset-0 holographic opacity-30" />
      <div className="fixed inset-0 matrix-rain" />

      <div
        className="fixed w-6 h-6 bg-primary rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 opacity-80"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          boxShadow: "0 0 20px rgba(0, 212, 255, 0.8)",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-morphism border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-glow glitch" data-text="MA">
              MA
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:text-glow relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full neon-glow"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-morphism-strong rounded-3xl p-12 max-w-5xl mx-auto frost-texture floating">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow glitch" data-text="Muhammad Ahtisham Arif">
              Muhammad Ahtisham Arif
            </h1>
            <p className="text-2xl md:text-4xl text-secondary mb-8 text-glow-orange">Full-Stack Developer</p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed text-balance">
              6+ months of experience building responsive, user-centric web applications with a strong foundation in
              JavaScript, React.js, Node.js, and modern web technologies. Passionate about creating impactful digital
              experiences through clean code and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
  variant="outline"
  className="glass-morphism border-primary text-primary hover:bg-primary/10 bg-transparent text-lg px-8 py-3"
  onClick={() => (window.location.href = "mailto:ahtisham0100@gmail.com")}
>
  <Mail className="w-5 h-5 mr-2" />
  Get In Touch
</Button>
           
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism rounded-2xl p-8 frost-texture neon-glow">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary text-glow">Professional Summary</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                Experienced in building responsive, user-centric web applications with a strong foundation in modern web
                technologies. Adept at turning design mock-ups into functional UI, optimizing performance, and following
                best practices in version control and API integration.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 glass-morphism rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+92 0301 0910933</span>
                </div>
                <div className="flex items-center gap-3 p-3 glass-morphism rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>ahtisham0100@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 p-3 glass-morphism rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Pakistan</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-morphism rounded-2xl p-8 frost-texture neon-glow-purple">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-accent text-glow-purple">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 glass-morphism rounded-lg">
                    <h4 className="text-xl font-semibold text-primary">Bachelor's in Software Engineering</h4>
                    <p className="text-muted-foreground">National University of Sciences and Technology (NUST)</p>
                    <p className="text-sm text-secondary">GPA: 3.02</p>
                  </div>
                </div>
              </div>

              <div className="glass-morphism rounded-2xl p-8 frost-texture neon-glow-orange">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                  <h4 className="text-2xl font-bold text-secondary text-glow-orange">Certifications</h4>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 glass-morphism rounded-lg">
                      <div className="w-2 h-2 bg-secondary rounded-full neon-glow-orange"></div>
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow">Technical Arsenal</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-morphism border-primary/20 neon-glow hover:neon-glow-purple transition-all duration-500 floating">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Frontend</h3>
                </div>
                <div className="space-y-3">
                  {skills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 glass-morphism hover:neon-glow transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="glass-morphism border-secondary/20 neon-glow-orange hover:neon-glow transition-all duration-500 floating"
              style={{ animationDelay: "1s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-secondary">Backend</h3>
                </div>
                <div className="space-y-3">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 glass-morphism hover:neon-glow-orange transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="glass-morphism border-accent/20 neon-glow-purple hover:neon-glow-orange transition-all duration-500 floating"
              style={{ animationDelay: "2s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-accent">Database</h3>
                </div>
                <div className="space-y-3">
                  {skills.database.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 glass-morphism hover:neon-glow-purple transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="glass-morphism border-primary/20 neon-glow hover:neon-glow-purple transition-all duration-500 floating"
              style={{ animationDelay: "3s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Tools</h3>
                </div>
                <div className="space-y-3">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 glass-morphism hover:neon-glow transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow">Experience Matrix</h2>
          <div className="max-w-6xl mx-auto">
            <div className="glass-morphism-strong rounded-2xl p-8 mb-12 frost-texture neon-glow">
              <div className="flex items-center gap-4 mb-6">
                <Briefcase className="w-10 h-10 text-secondary" />
                <div>
                  <h3 className="text-3xl font-bold text-secondary text-glow-orange">Full-Stack Developer</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Remote | December 2024 – Present</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg text-pretty">
                Developed and deployed responsive full-stack web applications using React.js, Node.js, Express.js, and
                MySQL, managing both frontend and backend tasks for end-to-end delivery. Focused on performance
                optimization and user experience enhancement.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-morphism p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="glass-morphism p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Concurrent Users</div>
                </div>
                <div className="glass-morphism p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">40%</div>
                  <div className="text-sm text-muted-foreground">Mobile Improvement</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="glass-morphism border-primary/20 neon-glow hover:neon-glow-orange transition-all duration-500 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 glass-morphism rounded-lg group-hover:neon-glow transition-all duration-300">
                        {project.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-primary">{project.title}</h4>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="glass-morphism p-3 rounded-lg">
                        <p className="text-sm font-semibold text-secondary mb-1">Achievement:</p>
                        <p className="text-sm text-accent">{project.achievement}</p>
                      </div>
                      <div className="glass-morphism p-3 rounded-lg">
                        <p className="text-sm font-semibold text-secondary mb-1">Impact:</p>
                        <p className="text-sm text-accent">{project.metrics}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="glass-morphism border-primary/30 hover:neon-glow transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow">Initialize Connection</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism-strong border-primary/20 neon-glow">
              <CardContent className="p-12 text-center frost-texture">
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed text-balance">
                  Ready to collaborate on innovative projects? Let's create something amazing together. Available for
                  full-stack development opportunities and exciting challenges.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Button
                    asChild
                    className="neon-glow pulse-neon bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                  >
                    <a href="mailto:ahtisham0100@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Me
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="glass-morphism border-secondary text-secondary hover:bg-secondary/10 bg-transparent text-lg py-6"
                  >
                    <a href="https://github.com/ahtisham0100" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="glass-morphism border-accent text-accent hover:bg-accent/10 bg-transparent text-lg py-6"
                  >
                    <a href="https://ahtisham.live" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Portfolio
                    </a>
                  </Button>
                </div>
                <div className="glass-morphism p-6 rounded-xl">
                  <p className="text-muted-foreground text-sm">
                    <span className="text-primary font-semibold">Status:</span> Available for new opportunities
                    <span className="mx-4">•</span>
                    <span className="text-secondary font-semibold">Response Time:</span> Within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border glass-morphism">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg">
            © 2025 Muhammad Ahtisham Arif
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Powered by Next.js • Styled with Tailwind CSS • Enhanced with Glass Morphism
          </p>
        </div>
      </footer>
    </div>
  )
}
