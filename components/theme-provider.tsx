"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Apply theme class to body for global styling
  React.useEffect(() => {
    const handleThemeChange = () => {
      document.body.classList.add("theme-transition")

      setTimeout(() => {
        document.body.classList.remove("theme-transition")
      }, 1000)
    }

    // Listen for theme changes
    window.addEventListener("theme-change", handleThemeChange)

    return () => {
      window.removeEventListener("theme-change", handleThemeChange)
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
