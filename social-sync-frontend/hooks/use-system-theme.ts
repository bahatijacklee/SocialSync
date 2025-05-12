"use client"

import { useState, useEffect } from "react"

export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light")

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // Initial check
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      setSystemTheme(darkModeMediaQuery.matches ? "dark" : "light")

      // Listen for changes
      const handler = (e: MediaQueryListEvent) => {
        setSystemTheme(e.matches ? "dark" : "light")
      }

      darkModeMediaQuery.addEventListener("change", handler)

      // Clean up
      return () => darkModeMediaQuery.removeEventListener("change", handler)
    }
  }, [])

  return systemTheme
}

