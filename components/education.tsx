"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { Parallax } from "react-scroll-parallax"

const Education = () => {
  const educationData = [
    {
      degree: "BE Software Engineering",
      institution: "National University of Sciences and Technology (NUST)",
      year: "2023 - Present",
      gpa: "3.07",
    },
    {
      degree: "Intermediate",
      institution: "Punjab College of Science and Commerce",
      year: "2021 - 2023",
      gpa: "88%",
    },
    {
      degree: "Matriculation",
      institution: "PaktTurk Maarif International Schools",
      year: "2019 - 2021",
      gpa: "97%",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-2"></div>
        </Parallax>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 pl-8 ml-4">
            {educationData.map((edu, index) => (
              <Parallax key={index} translateY={[40 + index * 20, -40 - index * 20]} opacity={[0.7, 1]}>
                <div className="mb-12 relative">
                  <div className="absolute -left-12 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={16} />
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 mb-3">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">GPA/Percentage:</span> {edu.gpa}
                    </p>
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

export default Education
