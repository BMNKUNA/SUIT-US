"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle theme change with transition
  const toggleTheme = () => {
    // Add transition class to body
    document.body.classList.add("theme-transition")

    // Dispatch custom event for theme change
    window.dispatchEvent(new Event("theme-change"))

    // Change theme
    setTheme(theme === "dark" ? "light" : "dark")

    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove("theme-transition")
    }, 1000)
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative overflow-hidden theme-toggle-button"
    >
      <div className="relative z-10 transition-transform duration-500">
        {theme === "dark" ? (
          <Sun className="h-5 w-5 transition-all duration-500" />
        ) : (
          <Moon className="h-5 w-5 transition-all duration-500" />
        )}
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          theme === "dark"
            ? "bg-gradient-to-tr from-orange-300 to-yellow-200 opacity-0"
            : "bg-gradient-to-tr from-indigo-900 to-purple-900 opacity-0"
        }`}
      ></div>
    </Button>
  )
}
