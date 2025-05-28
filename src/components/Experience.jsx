import { Parallax } from "react-scroll-parallax"

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="mb-8">
          <h2 className="section-title">Professional Experience</h2>
        </Parallax>

        <div className="experience-item">
          {/* Example Experience Item - Replace with actual data */}
          <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
          <p className="text-gray-600 mb-1">Acme Corp | 2020 - Present</p>
          <p className="text-gray-700">
            Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with a team of
            engineers to deliver high-quality software solutions.
          </p>
        </div>

        <div className="experience-item mt-8">
          {/* Example Experience Item - Replace with actual data */}
          <h3 className="text-xl font-semibold mb-2">Web Developer Intern</h3>
          <p className="text-gray-600 mb-1">Beta Inc | Summer 2019</p>
          <p className="text-gray-700">
            Assisted in the development of a new e-commerce platform using HTML, CSS, and JavaScript. Gained experience
            in front-end development and working in an agile environment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
