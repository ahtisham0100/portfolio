import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Database, Cpu, Globe, ChevronRight, Phone, GraduationCap, Award, FileText } from 'lucide-react';


const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Muhammad Ahtisham Arif",
    role: "Full Stack Developer",
    bio: "1+ years of experience in building responsive, user-centric web applications with a strong foundation in JavaScript, React.js, and Node.js. Adept at turning design mock-ups into functional UI, optimizing performance, and integrating backend services.",
    email: "ahtisham0100@gmail.com",
    phone: "+92 0301 0910933",
    github: "https://github.com/ahtisham0100",
    website: "https://ahtisham.live",
    linkedin: "#" // Add your LinkedIn if available, using placeholder for now
  },
  education: {
    degree: "Bachelors in Engineering | Software Engineering",
    institution: "National University of Sciences and Technology (NUST)",
    gpa: "3.1"
  },
  navLinks: [
    { name: "Profile", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" }
  ],
  skills: {
    frontend: ["React.js", "Tailwind CSS", "Shadcn UI", "Bootstrap", "JavaScript (ES6+)", "HTML5", "CSS3", "EJS"],
    backend: ["Node.js", "Express.js", "Firebase", "Supabase", "RESTful APIs", "RBAC"],
    database: ["MongoDB", "Redis", "MySQL", "Database Design", "Normalization"],
    tools: ["Git", "GitHub", "Postman", "XAMPP", "Notion", "Slack"]
  },
  experience: [
    {
      company: "Freelance / Remote",
      role: "Full Stack Developer",
      period: "December 2024 – Present",
      description: "Developed and deployed responsive full-stack web applications using React.js, Node.js, Express.js, and MySQL. Managed frontend and backend tasks for end-to-end delivery.",
      achievements: [
        "Delivered a restaurant e-commerce platform (95% satisfaction) with real-time menu updates & RBAC.",
        "Built an outdoor Sleeping Bags e-commerce platform with product filters, cart, and social interactions.",
        "Achieved 30% faster API response by optimizing Express routes and MySQL queries.",
        "Improved mobile usability by 40% through responsive design principles."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Restaurant E-Commerce",
      description: "A complete platform featuring real-time menu updates, Firebase authentication, and admin dashboards with role-based access control.",
      tags: ["React", "Firebase", "Cloud Functions", "Node.js"],
      link: "https://ahtisham.live",
      github: "https://github.com/ahtisham0100"
    },
    {
      id: 2,
      title: "Outdoor Gear Store",
      description: "E-commerce for sleeping bags with dynamic discount badges, wishlist, and social interaction tools (likes, reviews).",
      tags: ["Express.js", "MySQL", "Bootstrap", "REST API"],
      link: "https://ahtisham.live",
      github: "https://github.com/ahtisham0100"
    }
  ],
  certifications: [
    "HEC-Coursera Sponsored Licensee (2025)",
    "Udemy Full Stack Development Course",
    "Google Soft Skills Program",
    "Social Entrepreneurship | HP Life Foundation",
    "Meta Introduction to Web Development"
  ]
};

/**
 * ------------------------------------------------------------------
 * UI COMPONENTS
 * ------------------------------------------------------------------
 */

// 1. Navigation (High Glassmorphism & Transparent)
const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap">
        {/* Name Section */}
        <div className="w-full md:w-1/3 p-4 md:p-6 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-between md:justify-start">
          <div className="font-mono text-lg font-bold tracking-tighter text-white">
            {PORTFOLIO_DATA.personalInfo.name}
          </div>
          <a href={PORTFOLIO_DATA.personalInfo.github} target="_blank" rel="noreferrer" className="md:hidden text-white">
            <Github size={20} />
          </a>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-2/3 flex items-center overflow-x-auto scrollbar-hide">
          {PORTFOLIO_DATA.navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="flex-1 min-w-[100px] text-center py-4 md:py-6 text-xs md:text-sm font-mono text-gray-400 hover:text-white hover:bg-white/10 transition-colors border-r border-white/10 last:border-r-0"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// 2. Hero Section (Architectural Layout)
const Hero = () => (
  <section id="hero" className="border-b border-white/20 bg-black">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 min-h-[600px]">
      
      {/* Left Column: Contact & Info */}
      <div className="col-span-1 border-r border-white/20 p-8 flex flex-col justify-between">
        <div className="space-y-6">
           <div className="inline-block px-3 py-1 border border-white/40 text-xs font-mono text-green-400">
             ● AVAILABLE FOR WORK
           </div>
           <div className="space-y-4 text-sm font-mono text-gray-400">
             <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>{PORTFOLIO_DATA.personalInfo.email}</span>
             </div>
             <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>{PORTFOLIO_DATA.personalInfo.phone}</span>
             </div>
             <div className="flex items-center gap-3">
                <Globe size={16} />
                <a href={PORTFOLIO_DATA.personalInfo.website} target="_blank" rel="noreferrer" className="hover:underline">
                    ahtisham.live
                </a>
             </div>
             <div className="flex items-center gap-3">
                <Github size={16} />
                <a href={PORTFOLIO_DATA.personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                    github.com/ahtisham0100
                </a>
             </div>
           </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <GraduationCap size={20} /> Education
            </h3>
            <p className="text-sm text-gray-300">{PORTFOLIO_DATA.education.degree}</p>
            <p className="text-xs text-gray-500 mt-1">{PORTFOLIO_DATA.education.institution}</p>
            <p className="text-xs text-gray-500 mt-1">CGPA: {PORTFOLIO_DATA.education.gpa}</p>
        </div>
      </div>

      {/* Right Column: Main Content */}
      <div className="col-span-1 md:col-span-2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
        {/* Background Noise Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none noise-bg"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight relative z-10 font-display">
          FULL STACK <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
            DEVELOPER
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed relative z-10 font-light border-l-2 border-white/30 pl-6">
          {PORTFOLIO_DATA.personalInfo.bio}
        </p>

        <div className="mt-12 flex flex-wrap gap-4 relative z-10">
          <a href="#contact" className="px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors">
            CONTACT ME
          </a>
          <a href={PORTFOLIO_DATA.personalInfo.github} target="_blank" rel="noreferrer" className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors">
            GITHUB
          </a>
        </div>
      </div>
    </div>
  </section>
);

// 3. Experience Section (Timeline Grid)
const Experience = () => (
  <section id="experience" className="border-b border-white/20 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4">
        {/* Header */}
        <div className="md:col-span-1 p-8 border-b md:border-b-0 md:border-r border-white/20 bg-neutral-950">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <FileText className="text-white" /> Experience
          </h2>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div key={index} className="p-8 md:p-12 hover:bg-white/5 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 border border-white/20 text-sm font-mono text-gray-400 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 w-1 h-1 bg-white rounded-full shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// 4. Projects Section (Grid Cards)
const Projects = () => (
  <section id="projects" className="border-b border-white/20 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4">
        {/* Header */}
        <div className="md:col-span-1 p-8 border-b md:border-b-0 md:border-r border-white/20 bg-neutral-950">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Code2 className="text-white" /> Projects
          </h2>
        </div>

        {/* Content */}
        <div className="md:col-span-3 grid md:grid-cols-2">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group p-8 border-b border-white/20 ${index % 2 === 0 ? 'md:border-r' : ''} hover:bg-white/5 transition-colors relative`}
            >
               <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="text-white" size={20} />
               </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-6 min-h-[80px]">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-white border border-white/30 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                 <a href={project.github} className="text-sm font-bold text-white hover:underline flex items-center gap-2">
                    GITHUB <ChevronRight size={14} />
                 </a>
                 {/* <a href={project.link} className="text-sm font-bold text-white hover:underline flex items-center gap-2">
                    DEMO <ChevronRight size={14} />
                 </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// 5. Skills Section (Dense Grid)
const Skills = () => (
  <section id="skills" className="border-b border-white/20 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4">
         {/* Header */}
        <div className="md:col-span-1 p-8 border-b md:border-b-0 md:border-r border-white/20 bg-neutral-950">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Cpu className="text-white" /> Skills
          </h2>
        </div>

        {/* Content */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Frontend */}
            <div className="border-b sm:border-r border-white/20 p-8">
                <h3 className="text-sm font-mono text-gray-500 mb-4">FRONTEND</h3>
                <ul className="space-y-2">
                    {PORTFOLIO_DATA.skills.frontend.map(skill => (
                        <li key={skill} className="text-white font-medium flex items-center gap-2">
                            <div className="w-1 h-1 bg-white"></div> {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Backend */}
            <div className="border-b md:border-r border-white/20 p-8">
                <h3 className="text-sm font-mono text-gray-500 mb-4">BACKEND</h3>
                <ul className="space-y-2">
                    {PORTFOLIO_DATA.skills.backend.map(skill => (
                        <li key={skill} className="text-white font-medium flex items-center gap-2">
                            <div className="w-1 h-1 bg-white"></div> {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Database & Tools */}
            <div className="border-b border-white/20 p-8">
                <h3 className="text-sm font-mono text-gray-500 mb-4">DATA & TOOLS</h3>
                <ul className="space-y-2">
                    {[...PORTFOLIO_DATA.skills.database, ...PORTFOLIO_DATA.skills.tools].map(skill => (
                        <li key={skill} className="text-white font-medium flex items-center gap-2">
                            <div className="w-1 h-1 bg-white"></div> {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  </section>
);

// 6. Certifications
const Certifications = () => (
  <section id="certifications" className="bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4">
        <div className="md:col-span-1 p-8 border-r border-white/20 bg-neutral-950">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Award className="text-white" /> Licenses
          </h2>
        </div>
        <div className="md:col-span-3 p-8 md:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
                {PORTFOLIO_DATA.certifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border border-white/10 hover:border-white/40 transition-colors">
                        <Award className="shrink-0 text-gray-400" size={24} />
                        <span className="text-white">{cert}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  </section>
);

// 7. Footer
const Footer = () => (
  <footer id="contact" className="relative overflow-hidden border-t border-white/20 bg-black py-12">
      {/* Background Noise Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none noise-bg"></div>

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">{PORTFOLIO_DATA.personalInfo.name}</h3>

          </div>
          <div className="flex gap-6">
              <a href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
              </a>
              <a href={PORTFOLIO_DATA.personalInfo.github} className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
              </a>
              <a href={PORTFOLIO_DATA.personalInfo.website} className="text-gray-400 hover:text-white transition-colors">
                  <Globe size={24} />
              </a>
          </div>
      </div>
  </footer>
);

// Main App
const App = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
      {/* Google Fonts Import & Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;700&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        
        /* White Granules / Starry Background Effect */
        .noise-bg {
            background-image: radial-gradient(white 1px, transparent 1px);
            background-size: 40px 40px;
        }
        
        /* Hiding scrollbar for specific elements (nav) */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* --- Global Scrollbar Hiding --- */
        /* Chrome, Safari, Opera */
        ::-webkit-scrollbar {
            display: none;
        }
        /* Firefox, IE, Edge */
        html {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      <div className="border-x border-white/20 max-w-7xl mx-auto">
          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
          </main>
          <Footer />
      </div>
    </div>
  );
};

export default App;
