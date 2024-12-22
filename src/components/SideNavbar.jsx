import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const SideNavbar = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const location = useLocation()

  const sections = [
    {
      heading: "Hardhat Runner",
      menus: ["Overview", "Installation", "Quick start"],
    },
    {
      heading: "Guides",
      menus: [
        "Setting up a project",
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
        "@nomiclabs/hardhat-waffle",
        "@nomiclabs/hardhat-web3",
        "@nomiclabs/hardhat-truffle5",
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
    <div
      className={`fixed left-0 hidden lg:block w-80 h-[calc(100vh-140px)] overflow-y-auto px-4 ${
        isDarkMode ? "text-black" : "text-gray-300"
      }`}
    >
      <nav>
        {sections.map((section) => {
          // Check if any menu in the section is active based on location
          const isSectionActive = section.menus.some((menu) => {
            const linkPath =
              section.heading === "Hardhat Runner"
                ? `/hardhat-runner/docs/getting-started#${menu
                    .toLowerCase()
                    .replace(/ /g, "-")}`
                : section.heading === "Plugins" && menu === "Community plugins"
                ? "/hardhat-runner/plugins#community-plugins"
                : section.heading === "Plugins"
                ? `/hardhat-runner/plugins/${menu
                    .replace("@", "")
                    .replace("/", "-")}`
                : `/${menu.toLowerCase().replace(/ /g, "-")}`
            return location.pathname === linkPath
          })

          return (
            <div key={section.heading} className="mb-4">
              <h2
                className={`font-bold ${
                  isSectionActive
                    ? "text-tertiary border-l-2 border-tertiary pl-1"
                    : ""
                }`}
              >
                {section.heading}
              </h2>
              <ul className="ml-5 text-sm font-light">
                {section.menus.map((menu) => {
                  const linkPath =
                    section.heading === "Hardhat Runner"
                      ? `/hardhat-runner/docs/getting-started/${menu
                          .toLowerCase()
                          .replace(/ /g, "-")}`
                      : section.heading === "Plugins" &&
                        menu === "Community plugins"
                      ? "/hardhat-runner/plugins#community-plugins"
                      : section.heading === "Plugins"
                      ? `/hardhat-runner/plugins/${menu
                          .replace("@", "")
                          .replace("/", "-")}`
                      : `/${menu.toLowerCase().replace(/ /g, "-")}`

                  const isActive = location.pathname === linkPath

                  return (
                    <li key={menu} className="py-1">
                      <Link
                        to={linkPath}
                        className={`hover:text-tertiary ${
                          isActive ? "text-tertiary" : ""
                        }`}
                      >
                        {menu}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default SideNavbar
