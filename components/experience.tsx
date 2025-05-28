"use client"

import { Briefcase, Calendar } from "lucide-react"
import { Parallax } from "react-scroll-parallax"

const Experience = () => {
  const experiences = [
    {
      title: "Volunteer at HAO R&D department",
      company: "Humanity Alliance Organization",
      period: "Aug 2024 - Present",
      description: "Contributing to research and development initiatives at Humanity Alliance Organization.",
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "Dec 2024 - Present",
      description:
        "Developing comprehensive web applications for clients, including e-commerce platforms and content management systems.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-2"></div>
        </Parallax>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <Parallax key={index} translateY={[40 + index * 20, -40 - index * 20]} opacity={[0.7, 1]}>
                <div className="mb-12 relative">
                  <div className="absolute -left-12 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={16} />
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 mb-3">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
