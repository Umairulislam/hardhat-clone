import React, { useState } from "react"
import { Link } from "react-router-dom"

const SideNavbar = () => {
  const [activeMenu, setActiveMenu] = useState("")

  const handleMenuClick = (menu) => {
    setActiveMenu(menu)
  }

  const sections = [
    {
      heading: "Hardhat Runner",
      menus: [
        "Overview",
        "Installation",
        "Quick start",
        "Configuration",
        "Guides",
      ],
    },
    {
      heading: "Setting up a project",
      menus: [
        "Compiling your contracts",
        "Testing contracts",
        "Deploying your contracts",
        "Verifying your contracts",
        "Writing tasks",
        "Using the Hardhat console",
        "Using TypeScript",
        "Command-line completion",
        "Configuration variables",
        "Getting help",
      ],
    },
    {
      heading: "Advanced",
      menus: [
        "Hardhat Runtime Environment (HRE)",
        "Compilation artifacts",
        "Multiple Solidity versions",
        "Creating a task",
        "Writing scripts with Hardhat",
        "Building plugins",
        "Integrating with Foundry",
        "Flattening your contracts",
        "Running tests in VS Code",
        "Using ES modules",
        "Using Viem",
        "Migrating away from hardhat-waffle",
      ],
    },
    {
      heading: "Supporter guides",
      menus: ["Working with oracles", "Troubleshooting"],
    },
    {
      heading: "Reference",
      menus: ["Verbose logging", "Common problems", "Error codes"],
    },
    {
      heading: "Stability guarantees",
      menus: ["Solidity support", "Environment variables"],
    },
    {
      heading: "Plugins",
      menus: [
        "@nomicfoundation/hardhat-toolbox",
        "@nomicfoundation/hardhat-toolbox-viem",
        "@nomicfoundation/hardhat-chai-matchers",
        "@nomicfoundation/hardhat-ethers",
        "@nomicfoundation/hardhat-viem",
        "@nomicfoundation/hardhat-verify",
        "@nomicfoundation/hardhat-foundry",
        "@nomicfoundation/hardhat-ledger",
        "@nomicfoundation/hardhat-web3-v4",
        "@nomiclabs/hardhat-vyper",
        "@nomiclabs/hardhat-solhint",
        "@nomiclabs/hardhat-solpp",
        "@nomiclabs/hardhat-waffle",
        "@nomiclabs/hardhat-web3",
        "@nomiclabs/hardhat-truffle5",
        "@nomiclabs/hardhat-web3-legacy",
        "@nomiclabs/hardhat-truffle4",
        "Community plugins",
      ],
    },
    {
      heading: "Other Hardhat components",
      menus: [
        "Hardhat Network",
        "Hardhat Ignition",
        "Hardhat VSCode",
        "Hardhat Chai Matchers",
        "Hardhat Network Helpers",
      ],
    },
  ]

  return (
    <div className="fixed left-0 hidden lg:block w-72 h-screen overflow-y-auto p-4">
      <nav>
        {sections.map((section) => (
          <div key={section.heading} className={`mb-4 `}>
            <h2
              className={`font-bold ${
                section.menus.includes(activeMenu)
                  ? "text-tertiary border-l-2 border-tertiary pl-1"
                  : ""
              }`}
            >
              {section.heading}
            </h2>
            <ul className="ml-5 text-xs font-light">
              {section.menus.map((menu) => (
                <li key={menu} className="py-1">
                  <Link
                    to={
                      section.heading === "Plugins" &&
                      menu === "Community plugins"
                        ? "/hardhat-runner/plugins#community-plugins"
                        : section.heading === "Plugins"
                        ? `/hardhat-runner/plugins/${menu
                            .replace("@", "")
                            .replace("/", "-")}`
                        : `/${menu.toLowerCase().replace(/ /g, "-")}`
                    }
                    className={`hover:text-tertiary ${
                      activeMenu === menu ? "text-tertiary" : ""
                    }`}
                    onClick={() => handleMenuClick(menu)}
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default SideNavbar
