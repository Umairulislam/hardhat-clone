import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Tutorial from "./pages/Tutorial"
import Plugins from "./pages/Plugins"
import PluginsLayout from "./pages/Plugins/PluginsLayout"
import PluginDetail from "./pages/Plugins/PluginDetail"
import DocsLayout from "./pages/Docs/DocsLayout"
import GettingStarted from "./pages/Docs/GettingStarted"

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
          <Route path="/tutorial" element={<Tutorial />} />

          {/* Plugins Page */}
          <Route
            path="/hardhat-runner/plugins"
            element={<Plugins isDarkMode={isDarkMode} />}
          />

          {/* Plugins Detail with Sidebar */}
          <Route
            path="/hardhat-runner/plugins/:pluginName"
            element={<PluginsLayout />}
          >
            <Route index element={<PluginDetail />} />
          </Route>

          {/* Docs Nested Routes */}
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<GettingStarted />} />
            <Route path="getting-started" element={<GettingStarted />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App
