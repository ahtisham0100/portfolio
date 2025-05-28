"use client"

import { Parallax } from "react-scroll-parallax"

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript (ES6)", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "Database Design", level: 75 },
    { name: "C++", level: 70 },
    { name: "Java", level: 65 },
  ]

  const tools = ["Git", "GitHub", "Notion", "Notion Calendar", "Postman", "XAMPP", "Slack"]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Tools</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-2"></div>
        </Parallax>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Parallax translateY={[30, -30]} opacity={[0.8, 1]}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
                <div className="space-y-5">
                  {technicalSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Parallax>

            <Parallax translateY={[50, -50]} opacity={[0.8, 1]}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
