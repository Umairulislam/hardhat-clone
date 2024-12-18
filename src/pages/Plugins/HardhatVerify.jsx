import React from "react"
import { CodeSnippet } from "../../components"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const HardhatVerify = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const snippet1 = `npm install --save-dev @nomicfoundation/hardhat-verify`
  const snippet2 = `require("@nomicfoundation/hardhat-verify");`
  const snippet3 = `import "@nomicfoundation/hardhat-verify";`
  const snippet4 = `module.exports = {
  networks: {
    mainnet: { ... }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "YOUR_ETHERSCAN_API_KEY"
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};`

  const snippet5 = `npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"`

  const snippet6 = `struct Point {
  uint x;
  uint y;
}

contract Foo {
  constructor (uint x, string s, Point memory point, bytes b) { ... }
}`

  const snippet7 = `module.exports = [
  50,
  "a string argument",
  {
    x: 10,
    y: 5,
  },
  // bytes have to be 0x-prefixed
  "0xabcdef",
];`

  const snippet8 = `npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS`

  const snippet9 = `hardhat verify --libraries libraries.js OTHER_ARGS`

  const snippet10 = `module.exports = {
  SomeLibrary: "0x...",
};`

  const snippet11 = `module.exports = {
  networks: {
    mainnet: { ... },
    testnet: { ... }
  },
  etherscan: {
    apiKey: {
        mainnet: "YOUR_ETHERSCAN_API_KEY",
        optimisticEthereum: "YOUR_OPTIMISTIC_ETHERSCAN_API_KEY",
        arbitrumOne: "YOUR_ARBISCAN_API_KEY",
    }
  }
};`

  const snippet12 = `etherscan: {
  apiKey: {
    goerli: "<goerli-api-key>"
  },
  customChains: [
    {
      network: "goerli",
      chainId: 5,
      urls: {
        apiURL: "https://api-goerli.etherscan.io/api",
        browserURL: "https://goerli.etherscan.io"
      }
    }
  ]
}`

  const snippet13 = `sourcify: {
  enabled: true,
  // Optional: specify a different Sourcify server
  apiUrl: "https://sourcify.dev/server",
  // Optional: specify a different Sourcify repository
  browserUrl: "https://repo.sourcify.dev",
}`

  const snippet14 = `npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS`

  const snippet15 = `sourcify: {
  enabled: false,
}`

  const snippet16 = `await hre.run("verify:verify", {
  address: contractAddress,
  constructorArguments: [
    50,
    "a string argument",
    {
      x: 10,
      y: 5,
    },
    "0xabcdef",
  ],
});`

  const snippet17 = `hre.run("verify:verify", {
  // other args
  libraries: {
    SomeLibrary: "0x...",
  }
}`

  const snippet18 = `import { Etherscan } from "@nomicfoundation/hardhat-verify/etherscan";

const instance = new Etherscan(
  "abc123def123", // Etherscan API key
  "https://api.etherscan.io/api", // Etherscan API URL
  "https://etherscan.io" // Etherscan browser URL
);

if (!instance.isVerified("0x123abc...")) {
  const { message: guid } = await instance.verify(
    // Contract address
    "0x123abc...",
    // Contract source code
    '{"language":"Solidity","sources":{"contracts/Sample.sol":{"content":"// SPDX-Lic..."}},"settings":{ ... }}',
    // Contract name
    "contracts/Sample.sol:MyContract",
    // Compiler version
    "v0.8.19+commit.7dd6d404",
    // Encoded constructor arguments
    "0000000000000000000000000000000000000000000000000000000000000032"
  );

  await sleep(1000);
  const verificationStatus = await instance.getVerificationStatus(guid);

  if (verificationStatus.isSuccess()) {
    const contractURL = instance.getContractUrl("0x123abc...");
    console.log(
      'Successfully verified contract "MyContract" on Etherscan'
    );
  }
}`

  const snippet19 = `import { Sourcify } from "@nomicfoundation/hardhat-verify/sourcify";

const instance = new Sourcify(
  1,
  "https://sourcify.dev/server",
  "https://repo.sourcify.dev"
); // Set chainId

if (!instance.isVerified("0x123abc...")) {
  const sourcifyResponse = await instance.verify("0x123abc...", {
    "metadata.json": "{...}",
    "otherFile.sol": "...",
  });
  if (sourcifyResponse.isOk()) {
    const contractURL = instance.getContractUrl(
      "0x123abc...",
      sourcifyResponse.status
    );
    console.log('Successfully verified contract on Sourcify;
  }
}`

  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-verify</h1>
      <p>
        <span className="text-tertiary">Hardhat</span> plugin to verify the
        source of code of deployed contracts.
      </p>
      <h2 className="plugin-heading border-b-[1px] border-gray-600">What</h2>
      <p>
        This plugin helps you verify the source code for your Solidity
        contracts. At the moment, it supports Etherscan-based explorers,
        explorers compatible with its API like Blockscout and Sourcify.
      </p>
      <p>
        It's smart and it tries to do as much as possible to facilitate the
        process:
      </p>
      <ul className="list-disc pl-4 mt-4 space-y-1">
        <li>
          Just provide the deployment address and constructor arguments, and the
          plugin will detect locally which contract to verify.
        </li>
        <li>
          If your contract uses Solidity libraries, the plugin will detect them
          and deal with them automatically. You don't need to do anything about
          them.
        </li>
        <li>
          A simulation of the verification process will run locally, allowing
          the plugin to detect and communicate any mistakes during the process.
        </li>
        <li>
          Once the simulation is successful the contract will be verified using
          the Etherscan API.
        </li>
      </ul>

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
      <p>
        This plugin provides the verify task, which allows you to verify
        contracts through Sourcify and Etherscan's service.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Environment Extensions
      </h2>
      <p>This plugin does not extend the environment.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Usage</h2>
      <p>
        You need to add the following Etherscan and Sourcify configs to your
        hardhat.config.js file:
      </p>
      <CodeSnippet
        code={snippet4}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        Alternatively you can specify more than one block explorer API key, by
        passing an object under the apiKey property, see Multiple API keys and
        alternative block explorers .
      </p>
      <p>
        Lastly, run the verify task, passing the address of the contract, the
        network where it's deployed, and the constructor arguments that were
        used to deploy it (if any):
      </p>
      <CodeSnippet
        code={snippet5}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading">Complex arguments</h2>
      <p>
        When the constructor has a complex argument list, you'll need to write a
        javascript module that exports the argument list. The expected format is
        the same as a constructor list for an ethers contract. For example, if
        you have a contract like this:
      </p>
      <CodeSnippet
        code={snippet6}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>then you can use an arguments.js file like this:</p>
      <CodeSnippet
        code={snippet7}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        Where the third argument represents the value for the point parameter.
      </p>
      <p>
        The module can then be loaded by the verify task when invoked like this:
      </p>
      <CodeSnippet
        code={snippet8}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading">Libraries with undetectable addresses</h2>
      <p>
        Some library addresses are undetectable. If your contract uses a library
        only in the constructor, then its address cannot be found in the
        deployed bytecode.
      </p>
      <p>
        To supply these missing addresses, you can create a javascript module
        that exports a library dictionary and pass it through the --libraries
        parameter:
      </p>
      <CodeSnippet
        code={snippet9}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>where libraries.js looks like this:</p>
      <CodeSnippet
        code={snippet10}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading">
        Multiple API keys and alternative block explorers
      </h2>
      <p>
        If your project targets multiple EVM-compatible networks that have
        different explorers, you'll need to set multiple API keys.
      </p>
      <p>
        To configure the API keys for the chains you are using, provide an
        object under etherscan/apiKey with the identifier of each chain as the
        key. This is not necessarily the same name that you are using to define
        the network. For example, if you are going to verify contracts in
        Ethereum mainnet, Optimism and Arbitrum, your config would look like
        this:
      </p>
      <CodeSnippet
        code={snippet11}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        To see the full list of supported networks, run npx hardhat verify
        --list-networks. The identifiers shown there are the ones that should be
        used as keys in the apiKey object.
      </p>

      <h2 className="plugin-heading">Adding support for other networks</h2>
      <p>
        If the chain you are using is not in the list, you can manually add the
        necessary information to verify your contracts on it. For this you need
        three things: the chain id of the network, the URL of the verification
        endpoint, and the URL of the explorer.
      </p>
      <p>
        For example, if Goerli wasn't supported, you could add it like this:
      </p>
      <CodeSnippet
        code={snippet12}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        Keep in mind that the name you are giving to the network in customChains
        is the same one that has to be used in the apiKey object.
      </p>
      <p>
        To see which custom chains are supported, run npx hardhat verify
        --list-networks.
      </p>

      <h2 className="plugin-heading">Verifying on Sourcify</h2>
      <p>
        To verify a contract using Sourcify, you need to add to your Hardhat
        config:
      </p>
      <CodeSnippet
        code={snippet13}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        and then run the verify task, passing the address of the contract and
        the network where it's deployed:
      </p>
      <CodeSnippet
        code={snippet14}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        <strong>Note:</strong> Constructor arguments are not required for
        Sourcify verification, but you'll need to provide them if you also have
        Etherscan verification enabled.
      </p>
      <p>
        To disable Sourcify verification and suppress related messages, set
        enabled to false:
      </p>
      <CodeSnippet
        code={snippet15}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading">Using programmatically</h2>
      <p>
        To call the verification task from within a Hardhat task or script, use
        the "verify:verify" subtask. Assuming the same contract as above, you
        can run the subtask like this:
      </p>
      <CodeSnippet
        code={snippet16}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>If the verification is not successful, an error will be thrown.</p>
      <h4 className="font-semibold">
        Providing libraries from a script or task
      </h4>
      <p>
        If your contract has libraries with undetectable addresses, you may pass
        the libraries parameter with a dictionary specifying them:
      </p>
      <CodeSnippet
        code={snippet17}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h4 className="font-semibold">
        Advanced Usage: Using the Etherscan and Sourcify classes from another
        plugin
      </h4>
      <p>
        Both Etherscan and Sourcify classes can be imported from the plugin for
        direct use.
      </p>
      <ul className="list-disc pl-4 mt-4 space-y-1">
        <li>
          <h4 className="font-semibold mb-2">Etherscan Class Usage</h4>
          <CodeSnippet
            code={snippet18}
            language="javascript"
            showLineNumbers={true}
            isCopyable={true}
          />
        </li>
        <br />
        <li>
          <h4 className="font-semibold mb-2">Sourcify Class Usage</h4>
          <CodeSnippet
            code={snippet19}
            language="javascript"
            showLineNumbers={true}
            isCopyable={true}
          />
        </li>
      </ul>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        How it works
      </h2>
      <p>
        he plugin works by fetching the bytecode in the given address and using
        it to check which contract in your project corresponds to it. Besides
        that, some sanity checks are performed locally to make sure that the
        verification won't fail.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Known limitations
      </h2>
      <ul className="list-disc pl-4 mt-4 space-y-1">
        <li>
          Adding, removing, moving or renaming new contracts to the hardhat
          project or reorganizing the directory structure of contracts after
          deployment may alter the resulting bytecode in some solc versions. See
          this Solidity issue for further information.
        </li>
      </ul>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-viem"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-viem</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-foundry"
          className="flex items-center space-x-2"
        >
          <span>@nomicfoundation/hardhat-foundry</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatVerify
