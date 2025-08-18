import CodeSnippet from "./CodeSnippet"
import PageNavigator from "./PageNavigator"

const PluginSolpp = () => {
  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-solpp`
  const snippet2 = `require("@nomiclabs/hardhat-solpp");`
  const snippet3 = `import "@nomiclabs/hardhat-solpp";`

  return (
    <section
      className={`flex flex-col gap-6 justify-center mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray`}
    >
      <h1 className="tertiary_heading">hardhat-solpp</h1>
      <p>
        <u> Hardhat </u> plugin for integration with the
        <u> solpp preprocessor </u>.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>This plugin runs solhint on the project's sources and prints the report.</p>

      <h3 className="text-xl font-semibold border-b border-border pb-2">Installation</h3>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>Or, if you are using TypeScript, add this to your hardhat.config.ts:</p>
      <CodeSnippet code={snippet3} language="javascript" />

      <h4 className="text-xl font-semibold border-b border-border pb-2">Environment extensions</h4>
      <p>This plugin does not extend the environment.</p>

      <h5 className="text-xl font-semibold border-b border-border pb-2">Usage</h5>
      <p>There are no additional steps you need to take for this plugin to work.</p>
      <p>
        Install it, run npx hardhat compile and solc will compile the solpp generated contracts,
        which will be in cache/solpp-generated-contracts.
      </p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Configuration</h6>
      <p>
        This plugin can be configured by setting a solpp entry in hardhat.config.js. Its options
        are:
      </p>
      <ul className="list-disc ml-4 flex flex-col gap-1">
        <li>
          defs: is an object where each property is the symbol's name and its value is the actual
          definition. Definitions can be numbers, string, expressions, lists, or functions. For more
          detail about symbols you can check <u>solpp README</u>.
        </li>
        <li>
          cwd: string: directory where the contracts are located, it will be used for flattening
          purposes, by default it will be the project's source directory.
        </li>
        <li>collapseEmptyLines: boolean: delete empty lines, false by default.</li>
        <li>noPreprocessor: boolean: disable preprocessor, false by default.</li>
        <li>noFlatten: boolean: won't flatten contracts, true by default.</li>
        <li>
          tolerant: boolean: ignore if an imported contract file is missing when flattening, false
          by default.
        </li>
      </ul>

      <PageNavigator
        prev={{
          label: "@nomiclabs/hardhat-solhint",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-solhint",
        }}
        next={{
          label: "@nomiclabs/hardhat-web3",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-web3",
        }}
      />
    </section>
  )
}

export default PluginSolpp
