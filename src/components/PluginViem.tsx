import CodeSnippet from "./CodeSnippet"
import PageNavigator from "./PageNavigator"

const PluginViem = () => {
  const snippet1 = `npm install --save-dev @nomicfoundation/hardhat-viem viem`
  const snippet2 = `require("@nomicfoundation/hardhat-viem");`
  const snippet3 = `import "@nomicfoundation/hardhat-viem";`
  const snippet4 = `import hre from "hardhat";

const publicClient = await hre.viem.getPublicClient();

const blockNumber = await publicClient.getBlockNumber();

const balance = await publicClient.getBalance({
  address: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
});`

  const snippet5 = `import hre from "hardhat";

const [fromWalletClient, toWalletClient] = await hre.viem.getWalletClients();

const hash = await fromWalletClient.sendTransaction({
  to: toWalletClient.account.address,
  value: parseEther("0.0001"),
});`

  const snippet6 = `import hre from "hardhat";

const walletClient = await hre.viem.getWalletClient(
  "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e"
);

const signature = await walletClient.signMessage({
  account,
  message: "hello world",
});`

  const snippet7 = `import hre from "hardhat";

const testClient = await hre.viem.getTestClient();

await testClient.mine({
  blocks: 1000000,
});`

  const snippet8 = `import hre from "hardhat";

const publicClient = await hre.viem.getPublicClient({
  pollingInterval: 1000,
  cacheTime: 2000,
});`

  const snippet9 = `import hre from "hardhat";

const contract = await hre.viem.deployContract("contractName", [
  "arg1",
  50,
  "arg3",
]);`

  const snippet10 = `import hre from "hardhat";

const [_, secondWalletClient] = await hre.viem.getWalletClients();

const contractA = await hre.viem.deployContract(
  "contractName",
  ["arg1", 50, "arg3"],
  {
    client: { wallet: secondWalletClient }
    gas: 1000000,
    value: parseEther("0.0001"),
    confirmations: 5, // 1 by default
  }
);`

  const snippet11 = `import hre from "hardhat";

const contract = await hre.viem.getContractAt(
  "contractName",
  "0x1234567890123456789012345678901234567890"
);`

  const snippet12 = `import hre from "hardhat";

const [_, secondWalletClient] = await hre.viem.getWalletClients();

const contract = await hre.viem.getContractAt(
  "contractName",
  "0x1234567890123456789012345678901234567890",
  { client: { wallet: secondWalletClient } }
);`

  const snippet13 = `let response = await contract.read.method1();
await contract.write.method2([10, "arg2"]);`

  const snippet14 = `import hre from "hardhat";

const { contract: contractName, deploymentTransaction } =
  await hre.viem.sendDeploymentTransaction(
    "contractName",
    ["arg1", 50, "arg3"],
    {
      client: { wallet: secondWalletClient },
      gas: 1000000,
      value: parseEther("0.0001"),
    }
  );`

  const snippet15 = `import hre from "hardhat";

const publicClient = await hre.viem.getPublicClient();
const { contractAddress } = await publicClient.waitForTransactionReceipt({
  hash: deploymentTransaction.hash,
});`

  const snippet16 = `const contractA = await hre.viem.deployContract(
  "contractName",
  ["arg1", 50, "arg3"],
  {
    libraries: {
      ExampleLib: "0x...",
    },
  }
);`

  const snippet17 = `import { ContractTypesMap } from "hardhat/types/artifacts";

const contract: ContractTypesMap["ContractName"];`

  return (
    <section
      className={`flex flex-col gap-6 justify-center mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray`}
    >
      <h1 className="tertiary_heading">hardhat-viem</h1>
      <p>
        <u>Hardhat</u> plugin for integration with <u>Viem</u> , a lightweight, composable, and
        type-safe Ethereum library.
      </p>
      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>
        This plugin integrates the Viem Ethereum library into your Hardhat development environment.
        Viem is an alternative to <u>ethers.js</u> that offers developers a different way to
        interact with the Ethereum blockchain.
      </p>
      <p>
        By installing and configuring hardhat-viem, you gain access to the capabilities of the Viem
        library directly within your Hardhat projects. This integration enables you to perform
        various Ethereum-related tasks using Viem's features and functionalities.
      </p>
      <p>
        <strong>Note:</strong> This plugin relies on the Viem library, so familiarity with{" "}
        <u>Viem's documentation</u> can enhance your experience when working with hardhat-viem.
      </p>

      <h3 className="text-xl font-semibold border-b border-border pb-2">Installation</h3>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>Or, if you are using TypeScript, add this to your hardhat.config.ts:</p>
      <CodeSnippet code={snippet3} language="javascript" />
      <p>
        <strong>Note:</strong> You might want to pin Viem-related dependencies because Viem does not
        strictly follow semantic versioning for type changes. You can read more <u>here</u>.
      </p>
      <h2 className="text-xl font-semibold border-b border-border pb-2">Required Plugins</h2>
      <p>No plugin dependencies.</p>

      <h4 className="text-xl font-semibold border-b border-border pb-2">Tasks</h4>
      <p>This plugin creates no additional tasks.</p>

      <h5 className="text-xl font-semibold border-b border-border pb-2">Environment Extensions</h5>
      <p>
        This plugin adds a <code>viem</code> object to the Hardhat Runtime Environment which
        provides a minimal set of capabilities for interacting with the blockchain.
      </p>

      <h6 className="font-bold text-lg">Clients</h6>
      <p>Viem supports three types of clients:</p>

      <h6 className="font-semibold">Public Client</h6>
      <p>
        A Public Client is an interface to "public" JSON-RPC API methods such as retrieving block
        numbers, transactions, reading from smart contracts, etc through Public Actions.
      </p>
      <CodeSnippet code={snippet4} language="javascript" />

      <h6 className="font-semibold">Wallet Client</h6>
      <p>
        A Wallet Client is an interface to interact with Ethereum Accounts and provides the ability
        to retrieve accounts, execute transactions, sign messages, etc. through Wallet Actions.
        import hre from "hardhat";
      </p>
      <CodeSnippet code={snippet5} language="javascript" />
      <CodeSnippet code={snippet6} language="javascript" />

      <h6 className="font-semibold">Test Client</h6>
      <p>
        A Test Client is an interface to "test" JSON-RPC API methods such as mining blocks,
        impersonating accounts, setting fees, etc. through <u>Test Actions</u>.
      </p>
      <CodeSnippet code={snippet7} language="javascript" />

      <h6 className="font-semibold">Client Options</h6>
      <p>
        You can pass options to the getPublicClient, getWalletClient, and getTestClient methods to
        customize the client's behavior.
      </p>
      <CodeSnippet code={snippet8} language="javascript" />
      <p>For a complete list of options, see:</p>
      <ul className="list-disc ml-4 flex flex-col gap-1 text-link-dark dark:text-link-light">
        <li> Public client parameters</li>
        <li>Wallet client parameters</li>
        <li>Test client parameters</li>
      </ul>

      <h6 className="font-bold text-lg mt-4">Contracts</h6>
      <p>
        The viem object provides convenient methods for deploying and interacting with smart
        contracts on the blockchain.
      </p>

      <h6 className="font-semibold">Deploying a Contract</h6>
      <p>To deploy a contract to the blockchain, use the deployContract method:</p>
      <CodeSnippet code={snippet9} language="javascript" />
      <p>
        By default, the first wallet client retrieved by hre.viem.getWalletClients() is used to
        deploy the contract. You can also specify a different wallet client by passing a third
        parameter, along with other properties, such as gas and value:
      </p>
      <CodeSnippet code={snippet10} language="javascript" />

      <h6 className="font-semibold">Retrieving an Existing Contract</h6>
      <p>
        If the contract is already deployed, you can retrieve an instance of it using the
        getContractAt method:
      </p>
      <CodeSnippet code={snippet11} language="javascript" />
      <p>
        By default, the first wallet client retrieved by hre.viem.getWalletClients() will be used
        for interacting with the contract. If you want to specify a different wallet client, you can
        do so by passing it as a third parameter, just like when deploying a contract:
      </p>
      <CodeSnippet code={snippet12} language="javascript" />

      <h6 className="font-semibold">Interacting with Contracts</h6>
      <p>
        Once you have an instance of a contract, you can interact with it by calling its methods:
      </p>
      <CodeSnippet code={snippet13} language="javascript" />

      <h6 className="font-semibold">Send Deployment Transaction</h6>
      <p>
        By default, the deployContract method sends a deployment transaction to the blockchain and
        waits for the transaction to be mined. If you want to send the transaction without waiting
        for it to be mined, you can do so by using sendDeploymentTransaction:
      </p>
      <CodeSnippet code={snippet14} language="javascript" />
      <p>Then, if you want to wait for the transaction to be mined, you can do:</p>
      <CodeSnippet code={snippet15} language="javascript" />

      <h6 className="font-semibold">Library Linking</h6>
      <p>
        Some contracts need to be linked with libraries before they are deployed. You can pass the
        addresses of their libraries to the deployContract and sendDeploymentTransaction functions
        with an object like this:
      </p>
      <CodeSnippet code={snippet16} language="javascript" />
      <p>
        This allows you to deploy a contract linked to the ExampleLib library at the address
        "0x...". To deploy a contract, all libraries must be linked. An error will be thrown if any
        libraries are missing.
      </p>

      <h6 className="font-semibold">Using ContractTypesMap for easier contract type imports</h6>
      <p>
        To simplify importing contract types in hardhat-viem, you can use the ContractTypesMap. This
        map contains the contract types of all contracts in your project, indexed by their names.
      </p>
      <CodeSnippet code={snippet17} language="javascript" />
      <p>
        This reduces the need for multiple imports and makes your code cleaner and easier to manage.
      </p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Usage</h6>
      <p>There are no additional steps you need to take for this plugin to work.</p>
      <p>
        Install it and access Viem through the Hardhat Runtime Environment anywhere you need it
        (tasks, scripts, tests, etc).
      </p>
      <p>
        Read the documentation on the <u>Hardhat Runtime Environment</u> to learn how to access the
        HRE in different ways to use Viem from anywhere the HRE is accessible.
      </p>

      <PageNavigator
        prev={{
          label: "@nomicfoundation/hardhat-ethers",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-ethers",
        }}
        next={{
          label: "@nomicfoundation/hardhat-verify",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-verify",
        }}
      />
    </section>
  )
}

export default PluginViem
