"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Parallax } from "react-scroll-parallax"

const Projects = () => {
  const projects = [
    {
      title: "Restaurant E-commerce Platform",
      description:
        "Developed a comprehensive restaurant ecommerce platform featuring menu browsing, user authentication, and real-time order management. Integrated Firebase for backend services and role-based access control for management functionalities with ability to handle 50+ users at a time.",
      techStack: ["Firebase", "React.js", "Node.js", "Express.js", "Bootstrap CSS"],
      image: "/placeholder.svg?height=200&width=400",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Sleep Outside – E-commerce Website",
      description:
        "Achieved 9.5 rating from my client in developing the e-commerce platform for outdoor products, including Backpacks, sleeping bags and tents. Integrated features such as dynamic discount badges, real-time announcements, and user authentication with session tokens to ensure a seamless user experience.",
      techStack: ["React", "CSS", "Bootstrap", "MySQL", "Node.js", "Express.js"],
      image: "/placeholder.svg?height=200&width=400",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Mini Blogging Platform",
      description:
        "Developing a full MERN stack blogging platform with user registration, content creation, and community interaction features including post likes, comment threads, and real-time notifications.",
      techStack: ["React", "Node.js", "Express", "MySQL"],
      image: "/placeholder.svg?height=200&width=400",
      githubLink: "#",
      liveLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-2"></div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Parallax key={index} translateY={[40 + index * 20, -40 - index * 20]} opacity={[0.7, 1]}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="h-48 overflow-hidden">
                  <Parallax translateY={[-10, 10]} scale={[1, 1.1]} className="h-full">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </Parallax>
                </div>

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
  )
}

export default Projects
