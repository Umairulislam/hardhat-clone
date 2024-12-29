import React from "react"
import { Link } from "react-router-dom"
import { CodeSnippet } from "../../components"
import { useSelector } from "react-redux"

const HardhatSolhint = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-solhint`
  const snippet2 = `require("@nomiclabs/hardhat-solhint");`
  const snippet3 = `import "@nomiclabs/hardhat-solhint";`

  return (
    <section
      className={`p-6 lg:px-32 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-solhint</h1>
      <p>
        <span className="text-tertiary"> Hardhat </span> plugin for integration
        with
        <span className="text-tertiary"> solhint linter </span>.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">What</h2>
      <p>
        This plugin runs solhint on the project's sources and prints the report.
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
      <p>
        This plugin overrides the check task, runs solhint on the project's
        sources and prints the report to the console.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600"> Usage</h2>
      <p>
        There are no additional steps you need to take for this plugin to work.
      </p>
      <p>Install it, run npx hardhat check and check the Solhint report.</p>
      <p>
        You may want to add a solhint configuration file to customize your rules
        or include a Solhint plugin.
      </p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomiclabs-hardhat-vyper"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomiclabs/hardhat-vyper</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomiclabs-hardhat-waffle"
          className="flex items-center space-x-2"
        >
          <span>@nomiclabs/hardhat-waffle</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatSolhint
