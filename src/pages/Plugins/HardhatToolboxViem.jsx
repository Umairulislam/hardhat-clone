import React from "react"

const HardhatToolboxViem = ({ isDarkMode }) => {
  return (
    <section
      className={`p-6 lg:px-36 text-sm font-light flex flex-col space-y-4 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">Hardhat Toolbox (Viem based)</h1>
      <p>
        The @nomicfoundation/hardhat-toolbox-viem plugin bundles all the
        commonly used packages and Hardhat plugins we recommend to start
        developing with Hardhat.
      </p>
      <p>When you use this plugin, you'll be able to:</p>
      <ul className="list-disc ml-4 space-y-2">
        <li>
          Interact with your contracts using{" "}
          <span className="text-tertiary">Viem</span> and the{" "}
          <span className="text-tertiary">hardhat-viem</span> plugin.
        </li>
        <li>
          Test your contracts with <span className="text-tertiary">Mocha</span>,{" "}
          <span className="text-tertiary">Chai</span> and{" "}
          <span className="text-tertiary">Chai as Promised</span>. Note: the
          plugin Hardhat Chai Matchers is currently not available for Viem.
        </li>
        <li>
          Deploy your contracts with{" "}
          <span className="text-tertiary">Hardhat Ignition</span>.
        </li>
        <li>
          Interact with Hardhat Network with our{" "}
          <span className="text-tertiary">Hardhat Network Helpers</span>.
        </li>
        <li>
          Verify the source code of your contracts with the{" "}
          <span className="text-tertiary">hardhat-verify</span> plugin.
        </li>
        <li>
          Get metrics on the gas used by your contracts with the
          <span className="text-tertiary">hardhat-gas-reporter</span>
          plugin.
        </li>
        <li>
          Measure your tests coverage with{" "}
          <span className="text-tertiary">solidity-coverage</span>.
        </li>
        <li>
          Note: you might want to pin Viem-related dependencies because Viem
          does not strictly follow semantic versioning for type changes. You can
          read more <span className="text-tertiary">here.</span>
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
        To create a new project that uses the Toolbox, check our{" "}
        <span className="text-tertiary">Setting up a project guide</span> but
        select the Create a TypeScript project (with Viem) option instead.
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
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-auto">
        <code>
          <span className="text-blue-400">import</span> helpers{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-green-400">
            "@nomicfoundation/hardhat-toolbox/network-helpers"
          </span>
          ;
        </code>
      </div>
      <br />
      <div class="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <a
          href="nomicfoundation-hardhat-toolbox"
          class="flex items-center space-x-2 "
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-toolbox</span>
        </a>
        <a
          href="nomicfoundation-hardhat-chai-matchers"
          class="flex items-center space-x-2 "
        >
          <span>@nomicfoundation-hardhat-chai-matchers</span>
          <span>&rarr;</span>
        </a>
      </div>
    </section>
  )
}

export default HardhatToolboxViem