import { Parallax } from "react-scroll-parallax"

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="mb-8">
          <h2 className="section-title">Technical Skills</h2>
        </Parallax>
        <p className="text-gray-600 mb-8">Here are some of my technical skills:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="skill-item">
            <i className="fab fa-html5 fa-3x text-red-500 mb-2"></i>
            <p>HTML5</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-css3-alt fa-3x text-blue-500 mb-2"></i>
            <p>CSS3</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-js-square fa-3x text-yellow-500 mb-2"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-react fa-3x text-blue-300 mb-2"></i>
            <p>React</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-node-js fa-3x text-green-500 mb-2"></i>
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-git fa-3x text-orange-500 mb-2"></i>
            <p>Git</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-github fa-3x text-gray-800 mb-2"></i>
            <p>GitHub</p>
          </div>
          <div className="skill-item">
            <i className="fas fa-database fa-3x text-gray-600 mb-2"></i>
            <p>SQL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
