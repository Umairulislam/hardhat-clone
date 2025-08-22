import { hardhatTutorial } from "../../assets"

const TutorialOverview = () => {
  return (
    <section className="flex flex-col gap-6 mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray ">
      <img src={hardhatTutorial} alt="hardhat-tutorial" width={700} className="mx-auto" />

      <h1 className="tertiary_heading">Hardhat's tutorial for beginners</h1>
      <p>
        Welcome to our beginners guide to Ethereum contracts and dApp development. This tutorial
        aims to quickly get you set up to build something from scratch.
      </p>
      <p>
        To orchestrate this process we're going to use Hardhat, a development environment that
        facilitates building on Ethereum. It helps developers manage and automate the recurring
        tasks that are inherent to the process of building smart contracts and dApps, and it allows
        you to easily introduce more functionality around this workflow. This means compiling and
        testing at the very core.
      </p>
      <p>
        Hardhat also comes built-in with Hardhat Network, a local Ethereum network designed for
        development. It allows you to deploy your contracts, run your tests and debug your code.
      </p>
      <p>In this tutorial we'll guide you through:</p>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>Setting up your Node.js environment for Ethereum development</li>
        <li>Creating and configuring a Hardhat project</li>
        <li>The basics of a Solidity smart contract that implements a token</li>
        <li>Writing automated tests for your contract using Hardhat</li>
        <li>Debugging Solidity with console.log() using Hardhat Network</li>
        <li>Deploying your contract to Hardhat Network and Ethereum testnets</li>
      </ul>
      <p>To follow this tutorial you should be able to:</p>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Write code in <u>JavaScript</u>
        </li>
        <li>
          Operate a <u>terminal</u>
        </li>
        <li>
          Use <u>git</u>
        </li>
        <li>
          Understand the basics of how <u>smart contracts</u> work
        </li>
        <li>
          Set up a <u>Coinbase</u> or <u>Metamask</u> wallet
        </li>
      </ul>
      <p>
        If you can't do any of the above, follow the links and take some time to learn the basics.
      </p>
    </section>
  )
}

export default TutorialOverview
