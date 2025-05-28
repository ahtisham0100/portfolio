"use client"

import { Award } from "lucide-react"
import { Parallax } from "react-scroll-parallax"

const Certifications = () => {
  const certifications = [
    "HEC-Coursera Sponsored Licensee (2025)",
    "Udemy Full Stack Development Course",
    "Google Soft Skills Program",
    "Social Entrepreneurship | HP Life Foundation",
    "Introduction to Web Development",
    "Building Modern Full Stack Apps",
    "Meta Frontend Development",
    "AI for Everyone (In Progress)",
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
        </Parallax>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Parallax key={index} translateY={[20 + index * 10, -20 - index * 10]} opacity={[0.8, 1]}>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm flex items-start hover:shadow-md transition-shadow duration-300">
                  <Award className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">{cert}</span>
                </div>
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
