import React from "react"
import { Link } from "react-router-dom"
import { CodeSnippet } from "../../components"

const HardhatTruffle5 = ({ isDarkMode }) => {
  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-truffle4 @nomiclabs/hardhat-web3-legacy web3@^0.20.7`
  const snippet2 = `require("@nomiclabs/hardhat-truffle4");`
  const snippet3 = `import "@nomiclabs/hardhat-truffle4";`

  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-truffle5</h1>
      <p>
        <span className="text-tertiary"> Hardhat </span>
        plugin for integration with TruffleContract from Truffle 5. This allows
        tests and scripts written for Truffle to work with Hardhat.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">What</h2>
      <p>
        This plugin brings to Hardhat TruffleContracts from Truffle 5. With it
        you can call contract() and artifacts.require() like you normally would
        with Truffle. Interact with your contracts with a familiar API from
        tasks, scripts and tests.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Required plugins
      </h2>
      <p>This plugin requires hardhat-web3 as a prerequisite.</p>

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
        An instance of TruffleEnvironmentArtifacts is injected into
        env.artifacts and the method contract() is injected into the global
        scope for using in tests.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Usage</h2>
      <p>
        There are no additional steps you need to take for this plugin to work.
        Install it, run npx hardhat test and your Truffle tests should run with
        no need to make any modifications.
      </p>
      <p>Take a look at the testing guide for a tutorial using it.</p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomiclabs-hardhat-web3"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomiclabs/hardhat-web3</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/plugins#community-plugins"
          className="flex items-center space-x-2"
        >
          <span>Community plugins</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatTruffle5
