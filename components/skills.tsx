"use client";

import { useState, useEffect } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Code, Database, Server, Palette, Wrench, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [animatedBars, setAnimatedBars] = useState<Record<string, boolean>>({});

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      color: "from-primary to-accent",
      skills: [
        { name: "React.js", level: 90, experience: "1+ years", description: "Building modern SPAs" },
        { name: "JavaScript (ES6+)", level: 95, experience: "2+ years", description: "Expert in modern JS" },
        { name: "HTML/CSS", level: 90, experience: "2+ years", description: "Semantic & responsive design" },
        { name: "Tailwind CSS", level: 85, experience: "2+ years", description: "Utility-first styling" },
        { name: "shadcn", level: 85, experience: "1+ years", description: "Utility-first styling" },
        { name: "Bootstrap", level: 80, experience: "2+ years", description: "Responsive frameworks" },
        { name: "lucide", level: 80, experience: "1+ years", description: "Icon library" },

      ]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-6 h-6" />,
      color: "from-accent to-primary",
      skills: [
        { name: "Node.js", level: 85, experience: "1+ years", description: "Server-side JavaScript" },
        { name: "Express.js", level: 85, experience: "1+ years", description: "RESTful API development" },
        { name: "python", level: 80, experience: "1+ years", description: "Backend Development" },
        { name: "firebase", level: 80, experience: "1+ years", description: "Serverless backend" },
         { name: "Supabase", level: 80, experience: "1+ years", description: "Auth and RLS" },
        { name: "RESTful APIs", level: 85, experience: "2+ years", description: "API design & integration" },
        { name: "GraphQL", level: 75, experience: "1+ years", description: "Flexible APIs" },
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      color: "from-primary/80 to-accent/80", 
      skills: [
        { name: "MySQL", level: 80, experience: "2+ years", description: "Relational database design" },
        { name: "MongoDB", level: 85, experience: "1+ years", description: "NoSQL database management" },
        { name: "Supabase", level: 80, experience: "1+ years", description: "Open-source Firebase alternative" },
        { name: "Firestore", level: 80, experience: "1+ years", description: "Serverless database" },
        { name: "Redis", level: 75, experience: "1+ years", description: "In-memory data structure store" },
        { name: "Database Design", level: 75, experience: "2+ years", description: "Schema optimization" },
      ]
    }
  ];

  const tools = [
    { name: "Git", category: "Version Control", icon: "🔧" },
    { name: "GitHub", category: "Collaboration", icon: "🐙" },
    { name: "Notion", category: "Documentation", icon: "📝" },
    { name: "Postman", category: "API Testing", icon: "🚀" },
    { name: "XAMPP", category: "Development", icon: "⚡" },
    { name: "Slack", category: "Communication", icon: "💬" },
    { name: "Bootstrap", category: "UI Framework", icon: "🎨" },
    { name: "Figma", category: "Design", icon: "🎭" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setAnimatedBars(prev => ({ ...prev, [skillName]: true }));
              }, Math.random() * 500);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('[data-skill]');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({ skill, isAnimated }: { skill: any, isAnimated: boolean }) => {
    const circumference = 2 * Math.PI * 40;
    const strokeDasharray = `${isAnimated ? (skill.level / 100) * circumference : 0} ${circumference}`;

    return (
      <div className="relative w-24 h-24 mx-auto">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="transparent"
            className="opacity-20"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="text-primary" stopColor="currentColor" />
              <stop offset="100%" className="text-accent" stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-foreground">{skill.level}%</span>
        </div>
      </div>
    );
  };

  return (
    <ParallaxProvider>
      <section
        id="skills"
        className="min-h-screen py-20 bg-background relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 -left-8 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 -right-8 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Parallax translateY={[-20, 20]} opacity={[0.8, 1]} className="text-center mb-16">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Skills & Expertise
                </h2>
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-glow animate-glow-pulse"></div>
            </div>
          </Parallax>

          {/* Skills Categories */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <Parallax 
                  key={categoryIndex}
                  translateY={[20, -20]} 
                  opacity={[0.9, 1]}
                  className="h-full"
                >
                  <Card className="h-full bg-gradient-card backdrop-blur-glass border border-glass-border hover:border-primary/30 transition-all duration-500 hover:shadow-intense group">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-3 mb-6 p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      </div>
                      
                      <div className="space-y-6">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            data-skill={`${category.title}-${skill.name}`}
                            className="group/skill cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-foreground group-hover/skill:text-primary transition-colors">
                                    {skill.name}
                                  </span>
                                  <Star className="w-3 h-3 text-accent" />
                                </div>
                                <div className="text-xs text-foreground/70 mb-2">
                                  {skill.experience} • {skill.description}
                                </div>
                              </div>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="relative">
                              <div className="w-full h-2 bg-glass rounded-full overflow-hidden backdrop-blur-glass">
                                <div
                                  className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-glow`}
                                  style={{ 
                                    width: animatedBars[`${category.title}-${skill.name}`] ? `${skill.level}%` : '0%',
                                    filter: hoveredSkill === `${category.title}-${skill.name}` ? 'brightness(1.2)' : 'brightness(1)'
                                  }}
                                ></div>
                              </div>
                              <div className="absolute right-0 -top-1 text-xs font-bold text-primary">
                                {skill.level}%
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Parallax>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <Parallax translateY={[15, -15]} opacity={[0.9, 1]} className="max-w-6xl mx-auto">
            <Card className="bg-gradient-card backdrop-blur-glass border border-glass-border shadow-intense">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Wrench className="w-6 h-6 text-primary" />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Tools & Technologies
                    </h3>
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group relative p-4 bg-glass backdrop-blur-glass border border-glass-border rounded-xl hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tool.icon}
                        </div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {tool.name}
                        </div>
                        <Badge 
                          variant="outline" 
                          className="mt-2 text-xs bg-glass-accent border-primary/20 text-primary/80"
                        >
                          {tool.category}
                        </Badge>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Skills;