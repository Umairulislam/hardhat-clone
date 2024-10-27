import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Plugins, Docs, Tutorial } from "./pages"
import { Navbar } from "./components"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <main
      className={`${
        isDarkMode ? "light-mode" : "dark-mode"
      } font-sans transition-all duration-300 min-h-screen`}
    >
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route
            path="/plugins"
            element={<Plugins isDarkMode={isDarkMode} />}
          />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
