"use client"
import ToggleButton from "@/components/Setting/ToggleButton"
import { Card } from "@/components/ui/Card"
import { useEffect, useState } from "react"
import { themeColors, ThemeColor } from "@/app/lib/theme.config"

const colors = [
  "Default", "Black", "White", "Blue",
  "Red", "Purple", "Green", "Yellow",
  "Orange", "Cyan", "Pink", "Custom"
] as ThemeColor[]

export default function SettingPage() {
  const [theme, setTheme] = useState<"light"|"dark">("light")
  const [color, setColor] = useState<ThemeColor>("Default")
  const [customColor, setCustomColor] = useState("#3b82f6")

  const setPrimaryColor = (color: ThemeColor) => {
    const root = document.documentElement
    root.style.setProperty("--color-primary", themeColors[color])

    // custom color
    if (color === "Custom") {
      root.style.setProperty("--color-primary", customColor)
    } else {
      root.style.setProperty("--color-primary", themeColors[color])
    }

    // text nav logic
    if (color === "White") {
      root.style.setProperty("--color-text-nav", "#242424")
    } else if (color === "Black") {
      root.style.setProperty("--color-text-nav", "#ffffff")
    } else {
      root.style.setProperty("--color-text-nav", "var(--color-text-nav)")
    }
  }

  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    setPrimaryColor(color)

    localStorage.setItem("theme", theme)
    localStorage.setItem("color", color)

  }, [theme, color, customColor])

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const savedColor = localStorage.getItem("color") as ThemeColor | null

    if (saveTheme) {setTheme(saveTheme)}
    if (savedColor) {setColor(savedColor)}
    }, [])

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Setting</h1>

      <Card className="p-6 space-y-6">

        {/* Theme */}
        <section>
          <h3 className="font-semibold mb-3">Theme</h3>
          <div className="flex gap-4">
            <ToggleButton active={theme === "light"} onClick={() => setTheme("light")} >Light</ToggleButton>
            <ToggleButton active={theme === "dark"} onClick={() => setTheme("dark")} >Dark</ToggleButton>
          </div>
        </section>

        {/* Color */}
        <section>
          <h3 className="font-semibold mb-3">Color</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((c) => (
              <ToggleButton 
              key={c}
              active={color === c} 
              onClick={() => setColor(c)}
              >
                {c}
              </ToggleButton>
            ))}
          </div>
        </section>

      {color === "Custom" && (
        <div className="flex items-center gap-4">
          <h4>Pick your custom color: </h4>
          <input 
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            className="w-15 h-8 cursor-pointer"
            />
          <span>{customColor}</span>
        </div>
      )}

      </Card>
      

    </div>
  )
}
