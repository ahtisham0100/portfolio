"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Parallax } from "react-scroll-parallax"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <Parallax translateY={[-20, 20]} opacity={[0.7, 1]} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-2"></div>
        </Parallax>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Parallax translateY={[30, -30]} opacity={[0.8, 1]}>
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
            </Parallax>

            <Parallax translateY={[50, -50]} opacity={[0.8, 1]}>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                      />
                    </div>

                    <div>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[120px] bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-center">
                        Message sent successfully!
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md text-center">
                        Failed to send message. Please try again.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
