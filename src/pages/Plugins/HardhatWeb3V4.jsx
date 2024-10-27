import React from "react"
import { Link } from "react-router-dom"
import { CodeSnippet } from "../../components"

const HardhatWeb3V4 = ({ isDarkMode }) => {
  const snippet1 = `npm install --save-dev @nomicfoundation/hardhat-web3-v4 'web3@4'`
  const snippet2 = `require("@nomicfoundation/hardhat-web3-v4");`
  const snippet3 = `import "@nomifoundation/hardhat-web3-v4";`
  const snippet4 = `require("@nomicfoundation/hardhat-web3-v4");

// task action function receives the Hardhat Runtime Environment as second argument
task("accounts", "Prints accounts", async (_, { web3 }) => {
  console.log(await web3.eth.getAccounts());
});`

  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-web3-v4</h1>
      <p>
        This plugin is a collaboration between the Nomic Foundation and
        <span className="text-tertiary"> ChainSafe </span> integrate{" "}
        <span className="text-tertiary">Web3.js </span> v4 into{" "}
        <span className="text-tertiary">hardhat </span>.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">What</h2>
      <p>
        This plugin brings to Hardhat the Web3 module and an initialized
        instance of Web3.
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
        By default, contract invocations will not be typesafe. Consider
        installing @chainsafe/hardhat-ts-artifact-plugin to obtain available
        contract methods and events. Read more about inferring types here.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Tasks</h2>
      <p>This plugin creates no additional tasks.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Environment extensions
      </h2>
      <p>
        This plugin adds the following elements to the
        HardhatRuntimeEnvironment:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>web3:</strong> The Web3.js module.
        </li>
        <li>
          <strong>web3:</strong> An instantiated Web3.js object connected to the
          selected network.
        </li>
      </ul>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Usage</h2>
      <p>
        Install it and access Web3.js through the Hardhat Runtime Environment
        anywhere you need it (tasks, scripts, tests, etc). For example, in your
        hardhat.config.js:
      </p>
      <CodeSnippet
        code={snippet4}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>And then run npx hardhat accounts to try it.</p>
      <p>
        Read the documentation on the Hardhat Runtime Environment to learn how
        to access the HRE in different ways to use Web3.js from anywhere the HRE
        is accessible.
      </p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-ledger"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-ledger</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomiclabs-hardhat-vyper"
          className="flex items-center space-x-2"
        >
          <span>@nomiclabs/hardhat-vyper</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatWeb3V4
