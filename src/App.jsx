import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home } from "./pages/Home"
import {
  Plugins,
  PluginsLayout,
  HardhatToolbox,
  HardhatToolboxViem,
  HardhatChaiMatchers,
  HardhatEthers,
  HardhatViem,
} from "./pages/Plugins"
import { Docs, DocsLayout, GettingStarted } from "./pages/Docs"
import { Tutorial } from "./pages/Tutorial"

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

          {/* Plugins Page Page without Sidebar */}
          <Route
            path="/hardhat-runner/plugins"
            element={<Plugins isDarkMode={isDarkMode} />}
          />

          {/* Plugins Detail with Sidebar */}
          <Route path="/hardhat-runner/plugins" element={<PluginsLayout />}>
            <Route
              path="nomicfoundation-hardhat-toolbox"
              element={<HardhatToolbox />}
            />
            <Route
              path="nomicfoundation-hardhat-toolbox-viem"
              element={<HardhatToolboxViem />}
            />
            <Route
              path="nomicfoundation-hardhat-chai-matchers"
              element={<HardhatChaiMatchers />}
            />
            <Route
              path="nomicfoundation-hardhat-ethers"
              element={<HardhatEthers />}
            />
            <Route
              path="nomicfoundation-hardhat-viem"
              element={<HardhatViem />}
            />
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
