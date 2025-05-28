"use client"

import { User, Mail, Phone } from "lucide-react"
import { Parallax } from "react-scroll-parallax"
import ResumeButton from "./resume-button"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-2"></div>
        </Parallax>

        <Parallax translateY={[30, -30]} opacity={[0.8, 1]}>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Highly driven and adaptable Software Engineering student currently enrolled at NUST (MCS), equipped with
                6 Months of hands-on experience in full-stack web development. Proven expertise in building interactive,
                scalable, and responsive web applications using technologies such as React, Node.js, Express, MySQL, and
                EJS. Adept in designing RESTful APIs, implementing robust backend logic, and applying Git-based
                collaborative workflows.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Parallax translateY={[15, -15]} className="flex items-center">
                  <User className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Name</h3>
                    <p className="text-gray-600 dark:text-gray-400">Muhammad Ahtisham Arif</p>
                  </div>
                </Parallax>

                <Parallax translateY={[25, -25]} className="flex items-center">
                  <Mail className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">ahtisham0100@gmail.com</p>
                  </div>
                </Parallax>

                <Parallax translateY={[35, -35]} className="flex items-center">
                  <Phone className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">03010910933</p>
                  </div>
                </Parallax>
              </div>

              <div className="mt-8 flex justify-center">
                <ResumeButton resumeUrl="/resume.html" className="px-6 py-2" />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  )
}

export default About
