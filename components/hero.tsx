"use client"

import { useEffect, useState } from "react"
import { Terminal, Github, ExternalLink, Code, Zap } from "lucide-react"

export default function Hero() {
  const [terminalOutput, setTerminalOutput] = useState("")
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  const commands = [
    "$ whoami",
    "Muhammad Ahtisham Arif",
    "",
    "$ cat skills.json",
    '{ "frontend": ["React.js", "Next.js", "Tailwind CSS"] }',
    '{ "backend": ["Node.js", "Firebase", "API Development"] }',
    '{ "tools": ["Git", "Docker", "VS Code"] }',
    "",
    "$ ls projects/",
    "smart-transport-system/",
    "booking-application/",
    "portfolio-website/",
    "",
    "$ echo $CONTACT",
    "ahtisham0100@gmail.com",
    "",
    "$ curl https://ahtisham.live",
    "✨ Portfolio loaded successfully!",
    "",
    "$ npm run deploy",
    "🚀 Ready to build amazing things...",
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || lineIndex >= commands.length) return

    const currentCommand = commands[lineIndex]

    if (currentCommand === "") {
      setTerminalOutput((prev) => prev + "\n")
      setCurrentLine("")
      setTimeout(() => {
        setLineIndex((prev) => prev + 1)
      }, 300)
      return
    }

    if (charIndex < currentCommand.length) {
      const timer = setTimeout(
        () => {
          setCurrentLine(currentCommand.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        },
        currentCommand.startsWith("$") ? 100 : 50,
      )

      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setTerminalOutput((prev) => prev + currentCommand + "\n")
        setCurrentLine("")
        setCharIndex(0)
        setLineIndex((prev) => {
          const next = prev + 1
          if (next >= commands.length) {
            setTimeout(() => {
              setTerminalOutput("")
              setLineIndex(0)
            }, 3000)
          }
          return next
        })
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [isClient, lineIndex, charIndex, commands])

  if (!isClient) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
        <div className="max-w-4xl w-full bg-black/50 backdrop-blur-lg rounded-2xl border border-emerald-500/30 shadow-2xl p-6">
          <div className="animate-pulse text-emerald-400 font-mono">Initializing terminal...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-950 text-white px-4 py-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,0.1),transparent_60deg,rgba(6,182,212,0.1),transparent_120deg,rgba(16,185,129,0.1))] animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-mono backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>Full Stack Developer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-200 to-cyan-300 bg-clip-text text-transparent">
            Muhammad Ahtisham
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">Crafting digital experiences with modern web technologies</p>
        </div>

        <div className="max-w-4xl w-full bg-black/80 backdrop-blur-xl rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden group hover:border-emerald-400/50 transition-all duration-500">
          <div className="bg-slate-800/90 px-6 py-4 flex items-center justify-between border-b border-emerald-500/20">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors cursor-pointer" />
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-mono">ahtisham@portfolio:~</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Code className="w-4 h-4" />
              <span className="text-xs font-mono">zsh</span>
            </div>
          </div>

          <div className="p-6 font-mono text-sm leading-relaxed min-h-[400px] relative">
            <div className="text-emerald-400 whitespace-pre-line">
              {terminalOutput}
              {currentLine}
              <span className="animate-pulse">|</span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <a
            href="https://github.com/ahtisham0100"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="https://ahtisham.live"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl px-6 py-3 flex items-center gap-3 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-emerald-500/25"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Portfolio</span>
          </a>

          <a
            href="mailto:ahtisham0100@gmail.com"
            className="group bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
              <span className="text-xs font-bold text-slate-900">@</span>
            </div>
            <span className="font-medium">Contact</span>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
