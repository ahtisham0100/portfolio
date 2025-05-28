import { Parallax } from "react-scroll-parallax"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="mb-8">
          <h2 className="section-title">Get In Touch</h2>
        </Parallax>
        <p className="text-gray-600 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Email Me
        </a>
      </div>
    </section>
  )
}

export default Contact
