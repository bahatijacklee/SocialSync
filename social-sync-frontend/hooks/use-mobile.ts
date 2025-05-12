"use client"

import { useState, useEffect } from "react"

export const useMobile = () => {
  // Default to true on first render to ensure mobile-first approach
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Function to check if the screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

