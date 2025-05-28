"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import type { ReactNode } from "react"

interface ParallaxWrapperProps {
  children: ReactNode
}

export default function ParallaxWrapper({ children }: ParallaxWrapperProps) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
