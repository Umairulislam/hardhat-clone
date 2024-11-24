import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const hardhatResources = [
  {
    title: "Hardhat Runner",
    description:
      "Hardhat Runner is the main component you interact with when using Hardhat. It's a flexible and extensible task runner that helps you manage and automate the recurring tasks inherent to developing smart contracts and dApps.",
    link: "Learn more",
  },
  {
    title: "Hardhat Network",
    description:
      "Hardhat comes built-in with Hardhat Network, a local Ethereum network node designed for development. It allows you to deploy your contracts, run your tests, and debug your code, all within the confines of your local machine.",
    link: "Learn more",
  },
  {
    title: "Hardhat Ignition",
    description:
      "Hardhat Ignition is a declarative deployment system that enables you to deploy your smart contracts without navigating the mechanics of the deployment process.",
    link: "Learn more",
  },
  {
    title: "Hardhat for Visual Studio Code",
    description:
      "Hardhat for Visual Studio Code is a VS Code extension that adds language support for Solidity and provides editor integration for Hardhat projects.",
    link: "Learn more",
  },
  {
    title: "Hardhat Chai Matchers",
    description:
      "Hardhat Chai Matchers adds Ethereum-specific capabilities to the Chai assertion library, making your smart contract tests easy to write and read. Among other things, you can assert that a contract fired certain events, exhibited a specific revert, or that a transaction resulted in specific changes to a wallet's Ether or token balance.",
    link: "Learn more",
  },
  {
    title: "Hardhat Network Helpers",
    description:
      "Hardhat Network Helpers provides a convenient JavaScript interface to the JSON-RPC functionality of Hardhat Network.",
    link: "Learn more",
  },
]

const DocsSection = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  return (
    <main>
      <section
        className={`flex flex-col gap-5 justify-center items-start max-w-2xl mx-auto text-sm leading-relaxed ${
          isDarkMode ? "text-black" : "text-gray-300 "
        }`}
      >
        <h1
          className={`secondary-heading w-full py-4 ${
            isDarkMode ? " border-black" : " border-gray-500"
          }`}
        >
          Documentation
        </h1>
        <p>
          Hardhat is a development environment for Ethereum software. It
          consists of different components for editing, compiling, debugging and
          deploying your smart contracts and dApps, all of which work together
          to create a complete development environment.
        </p>
        <p>To get started check out these sections:</p>
        <ul className="list-disc ml-4 space-y-2">
          <li className="text-tertiary ">
            <Link to="/hardhat-runner/docs/getting-started#overview">
              Getting Overview
            </Link>
          </li>
          <li className="text-tertiary ">
            <Link to="/hardhat-runner/docs/getting-started#quick-start">
              Quick start guide
            </Link>
          </li>
          <li className="text-tertiary ">
            <Link to="/tutorial">Step-by-step tutorial</Link>
          </li>
        </ul>

        <h1
          className={`tertiary-heading w-full border-b-2 py-4 ${
            isDarkMode ? " border-black" : " border-gray-500"
          }`}
        >
          Browse by component
        </h1>
        <div
          className={` border-l-8 border-[#42B983] w-full p-8 ${
            isDarkMode ? "bg-gray-200" : "bg-secondary"
          }`}
        >
          <h1>TIP</h1>
          <p className="mt-2">
            If you are in doubt about which component you are looking for, you
            can start here.
          </p>
        </div>
        {hardhatResources.map((resource) => (
          <div>
            <h1 className={`tertiary-heading w-full  py-4`}>
              {resource.title}
            </h1>
            <p>
              {resource.description}{" "}
              <span className="text-tertiary"> {resource.link} </span>
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default DocsSection
