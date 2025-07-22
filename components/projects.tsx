"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Parallax } from "react-scroll-parallax";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CPU Scheduling Simulator",
      description:
        "Built a dynamic scheduling simulator to visually demonstrate CPU scheduling algorithms such as FCFS, SJF, Round Robin, and Priority Scheduling. The platform allows users to input custom processes, configure time quantum, and visualize execution in a Gantt chart. It’s designed for educational use and real-time understanding of process scheduling behavior in operating systems.",
      techStack: ["React.js", "Tailwind CSS", "ShadCN UI", "Chart.js"],
      image: "/projects/scheduling-simulator-one.vercel.app_.png",
      githubLink: "https://github.com/ahtisham0100/scheduling-simulator",
      liveLink: "https://scheduling-simulator-one.vercel.app/",
    },
    {
      title: "Sleep Outside – E-commerce Website",
      description:
        "Achieved 9.5 rating from my client in developing the e-commerce platform for outdoor products, including Backpacks, sleeping bags and tents. Integrated features such as dynamic discount badges, real-time announcements, and user authentication with session tokens to ensure a seamless user experience.",
      techStack: ["React", "CSS", "Bootstrap", "MySQL", "Node.js", "Express.js"],
      image: "projects/sleepoutside.png?height=200&width=400",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Online Design Tool",
      description:
        "Built a web-based platform that allows users to visually model software architecture components such as modules, services, databases, and interfaces. The tool supports drag-and-drop diagramming, system layering, entity-relationship modeling, and versioned saving. Designed to help developers and students plan and document software systems using industry-recognized architectural patterns.",
      techStack: ["HTML", "CSS", "React", "Bootstrap"],
      image: "projects/ahti-sham.rocks_.png",
      githubLink: "https://github.com/ahtisham0100/sda_cea",
      liveLink: "https://sda-cea.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-2"></div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Parallax
              key={index}
              translateY={[40 + index * 20, -40 - index * 20]}
              opacity={[0.7, 1]}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="h-48 overflow-hidden cursor-pointer">
                      <Parallax translateY={[-10, 10]} scale={[1, 1.1]} className="h-full">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-fit"
                        />
                      </Parallax>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-5xl w-full bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
                    <DialogHeader>
                      <DialogTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="max-h-[80vh] overflow-auto rounded-md">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} Screenshot`}
                        className="w-full max-h-[70vh] object-contain rounded-md"
                      />
                    </div>
                    <DialogClose asChild>
                  
                        &times;
                    </DialogClose>
                  </DialogContent>
                </Dialog>

                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between mt-auto border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </CardFooter>
              </Card>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
