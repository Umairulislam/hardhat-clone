import CodeSnippet from "./CodeSnippet"
import PageNavigator from "./PageNavigator"

const PluginEthers = () => {
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
      className={`flex flex-col gap-6 justify-center mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray`}
    >
      <h1 className="tertiary_heading">hardhat-ethers</h1>
      <p>
        <u>Hardhat</u> plugin for integration with <u>ethers.js</u>.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>
        This plugin brings to Hardhat the Ethereum library ethers.js, which allows you to interact
        with the Ethereum blockchain in a simple way.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">Installation</h2>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>Or, if you are using TypeScript, add this to your hardhat.config.ts:</p>
      <CodeSnippet code={snippet3} language="javascript" />

      <h3 className="text-xl font-semibold border-b border-border pb-2">Tasks</h3>
      <p>This plugin creates no additional tasks.</p>

      <h4 className="text-xl font-semibold border-b border-border pb-2">Environment extensions</h4>
      <p>This plugin adds an ethers object to the Hardhat Runtime Environment.</p>
      <p>
        This object has the <u>same API</u> as ethers.js, with some extra Hardhat-specific
        functionality.
      </p>

      <h5 className="font-bold text-lg">Provider object</h5>
      <p>
        A provider field is added to ethers, which is an <u>ethers.Provider</u>
        automatically connected to the selected network.
      </p>

      <h6 className="font-bold text-lg">Helpers</h6>
      <p>These helpers are added to the ethers object:</p>
      <CodeSnippet code={snippet4} language="typescript" />
      <p>
        The <u>Contracts</u> and <u>ContractFactorys</u> returned by these helpers are connected to
        the first signer returned by getSigners by default.
      </p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Usage</h6>
      <p>There are no additional steps you need to take for this plugin to work.</p>
      <p>
        Install it and access ethers through the <u>Hardhat Runtime Environment</u> anywhere you
        need it (tasks, scripts, tests, etc). For example, in your hardhat.config.js:
      </p>
      <CodeSnippet code={snippet5} language="javascript" />
      <p>
        And then run <code>npx hardhat blockNumber</code> to try it.
      </p>
      <p>
        Read the documentation on the Hardhat Runtime Environment to learn how to access the HRE in
        different ways to use ethers.js from anywhere the HRE is accessible.
      </p>

      <h6 className="font-bold text-lg">Library linking</h6>
      <p>
        Some contracts need to be linked with libraries before they are deployed. You can pass the
        addresses of their libraries to the getContractFactory function with an object like this:
      </p>
      <CodeSnippet code={snippet6} language="javascript" />
      <p>
        This allows you to create a contract factory for the Example contract and link its
        ExampleLib library references to the address "0x...".
      </p>
      <p>
        To create a contract factory, all libraries must be linked. An error will be thrown
        informing you of any missing library.
      </p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Troubleshooting</h6>
      <h3 className="font-medium">Events are not being emitted</h3>
      <p>
        Ethers.js polls the network to check if some event was emitted (except when a
        WebSocketProvider is used; see below). This polling is done every 4 seconds. If you have a
        script or test that is not emitting an event, it's likely that the execution is finishing
        before the event is detected by the polling mechanism.
      </p>
      <p>
        If you are connecting to a Hardhat node using a WebSocketProvider, events should be emitted
        immediately. But keep in mind that you'll have to create this provider manually, since
        Hardhat only supports configuring networks via http. That is, you can't add a localhost
        network with a URL like <code>ws://127.0.0.1:8545</code>.
      </p>

      <PageNavigator
        prev={{
          label: "@nomicfoundation/hardhat-chai-matchers",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-chai-matchers",
        }}
        next={{
          label: "@nomicfoundation/hardhat-viem",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-viem",
        }}
      />
    </section>
  )
}

export default PluginEthers
