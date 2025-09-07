import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
         <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-blue-600 dark:text-blue-400 mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">ahtisham0100@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-blue-600 dark:text-blue-400 mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400">03010910933</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-blue-600 dark:text-blue-400 mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Muhammad Ahtisham Arif</h2>
            <p className="text-gray-400 mt-2">Software Engineer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:ahtisham0100@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Muhammad Ahtisham Arif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
