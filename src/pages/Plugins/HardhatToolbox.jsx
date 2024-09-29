import React from "react"
import "../../styles/tailwind.css"

const HardhatToolbox = ({ isDarkMode }) => {
  return (
    <section
      className={`p-6 lg:px-36 text-sm font-light flex flex-col space-y-4 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">Hardhat Toolbox</h1>
      <p>
        The @nomicfoundation/hardhat-toolbox plugin bundles all the commonly
        used packages and Hardhat plugins we recommend to start developing with
        Hardhat.
      </p>
      <p>When you use this plugin, you'll be able to:</p>
      <ul class="list-disc ml-4 space-y-2 ">
        <li>
          Interact with your contracts using{" "}
          <a
            href="https://docs.ethers.org/v6/"
            target="_blank"
            className="text-tertiary"
          >
            ethers.js
          </a>{" "}
          and the{" "}
          <a href="nomicfoundation-hardhat-ethers" className="text-tertiary">
            hardhat-ethers
          </a>{" "}
          plugin.
        </li>
        <li>
          Test your contracts with{" "}
          <a
            href="https://mochajs.org/"
            target="_blank"
            className="text-tertiary"
          >
            Mocha
          </a>
          ,{" "}
          <a
            href="https://www.chaijs.com/"
            target="_blank"
            className="text-tertiary"
          >
            Chai
          </a>
          , and our own{" "}
          <a
            href="/hardhat-chai-matchers/docs/overview"
            className="text-tertiary"
          >
            Hardhat Chai Matchers
          </a>{" "}
          plugin.
        </li>
        <li>
          Deploy your contracts with{" "}
          <a
            href="/ignition/docs/getting-started#overview"
            className="text-tertiary"
          >
            Hardhat Ignition
          </a>
          .
        </li>
        <li>
          Interact with Hardhat Network with our{" "}
          <a
            href="/hardhat-network-helpers/docs/overview"
            className="text-tertiary"
          >
            Hardhat Network Helpers
          </a>
          .
        </li>
        <li>
          Verify the source code of your contracts with the{" "}
          <a href="nomicfoundation-hardhat-verify" className="text-tertiary">
            hardhat-verify
          </a>{" "}
          plugin.
        </li>
        <li>
          Get metrics on the gas used by your contracts with the{" "}
          <a
            href="https://github.com/cgewecke/hardhat-gas-reporter"
            target="_blank"
            className="text-tertiary"
          >
            hardhat-gas-reporter
          </a>{" "}
          plugin.
        </li>
        <li>
          Measure your test coverage with{" "}
          <a
            href="https://github.com/sc-forks/solidity-coverage"
            target="_blank"
            className="text-tertiary"
          >
            solidity-coverage
          </a>
          .
        </li>
        <li>
          And, if you are using TypeScript, get type bindings for your contracts
          with{" "}
          <a
            href="https://github.com/dethcrypto/TypeChain/"
            target="_blank"
            className="text-tertiary"
          >
            Typechain
          </a>
          .
        </li>
      </ul>
      <h1 className="font-bold text-lg">Usage</h1>
      <p>
        To create a new project that uses the Toolbox, check our{" "}
        <a
          href="/hardhat-runner/docs/guides/project-setup"
          className="text-tertiary"
        >
          Setting up a project guide
        </a>
        .
      </p>
      <p>
        If you want to migrate an existing Hardhat project to use the Toolbox,
        read{" "}
        <a
          href="/hardhat-runner/docs/advanced/migrating-from-hardhat-waffle"
          className="text-tertiary"
        >
          our migration guide.
        </a>
      </p>
      <h1 className="font-bold text-lg">Network Helpers</h1>
      <p>
        {" "}
        When the Toolbox is installed using npm 7 or later, its peer
        dependencies are automatically installed. However, these dependencies
        won't be listed in the package.json. As a result, directly importing the
        Network Helpers can be problematic for certain tools or IDEs. To address
        this issue, the Toolbox re-exports the Hardhat Network Helpers. You can
        use them like this:
      </p>
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap ">
          <code>
            <span className="text-blue-400">import</span> helpers{" "}
            <span className="text-blue-400">from</span>{" "}
            <span className="text-green-400">
              "@nomicfoundation/hardhat-toolbox/network-helpers"
            </span>
            ;
          </code>
        </pre>
      </div>
      <br />
      <div class="border-t border-gray-600 pt-4 flex justify-between text-tertiary text-xs">
        <a href="#" class="flex items-center space-x-2 ">
          <span>&larr;</span>
          <span>Environment variables</span>
        </a>
        <a
          href="nomicfoundation-hardhat-toolbox-viem"
          class="flex items-center space-x-2 "
        >
          <span>@nomicfoundation/hardhat-toolbox-viem</span>
          <span>&rarr;</span>
        </a>
      </div>
    </section>
  )
}

export default HardhatToolbox
