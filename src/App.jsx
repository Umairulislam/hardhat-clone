import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Plugins, Docs, Tutorial } from "./pages"
import { Navbar } from "./components"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    console.log("Theme toggled")
  }

  return (
    <main
      className={`${
        isDarkMode
          ? "bg-lightBackground text-darkText"
          : "bg-darkBackground text-lightText"
      } font-sans transition-all duration-300`}
    >
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
