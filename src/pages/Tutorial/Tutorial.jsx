import { useSelector } from "react-redux"
import { hardhatTutorial } from "../../assets"

const Tutorial = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  return (
    <section
      className={`p-6 lg:px-32 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <div>
        <img src={hardhatTutorial} alt="hardhat-tutorial" />
      </div>
      <div className="space-y-4">
        <h1 className="tertiary-heading">Hardhat's tutorial for beginners</h1>
        <p>
          Welcome to our beginners guide to Ethereum contracts and dApp
          development. This tutorial aims to quickly get you set up to build
          something from scratch.
        </p>
        <p>
          To orchestrate this process we're going to use Hardhat, a development
          environment that facilitates building on Ethereum. It helps developers
          manage and automate the recurring tasks that are inherent to the
          process of building smart contracts and dApps, and it allows you to
          easily introduce more functionality around this workflow. This means
          compiling and testing at the very core.
        </p>
        <p>
          Hardhat also comes built-in with Hardhat Network, a local Ethereum
          network designed for development. It allows you to deploy your
          contracts, run your tests and debug your code.
        </p>
        <p>In this tutorial we'll guide you through:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Setting up your Node.js environment for Ethereum development</li>
          <li>Creating and configuring a Hardhat project</li>
          <li>
            The basics of a Solidity smart contract that implements a token
          </li>
          <li>Writing automated tests for your contract using Hardhat</li>
          <li>Debugging Solidity with console.log() using Hardhat Network</li>
          <li>
            Deploying your contract to Hardhat Network and Ethereum testnets
          </li>
        </ul>
        <p>To follow this tutorial you should be able to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Write code in <span className="text-tertiary">JavaScript</span>
          </li>
          <li>
            Operate a <span className="text-tertiary">terminal</span>
          </li>
          <li>
            Use <span className="text-tertiary">git</span>
          </li>
          <li>
            Understand the basics of how{" "}
            <span className="text-tertiary">smart contracts</span> work
          </li>
          <li>
            Set up a <span className="text-tertiary">Coinbase</span> or{" "}
            <span className="text-tertiary">Metamask</span> wallet
          </li>
        </ul>
        <p>
          If you can't do any of the above, follow the links and take some time
          to learn the basics.
        </p>
      </div>
    </section>
  )
}

export default Tutorial
