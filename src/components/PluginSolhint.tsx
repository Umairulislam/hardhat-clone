import PageNavigator from "./PageNavigator"
import CodeSnippet from "./CodeSnippet"

const PluginSolhint = () => {
  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-solhint`
  const snippet2 = `require("@nomiclabs/hardhat-solhint");`
  const snippet3 = `import "@nomiclabs/hardhat-solhint";`

  return (
    <section
      className={`flex flex-col gap-6 justify-center mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray`}
    >
      <h1 className="tertiary_heading">hardhat-solhint</h1>
      <p>
        <u> Hardhat </u> plugin for integration with
        <u> solhint linter </u>.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>This plugin runs solhint on the project's sources and prints the report.</p>

      <h3 className="text-xl font-semibold border-b border-border pb-2">Installation</h3>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>Or, if you are using TypeScript, add this to your hardhat.config.ts:</p>
      <CodeSnippet code={snippet3} language="javascript" />

      <h4 className="text-xl font-semibold border-b border-border pb-2">Tasks</h4>
      <p>
        This plugin overrides the check task, runs solhint on the project's sources and prints the
        report to the console.
      </p>

      <h5 className="text-xl font-semibold border-b border-border pb-2"> Usage</h5>
      <p>There are no additional steps you need to take for this plugin to work.</p>
      <p>Install it, run npx hardhat check and check the Solhint report.</p>
      <p>
        You may want to add a <u>solhint configuration</u> file to customize your rules or include a
        Solhint plugin.
      </p>

      <PageNavigator
        prev={{
          label: "@nomiclabs/hardhat-vyper",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-vyper",
        }}
        next={{
          label: "@nomiclabs/hardhat-solpp",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-solpp",
        }}
      />
    </section>
  )
}

export default PluginSolhint
