import React from "react"
import { CodeSnippet } from "../../components"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const HardhatEthers = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const snippet1 = `npm install --save-dev @nomicfoundation/hardhat-ethers ethers`
  const snippet2 = `require("@nomicfoundation/hardhat-ethers");`
  const snippet3 = `import "@nomicfoundation/hardhat-ethers";`
  const snippet4 = `interface Libraries {
  [libraryName: string]: string;
}

interface FactoryOptions {
  signer?: ethers.Signer;
  libraries?: Libraries;
}

function deployContract(name: string, constructorArgs?: any[], signer?: ethers.Signer): Promise<ethers.Contract>;

function getContractFactory(name: string, signer?: ethers.Signer): Promise<ethers.ContractFactory>;

function getContractFactory(name: string, factoryOptions: FactoryOptions): Promise<ethers.ContractFactory>;

function getContractFactory(abi: any[], bytecode: ethers.utils.BytesLike, signer?: ethers.Signer): Promise<ethers.ContractFactory>;

function getContractAt(name: string, address: string, signer?: ethers.Signer): Promise<ethers.Contract>;

function getContractAt(abi: any[], address: string, signer?: ethers.Signer): Promise<ethers.Contract>;

function getSigners() => Promise<ethers.Signer[]>;

function getSigner(address: string) => Promise<ethers.Signer>;

function getImpersonatedSigner(address: string) => Promise<ethers.Signer>;

function getContractFactoryFromArtifact(artifact: Artifact, signer?: ethers.Signer): Promise<ethers.ContractFactory>;

function getContractFactoryFromArtifact(artifact: Artifact, factoryOptions: FactoryOptions): Promise<ethers.ContractFactory>;

function getContractAtFromArtifact(artifact: Artifact, address: string, signer?: ethers.Signer): Promise<ethers.Contract>;`

  const snippet5 = `require("@nomicfoundation/hardhat-ethers");

// task action function receives the Hardhat Runtime Environment as second argument
task(
  "blockNumber",
  "Prints the current block number",
  async (_, { ethers }) => {
    const blockNumber = await ethers.provider.getBlockNumber();
    console.log("Current block number: " + blockNumber);
  }
);

module.exports = {};`

  const snippet6 = `const contractFactory = await this.env.ethers.getContractFactory("Example", {
  libraries: {
    ExampleLib: "0x...",
  },
});`

  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-ethers</h1>
      <p>
        <span className="text-tertiary">Hardhat</span> plugin for integration
        with <span className="text-tertiary">ethers.js</span>.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">What</h2>
      <p>
        This plugin brings to Hardhat the Ethereum library ethers.js, which
        allows you to interact with the Ethereum blockchain in a simple way.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Installation
      </h2>
      <CodeSnippet
        code={snippet1}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet
        code={snippet2}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        Or, if you are using TypeScript, add this to your hardhat.config.ts:
      </p>
      <CodeSnippet
        code={snippet3}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Tasks</h2>
      <p>This plugin creates no additional tasks.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Environment extensions
      </h2>
      <p>
        This plugin adds an ethers object to the Hardhat Runtime Environment.
      </p>
      <p>
        This object has the <span className="text-tertiary">same API</span> as
        ethers.js, with some extra Hardhat-specific functionality.
      </p>

      <h2 className="font-bold text-lg mt-4">Provider object</h2>
      <p>
        A provider field is added to ethers, which is an{" "}
        <span className="text-tertiary">ethers.Provider</span>
        automatically connected to the selected network.
      </p>

      <h2 className="font-bold text-lg mt-4">Helpers</h2>
      <p>These helpers are added to the ethers object:</p>
      <CodeSnippet
        code={snippet4}
        language="typescript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <p>
        The <span className="text-tertiary">Contracts</span> and{" "}
        <span className="text-tertiary">ContractFactorys</span> returned by
        these helpers are connected to the first signer returned by getSigners
        by default.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Usage</h2>
      <p>
        There are no additional steps you need to take for this plugin to work.
      </p>
      <p>
        Install it and access ethers through the{" "}
        <span className="text-primary">Hardhat Runtime Environment</span>
        anywhere you need it (tasks, scripts, tests, etc). For example, in your
        hardhat.config.js:
      </p>
      <CodeSnippet
        code={snippet5}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <p>
        And then run <code>npx hardhat blockNumber</code> to try it.
      </p>
      <p>
        Read the documentation on the Hardhat Runtime Environment to learn how
        to access the HRE in different ways to use ethers.js from anywhere the
        HRE is accessible.
      </p>

      <h2 className="font-bold text-lg mt-4">Library linking</h2>
      <p>
        Some contracts need to be linked with libraries before they are
        deployed. You can pass the addresses of their libraries to the
        getContractFactory function with an object like this:
      </p>
      <CodeSnippet
        code={snippet6}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        This allows you to create a contract factory for the Example contract
        and link its ExampleLib library references to the address "0x...".
      </p>
      <p>
        To create a contract factory, all libraries must be linked. An error
        will be thrown informing you of any missing library.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Troubleshooting
      </h2>
      <h3 className="font-bold text-md mt-2">Events are not being emitted</h3>
      <p>
        Ethers.js polls the network to check if some event was emitted (except
        when a WebSocketProvider is used; see below). This polling is done every
        4 seconds. If you have a script or test that is not emitting an event,
        it's likely that the execution is finishing before the event is detected
        by the polling mechanism.
      </p>
      <p>
        If you are connecting to a Hardhat node using a WebSocketProvider,
        events should be emitted immediately. But keep in mind that you'll have
        to create this provider manually, since Hardhat only supports
        configuring networks via http. That is, you can't add a localhost
        network with a URL like <code>ws://127.0.0.1:8545</code>.
      </p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-chai-matchers"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-chai-matchers</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-viem"
          className="flex items-center space-x-2"
        >
          <span>@nomicfoundation/hardhat-viem</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatEthers
