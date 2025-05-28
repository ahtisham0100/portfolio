"use client"

import { useState } from "react"
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa"
import { Parallax } from "react-scroll-parallax"

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "blog", name: "Blog" },
  ]

  const projects = [
    {
      id: 1,
      title: "Restaurant E-commerce Site",
      description:
        "Developed a comprehensive restaurant e-commerce platform featuring menu browsing, user authentication, and real-time order management. Integrated Firebase for backend services and role-based access control for management functionalities with ability to handle 50+ users at a time.",
      image: "/placeholder.svg?height=300&width=500",
      category: "ecommerce",
      techStack: ["Firebase", "React.js", "Node.js", "Express.js", "Bootstrap CSS"],
      links: {
        github: "#",
        live: "#",
      },
      features: [
        "User authentication and authorization",
        "Menu browsing and filtering",
        "Real-time order management",
        "Role-based access control",
        "Responsive design for all devices",
      ],
    },
    {
      id: 2,
      title: "Sleep Outside – E-commerce Website",
      description:
        "Achieved 9.5 rating from my client in developing the e-commerce platform for outdoor products, including Backpacks, sleeping bags and tents. Integrated features such as dynamic discount badges, real-time announcements, and user authentication with session tokens to ensure a seamless user experience.",
      image: "/placeholder.svg?height=300&width=500",
      category: "ecommerce",
      techStack: ["React", "CSS", "Bootstrap", "MySQL", "Node.js", "Express.js"],
      links: {
        github: "#",
        live: "#",
      },
      features: [
        "Dynamic discount badges",
        "Real-time announcements",
        "User authentication with session tokens",
        "Shopping cart functionality",
        "Wishlist feature",
        "Social interaction tools (comments, reviews, likes)",
        "Optimized API response time (30% improvement)",
      ],
    },
    {
      id: 3,
      title: "Mini Blogging Platform",
      description:
        "Developing a full MERN stack blogging platform with user registration, content creation, and community interaction features including post likes, comment threads, and real-time notifications.",
      image: "/placeholder.svg?height=300&width=500",
      category: "blog",
      techStack: ["React", "Node.js", "Express", "MySQL"],
      links: {
        github: "#",
        live: "#",
      },
      features: [
        "User registration and authentication",
        "Content creation and management",
        "Post likes and reactions",
        "Threaded comments system",
        "Real-time notifications",
        "User profiles and activity tracking",
        "Responsive design for mobile and desktop",
      ],
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className={darkMode ? "bg-gray-900" : "bg-white"}>
      <div className="section-container">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="mb-8">
          <h2 className="section-title">My Projects</h2>
        </Parallax>

        <Parallax translateY={[-10, 10]} opacity={[0.8, 1]} className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Parallax
              key={project.id}
              translateY={[40 + index * 20, -40 - index * 20]}
              opacity={[0.7, 1]}
              className="h-full"
            >
              <div className="card group overflow-hidden flex flex-col h-full">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        aria-label="View GitHub repository"
                      >
                        <FaGithub className="text-white" />
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        aria-label="View live project"
                      >
                        <FaExternalLinkAlt className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                      <FaCode className="mr-2" />
                      Key Features
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-blue-600 dark:text-blue-400">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
