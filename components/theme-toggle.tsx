"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  // Default is light (no class), dark adds .dark class
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Sync with whatever the blocking script set on <html>
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("suteki-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("suteki-theme", "light")
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/80 text-white transition-all hover:bg-white/10 sm:h-10 sm:w-10"
    >
      {isDark ? (
        <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
      ) : (
        <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
      )}
    </button>
  )
}
