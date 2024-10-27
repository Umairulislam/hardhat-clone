import React from "react"
import { Link } from "react-router-dom"
import { CodeSnippet } from "../../components"

const HardhatVyper = ({ isDarkMode }) => {
  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-vyper`
  const snippet2 = `require("@nomiclabs/hardhat-vyper");`
  const snippet3 = `import "@nomiclabs/hardhat-vyper";`
  const snippet4 = `module.exports = {
  vyper: {
    version: "0.3.0",
  },
};`
  const snippet5 = `module.exports = {
  vyper: {
    compilers: [
      {
        version: "0.2.1",
      },
      {
        version: "0.3.10",
        settings: {
          evmVersion: "paris",
          optimize: "gas",
        },
      },
    ],
  },
};`
  const snippet6 = `#@ if mode == "test":
@external
def _mint_for_testing(_to: address, _token_id: uint256):
    self._mint(_to, _token_id)
#@ endif`

  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-vyper</h1>
      <p>
        <span className="text-tertiary"> Hardhat </span> plugin to develop smart
        contracts with Vyper.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">What</h2>
      <p>
        This plugin adds support for Vyper to Hardhat. Once installed, Vyper
        contracts can be compiled by running the compile task.
      </p>
      <p>
        This plugin generates the same artifact format as the built-in Solidity
        compiler, so that it can be used in conjunction with all other plugins.
      </p>
      <p>The Vyper compiler is run using the official binary releases.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Installation
      </h2>
      <p>First, you need to install the plugin by running</p>
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

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Required plugins
      </h2>
      <p>No plugins dependencies.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Tasks</h2>
      <p>This plugin creates no additional tasks.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Environment extensions
      </h2>
      <p>This plugin does not extend the Hardhat Runtime Environment.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Configuration
      </h2>
      <p>
        This plugin adds an optional vyper entry to Hardhat's config, which lets
        you specify the Vyper version to use.
      </p>
      <p>This is an example of how to set it:</p>
      <CodeSnippet
        code={snippet4}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        You can also configure multiple versions of the Vyper compiler, as well
        as the compiler settings evmVersion and optimize. See the Vyper docs for
        more info.
      </p>
      <CodeSnippet
        code={snippet5}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Usage</h2>
      <p>
        There are no additional steps you need to take for this plugin to work.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Test directives
      </h2>
      <p>
        Brownie allows you to use the test directive #@ if mode == "test": to
        specify when a portion of code should be included only for testing
        purposes.
      </p>
      <p>Example:</p>
      <CodeSnippet
        code={snippet6}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading">Test directives</h2>
      <p>
        The oldest vyper version supported by this plugin is 0.2.0. Versions
        older than this will not work and will throw an error.
      </p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-web3-v4"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-web3-v4</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomiclabs-hardhat-solhint"
          className="flex items-center space-x-2"
        >
          <span>@nomiclabs/hardhat-solhint</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatVyper
