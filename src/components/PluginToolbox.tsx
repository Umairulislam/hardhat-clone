import CodeSnippet from "./CodeSnippet"
import PageNavigator from "./PageNavigator"

const PluginToolbox = () => {
  const snippet1 = `import helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";`
  return (
    <section
      className={`flex flex-col gap-6 justify-center mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray`}
    >
      <h1 className="tertiary_heading">Hardhat Toolbox</h1>

      <p>
        The @nomicfoundation/hardhat-toolbox plugin bundles all the commonly used packages and
        Hardhat plugins we recommend to start developing with Hardhat.
      </p>

      <p>When you use this plugin, you'll be able to:</p>

      <ul className="list-disc ml-4 flex flex-col gap-1">
        <li>
          Interact with your contracts using <u>ethers.js</u> and the <u>hardhat-ethers</u> plugin.
        </li>
        <li>
          Test your contracts with <u>Mocha</u>, <u>Chai</u> and our own{" "}
          <u>Hardhat Chai Matchers</u> plugin.
        </li>
        <li>
          Deploy your contracts with <u>Hardhat Ignition</u>.
        </li>
        <li>
          Interact with Hardhat Network with our <u>Hardhat Network Helpers</u>.
        </li>
        <li>
          Verify the source code of your contracts with the <u>hardhat-verify</u> plugin.
        </li>
        <li>
          Get metrics on the gas used by your contracts with the <u>hardhat-gas-reporter</u> plugin.
        </li>
        <li>
          Measure your test coverage with <u>solidity-coverage</u>.
        </li>
        <li>
          And, if you are using TypeScript, get type bindings for your contracts with{" "}
          <u>Typechain</u>.
        </li>
      </ul>

      <h1 className="text-xl font-semibold">Usage</h1>

      <p>
        To create a new project that uses the Toolbox, check our <u>Setting up a project guide</u>.
      </p>
      <p>
        If you want to migrate an existing Hardhat project to use the Toolbox, read{" "}
        <u>our migration guide</u>.
      </p>

      <h1 className="text-xl font-semibold">Network Helpers</h1>
      <p>
        When the Toolbox is installed using npm 7 or later, its peer dependencies are automatically
        installed. However, these dependencies won't be listed in the package.json. As a result,
        directly importing the Network Helpers can be problematic for certain tools or IDEs. To
        address this issue, the Toolbox re-exports the Hardhat Network Helpers. You can use them
        like this:
      </p>

      <CodeSnippet code={snippet1} language="javascript" />

      <PageNavigator
        prev={{ label: "Environment variables", href: "/hardhat-runner/plugins/#" }}
        next={{
          label: "@nomicfoundation/hardhat-toolbox-viem",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox-viem",
        }}
      />
    </section>
  )
}

export default PluginToolbox
