"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Create a context to share theme state across components
export const ThemeContext = React.createContext({
  theme: "system" as "light" | "dark" | "system",
  setTheme: (theme: "light" | "dark" | "system") => {},
})

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => React.useContext(ThemeContext)

