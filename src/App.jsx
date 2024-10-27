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
  HardhatVerify,
  HardhatFoundry,
  HardhatLedger,
  HardhatWeb3V4,
  HardhatVyper,
  HardhatWaffle,
  HardhatSolhint,
  HardhatWeb3,
  HardhatTruffle5,
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
          <Route
            path="/hardhat-runner/plugins"
            element={<PluginsLayout isDarkMode={isDarkMode} />}
          >
            <Route
              path="nomicfoundation-hardhat-toolbox"
              element={<HardhatToolbox isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomicfoundation-hardhat-toolbox-viem"
              element={<HardhatToolboxViem isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomicfoundation-hardhat-chai-matchers"
              element={<HardhatChaiMatchers isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomicfoundation-hardhat-ethers"
              element={<HardhatEthers isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomicfoundation-hardhat-viem"
              element={<HardhatViem isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomicfoundation-hardhat-verify"
              element={<HardhatVerify isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomicfoundation-hardhat-foundry"
              element={<HardhatFoundry isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomicfoundation-hardhat-ledger"
              element={<HardhatLedger isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomicfoundation-hardhat-web3-v4"
              element={<HardhatWeb3V4 isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomiclabs-hardhat-vyper"
              element={<HardhatVyper isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomiclabs-hardhat-solhint"
              element={<HardhatSolhint isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomiclabs-hardhat-waffle"
              element={<HardhatWaffle isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomiclabs-hardhat-web3"
              element={<HardhatWeb3 isDarkMode={isDarkMode} />}
            />
            <Route
              path="nomiclabs-hardhat-truffle5"
              element={<HardhatTruffle5 isDarkMode={isDarkMode} />}
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
