"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useSystemTheme } from "@/hooks/use-system-theme"

export function ThemeIndicator() {
  const { theme } = useTheme()
  const systemTheme = useSystemTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Determine which theme is active
  const activeTheme = theme === "system" ? systemTheme : theme

  return (
    <div className="flex items-center gap-2 p-4 rounded-lg border bg-muted/50">
      <div className="p-3 rounded-full bg-background">
        {theme === "system" ? (
          <Monitor className="h-5 w-5" />
        ) : activeTheme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </div>
      <div>
        <p className="font-medium">
          {theme === "system" ? "System Theme" : theme === "dark" ? "Dark Theme" : "Light Theme"}
        </p>
        <p className="text-sm text-muted-foreground">
          {theme === "system"
            ? `Currently using ${systemTheme} theme based on your system preference`
            : `Manually set to ${theme} theme`}
        </p>
      </div>
    </div>
  )
}

