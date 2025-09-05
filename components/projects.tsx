"use client"
import { ExternalLink, Github, X, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const projects = [
    {
      title: "CPU Scheduling Simulator",
      description:
        "Built a dynamic scheduling simulator to visually demonstrate CPU scheduling algorithms such as FCFS, SJF, Round Robin, and Priority Scheduling. Users can input custom processes and visualize execution in a Gantt chart.",
      techStack: ["React.js", "Tailwind CSS", "ShadCN UI", "Chart.js"],
      image: "/projects/scheduling-simulator-one.vercel.app_.png",
      githubLink: "https://github.com/ahtisham0100/scheduling-simulator",
      liveLink: "https://scheduling-simulator-one.vercel.app/",
    },
    {
      title: "Sleep Outside – E-commerce Website",
      description:
        "Achieved 9.5 rating for developing an e-commerce platform for outdoor products, with features like dynamic discounts, real-time announcements, and session-based authentication.",
      techStack: ["React", "CSS", "Bootstrap", "MySQL", "Node.js", "Express.js"],
      image: "/projects/sleepoutside.png",
      githubLink: "",
      liveLink: "",
    },
    {
      title: "Online Design Tool",
      description:
        "A web-based platform that enables visual modeling of software architecture with drag-and-drop, layering, and ER diagrams for better planning and documentation.",
      techStack: ["HTML", "CSS", "React", "Bootstrap"],
      image: "/projects/ahti-sham.rocks_.png",
      githubLink: "https://github.com/ahtisham0100/sda_cea",
      liveLink: "https://sda-cea.vercel.app/",
    },
    {
      title: "React SaaS Dashboard",
      description:
        "A fully functional SaaS dashboard with pages like Analytics, Users, Reports, and Projects. Includes data visualization, user management, and role-based access.",
      techStack: ["Shadcn", "Tailwind", "React", "Firebase"],
      image: "/projects/saas.png",
      githubLink: "",
      liveLink: "",
    },
  ];

  const handleImageError = (projectTitle: string) => {
    setImageError(prev => ({ ...prev, [projectTitle]: true }));
  };

  return (
    <ParallaxProvider>
      <section
        id="projects"
        className="min-h-screen py-20 bg-background relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Parallax translateY={[-20, 20]} opacity={[0.8, 1]} className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-glow animate-glow-pulse"></div>
            </div>
          </Parallax>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Parallax 
                key={index} 
                translateY={[15, -15]} 
                opacity={[0.9, 1]}
                className="h-full"
              >
                <Card className="group h-full bg-gradient-card backdrop-blur-glass border border-glass-border hover:border-primary/30 transition-all duration-500 hover:shadow-intense hover:scale-[1.02] overflow-hidden">
                  {/* Image Section with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    {!imageError[project.title] ? (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => handleImageError(project.title)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                        <div className="text-center">
                          <Eye className="w-12 h-12 text-primary mx-auto mb-2" />
                          <p className="text-foreground/80 font-medium">Preview Coming Soon</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Glass overlay with view button */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Dialog >
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="bg-glass hover:bg-glass-hover border-glass-border text-foreground shadow-glass backdrop-blur-glass"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="bg-background/95 backdrop-blur-xl border border-glass-border shadow-intense">
                          <DialogClose asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-4 right-4 z-50 bg-glass hover:bg-glass-hover backdrop-blur-glass"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </DialogClose>

                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                              {project.title}
                            </DialogTitle>
                          </DialogHeader>

                          <div className="mt-6">
                            <div className="relative rounded-lg overflow-hidden shadow-glass">
                              {!imageError[project.title] ? (
                                <img
                                  src={project.image || "/placeholder.svg"}
                                  alt={`${project.title} Screenshot`}
                                  className="w-full max-h-[70vh] object-contain bg-muted/50"
                                  onError={() => handleImageError(project.title)}
                                />
                              ) : (
                                <div className="w-full h-96 bg-gradient-primary flex items-center justify-center">
                                  <div className="text-center">
                                    <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <p className="text-xl text-foreground/80 font-medium">Project Preview</p>
                                    <p className="text-foreground/60">Image not available</p>
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <div className="mt-6 p-4 bg-glass backdrop-blur-glass rounded-lg border border-glass-border">
                              <p className="text-foreground/90 leading-relaxed">
                                {project.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mt-4">
                                {project.techStack.map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    variant="outline"
                                    className="bg-glass-accent border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>

                              {(project.githubLink || project.liveLink) && (
                                <div className="flex gap-4 mt-6">
                                  {project.githubLink && (
                                    <a
                                      href={project.githubLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 px-4 py-2 bg-glass hover:bg-glass-hover backdrop-blur-glass border border-glass-border rounded-lg transition-all duration-300 hover:shadow-glow text-foreground hover:text-primary"
                                    >
                                      <Github className="w-4 h-4" />
                                      View Code
                                    </a>
                                  )}
                                  {project.liveLink && (
                                    <a
                                      href={project.liveLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-glow"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                      Live Demo
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* Floating tech badges */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="outline" 
                        className="bg-glass backdrop-blur-glass border-glass-border text-foreground shadow-glass"
                      >
                        {project.techStack[0]}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardDescription className="text-foreground/80 mb-4 line-clamp-3">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(1).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-glass-accent border-primary/20 text-primary/90 hover:bg-primary/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Footer */}
                  {(project.githubLink || project.liveLink) && (
                    <CardFooter className="border-t border-glass-border bg-glass/30 backdrop-blur-glass">
                      <div className="flex justify-between w-full">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105 transform"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105 transform"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </CardFooter>
                  )}
                </Card>
              </Parallax>
            ))}
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Projects;