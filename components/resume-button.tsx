"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface ResumeButtonProps {
  resumeUrl: string
  className?: string
}

const ResumeButton = ({ resumeUrl, className = "" }: ResumeButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Check if the file exists
      const checkResponse = await fetch(resumeUrl, { method: "HEAD" })

      if (!checkResponse.ok) {
        throw new Error(`Resume file not found. Status: ${checkResponse.status}`)
      }

      // Create a link element
      const link = document.createElement("a")
      link.href = resumeUrl
      link.target = "_blank" // Open in new tab first
      link.rel = "noopener noreferrer"

      // For HTML files, just open them in a new tab
      if (resumeUrl.endsWith(".html")) {
        link.click()
        toast({
          title: "Resume opened in new tab",
          description: "Your resume has been opened in a new browser tab.",
        })
      } else {
        // For PDF files, try to download
        link.download = "Muhammad_Ahtisham_Arif_Resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        toast({
          title: "Resume download started",
          description: "Your resume is being downloaded.",
        })
      }
    } catch (error) {
      console.error("Download error:", error)
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "There was a problem downloading the resume. Please try again later.",
      })
    } finally {
      // Reset downloading state after a short delay
      setTimeout(() => {
        setIsDownloading(false)
      }, 1500)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      className={`border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 ${className}`}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Opening...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          View Resume <Download size={16} />
        </span>
      )}
    </Button>
  )
}

export default ResumeButton
