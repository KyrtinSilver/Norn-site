"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-md p-2 opacity-60 hover:opacity-100 transition-all duration-300 ease"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 ease dark:-rotate-90 dark:scale-0 fill-current" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 ease dark:rotate-0 dark:scale-100 top-2 left-2 fill-current" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
