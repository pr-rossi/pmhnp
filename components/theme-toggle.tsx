"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full shadow-md"
      >
        <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <Moon className="hidden h-5 w-5 dark:block" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
} 