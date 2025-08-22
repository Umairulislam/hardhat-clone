import { RouterProvider } from "react-router"
import router from "./routes/routes"
import { ThemeContext } from "./context/ThemeContext"
import { useEffect, useState } from "react"

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // On first load, check localStorage or system preference
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark"
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem("theme", newMode ? "dark" : "light")
      return newMode
    })
  }

  const theme = darkMode ? "dark" : "light"

  useEffect(() => {
    // Update HTML class for Tailwind dark mode
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext>
  )
}

export default App
