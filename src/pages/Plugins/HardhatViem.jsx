import React from "react"
import { CodeSnippet } from "../../components"
import { Link } from "react-router-dom"

const HardhatViem = ({ isDarkMode }) => {
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
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-viem</h1>
      <p>
        <span className="text-tertiary">Hardhat</span> plugin for integration
        with <span className="text-tertiary">Viem</span> , a lightweight,
        composable, and type-safe Ethereum library.
      </p>
      <h2 className="plugin-heading border-b-[1px] border-gray-600">What</h2>
      <p>
        This plugin integrates the Viem Ethereum library into your Hardhat
        development environment. Viem is an alternative to ethers.js that offers
        developers a different way to interact with the Ethereum blockchain.
      </p>
      <p>
        By installing and configuring hardhat-viem, you gain access to the
        capabilities of the Viem library directly within your Hardhat projects.
        This integration enables you to perform various Ethereum-related tasks
        using Viem's features and functionalities.
      </p>
      <p>
        <strong>Note:</strong> This plugin relies on the Viem library, so
        familiarity with Viem's documentation can enhance your experience when
        working with hardhat-viem.
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
      <p>
        <strong>Note:</strong> You might want to pin Viem-related dependencies
        because Viem does not strictly follow semantic versioning for type
        changes. You can read more <a href="#">here</a>.
      </p>
      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Required Plugins
      </h2>
      <p>No plugin dependencies.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Tasks</h2>
      <p>This plugin creates no additional tasks.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Environment Extensions
      </h2>
      <p>
        This plugin adds a <code>viem</code> object to the Hardhat Runtime
        Environment which provides a minimal set of capabilities for interacting
        with the blockchain.
      </p>
      <h2 className="font-bold text-lg mt-4">Clients</h2>
      <p>Viem supports three types of clients:</p>
      <h4 className="font-semibold">Public Client</h4>
      <p>
        A Public Client is an interface to "public" JSON-RPC API methods such as
        retrieving block numbers, transactions, reading from smart contracts,
        etc through Public Actions.
      </p>
      <CodeSnippet
        code={snippet4}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h4 className="font-semibold">Wallet Client</h4>
      <p>
        A Wallet Client is an interface to interact with Ethereum Accounts and
        provides the ability to retrieve accounts, execute transactions, sign
        messages, etc. through Wallet Actions. import hre from "hardhat";
      </p>
      <CodeSnippet
        code={snippet5}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <CodeSnippet
        code={snippet6}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h4 className="font-semibold">Test Client</h4>
      <p>
        A Test Client is an interface to "test" JSON-RPC API methods such as
        mining blocks, impersonating accounts, setting fees, etc. through Test
        Actions.
      </p>
      <CodeSnippet
        code={snippet7}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h4 className="font-semibold">Client Options</h4>
      <p>
        You can pass options to the getPublicClient, getWalletClient, and
        getTestClient methods to customize the client's behavior.
      </p>
      <CodeSnippet
        code={snippet8}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        For a complete list of options, see:
        <ul className="text-tertiary list-disc pl-4 mt-4 space-y-1">
          <li> Public client parameters</li>
          <li>Wallet client parameters</li>
          <li>Test client parameters</li>
        </ul>
      </p>
      <h2 className="font-bold text-lg mt-4">Contracts</h2>
      <p>
        The viem object provides convenient methods for deploying and
        interacting with smart contracts on the blockchain.
      </p>
      <h4 className="font-semibold">Deploying a Contract</h4>
      <p>
        To deploy a contract to the blockchain, use the deployContract method:
      </p>
      <CodeSnippet
        code={snippet9}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        By default, the first wallet client retrieved by
        hre.viem.getWalletClients() is used to deploy the contract. You can also
        specify a different wallet client by passing a third parameter, along
        with other properties, such as gas and value:
      </p>
      <CodeSnippet
        code={snippet10}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h4 className="font-semibold">Retrieving an Existing Contract</h4>
      <p>
        If the contract is already deployed, you can retrieve an instance of it
        using the getContractAt method:
      </p>
      <CodeSnippet
        code={snippet11}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        By default, the first wallet client retrieved by
        hre.viem.getWalletClients() will be used for interacting with the
        contract. If you want to specify a different wallet client, you can do
        so by passing it as a third parameter, just like when deploying a
        contract:
      </p>
      <CodeSnippet
        code={snippet12}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h4 className="font-semibold">Interacting with Contracts</h4>
      <p>
        Once you have an instance of a contract, you can interact with it by
        calling its methods:
      </p>
      <CodeSnippet
        code={snippet13}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h4 className="font-semibold">Send Deployment Transaction</h4>
      <p>
        By default, the deployContract method sends a deployment transaction to
        the blockchain and waits for the transaction to be mined. If you want to
        send the transaction without waiting for it to be mined, you can do so
        by using sendDeploymentTransaction:
      </p>
      <CodeSnippet
        code={snippet14}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        Then, if you want to wait for the transaction to be mined, you can do:
      </p>
      <CodeSnippet
        code={snippet15}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h4 className="font-semibold">Library Linking</h4>
      <p>
        Some contracts need to be linked with libraries before they are
        deployed. You can pass the addresses of their libraries to the
        deployContract and sendDeploymentTransaction functions with an object
        like this:
      </p>
      <CodeSnippet
        code={snippet16}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        This allows you to deploy a contract linked to the ExampleLib library at
        the address "0x...". To deploy a contract, all libraries must be linked.
        An error will be thrown if any libraries are missing.
      </p>
      <h4 className="font-semibold">
        Using ContractTypesMap for easier contract type imports
      </h4>
      <p>
        To simplify importing contract types in hardhat-viem, you can use the
        ContractTypesMap. This map contains the contract types of all contracts
        in your project, indexed by their names.
      </p>
      <CodeSnippet
        code={snippet17}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        This reduces the need for multiple imports and makes your code cleaner
        and easier to manage.
      </p>
      <h2 className="plugin-heading border-b-[1px] border-gray-600">Usage</h2>
      <p>
        There are no additional steps you need to take for this plugin to work.
      </p>
      <p>
        Install it and access Viem through the Hardhat Runtime Environment
        anywhere you need it (tasks, scripts, tests, etc).
      </p>
      <p>
        Read the documentation on the Hardhat Runtime Environment to learn how
        to access the HRE in different ways to use Viem from anywhere the HRE is
        accessible.
      </p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-ethers"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-ethers</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-verify"
          className="flex items-center space-x-2"
        >
          <span>@nomicfoundation/hardhat-verify</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatViem
