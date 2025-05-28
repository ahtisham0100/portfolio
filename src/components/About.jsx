import { FaUser, FaGraduationCap, FaLaptopCode } from "react-icons/fa"
import { Parallax } from "react-scroll-parallax"

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="section-container">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="mb-8">
          <h2 className="section-title">About Me</h2>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Parallax translateY={[30, -30]} opacity={[0.5, 1]}>
            <div className="card">
              <div className="flex items-center mb-4">
                <FaUser className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Highly driven and adaptable Software Engineering studentequipped with
                 hands-on experience in full-stack web development. Passionate about creating efficient,user-friendly applications.
              </p>
            </div>
          </Parallax>

          <Parallax translateY={[50, -50]} opacity={[0.7, 1]}>
            <div className="card">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">My Education</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Currently pursuing BE in Software Engineering at National University of Sciences and Technology (NUST)
                with a GPA of 3.07. Previously completed Intermediate education with 88% and Matriculation with 97%.
              </p>
            </div>
          </Parallax>

          <Parallax translateY={[70, -70]} opacity={[0.7, 1]}>
            <div className="card">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">My Expertise</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Proven expertise in building interactive, scalable, and responsive web applications using technologies
                such as React, Node.js, Express, MySQL, and EJS. Adept in designing RESTful APIs and implementing robust
                backend logic.
              </p>
            </div>
          </Parallax>
        </div>

        <Parallax translateY={[40, -40]} opacity={[0.8, 1]} className="mt-12">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am a Software Engineering student with a passion for full-stack web development. My 6 months of hands-on
              experience has equipped me with the skills to build interactive, scalable, and responsive web
              applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I have proven expertise in technologies such as React, Node.js, Express, MySQL, and EJS. I am adept in
              designing RESTful APIs, implementing robust backend logic, and applying Git-based collaborative workflows.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Currently, I am expanding my knowledge and skills at NUST (MCS), where I am pursuing my BE in Software
              Engineering. I am always eager to learn new technologies and methodologies to enhance my development
              capabilities.
            </p>
          </div>
        </Parallax>
      </div>
    </section>
  )
}

export default About
