import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar, ScrollToTop } from "./components"
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
import {
  Docs,
  DocsLayout,
  Overview,
  QuickStart,
  Installation,
} from "./pages/Docs"
import {
  Tutorial,
  TutorialLayout,
  SetupEnvironment,
  CreateProject,
  WriteCompileContracts,
  TestContracts,
  DebugHardhatNetwork,
  DeployLiveNetwork,
  BoilerplateProject,
  FinalThoughts,
} from "./pages/Tutorial"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "./redux/themeSlice"

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <main
      className={`${
        isDarkMode ? "light-mode" : "dark-mode"
      } font-sans transition-all duration-300 min-h-screen`}
    >
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleTheme={handleToggleTheme} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Plugins Page without Sidebar */}
          <Route path="/hardhat-runner/plugins" element={<Plugins />} />

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
            <Route
              path="nomicfoundation-hardhat-verify"
              element={<HardhatVerify />}
            />
            <Route
              path="nomicfoundation-hardhat-foundry"
              element={<HardhatFoundry />}
            />
            <Route
              path="nomicfoundation-hardhat-ledger"
              element={<HardhatLedger />}
            />
            <Route
              path="nomicfoundation-hardhat-web3-v4"
              element={<HardhatWeb3V4 />}
            />
            <Route path="nomiclabs-hardhat-vyper" element={<HardhatVyper />} />
            <Route
              path="nomiclabs-hardhat-solhint"
              element={<HardhatSolhint />}
            />
            <Route
              path="nomiclabs-hardhat-waffle"
              element={<HardhatWaffle />}
            />
            <Route path="nomiclabs-hardhat-web3" element={<HardhatWeb3 />} />
            <Route
              path="nomiclabs-hardhat-truffle5"
              element={<HardhatTruffle5 />}
            />
          </Route>

          {/* Docs Page without Sidebar */}
          <Route path="/docs" element={<Docs />}></Route>

          {/* Docs Detail with Sidebar */}
          <Route path="/hardhat-runner/docs" element={<DocsLayout />}>
            <Route path="getting-started/overview" element={<Overview />} />
            <Route
              path="getting-started/installation"
              element={<Installation />}
            />
            <Route
              path="getting-started/quick-start"
              element={<QuickStart />}
            />
          </Route>

          {/* Tutorial Page with Sidebar */}
          <Route path="/tutorial" element={<TutorialLayout />}>
            <Route path="" element={<Tutorial />} />
            <Route
              path="setting-up-the-environment"
              element={<SetupEnvironment />}
            />
            <Route
              path="creating-a-new-hardhat-project"
              element={<CreateProject />}
            />
            <Route
              path="writing-and-compiling-contracts"
              element={<WriteCompileContracts />}
            />
            <Route path="testing-contracts" element={<TestContracts />} />
            <Route
              path="debugging-with-hardhat-network"
              element={<DebugHardhatNetwork />}
            />
            <Route
              path="deploying-to-a-live-network"
              element={<DeployLiveNetwork />}
            />
            <Route
              path="boilerplate-project"
              element={<BoilerplateProject />}
            />
            <Route path="final-thoughts" element={<FinalThoughts />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App
