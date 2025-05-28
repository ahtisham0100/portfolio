import { Parallax } from "react-scroll-parallax"

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto text-center">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="mb-8">
          <h2 className="section-title">Education & Certifications</h2>
        </Parallax>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Item 1 */}
          <div className="education-item">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 mb-1">University of Example</p>
            <p className="text-gray-600">2016 - 2020</p>
            <p className="mt-2">
              Relevant coursework: Data Structures and Algorithms, Database Management, Software Engineering, Artificial
              Intelligence.
            </p>
          </div>

          {/* Education Item 2 */}
          <div className="education-item">
            <h3 className="text-xl font-semibold mb-2">Certified Scrum Master (CSM)</h3>
            <p className="text-gray-600 mb-1">Scrum Alliance</p>
            <p className="text-gray-600">Issued: January 2022</p>
            <p className="mt-2">Demonstrated knowledge of Scrum principles and practices.</p>
          </div>

          {/* Education Item 3 */}
          <div className="education-item">
            <h3 className="text-xl font-semibold mb-2">AWS Certified Cloud Practitioner</h3>
            <p className="text-gray-600 mb-1">Amazon Web Services (AWS)</p>
            <p className="text-gray-600">Issued: June 2023</p>
            <p className="mt-2">Foundational knowledge of AWS cloud services and concepts.</p>
          </div>

          {/* Education Item 4 */}
          <div className="education-item">
            <h3 className="text-xl font-semibold mb-2">Google Data Analytics Professional Certificate</h3>
            <p className="text-gray-600 mb-1">Coursera</p>
            <p className="text-gray-600">Issued: December 2023</p>
            <p className="mt-2">
              Skills in data analysis, visualization, and reporting using tools like SQL, Tableau, and R.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
