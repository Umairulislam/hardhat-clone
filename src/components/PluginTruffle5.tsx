import CodeSnippet from "./CodeSnippet"
import PageNavigator from "./PageNavigator"

const PluginTruffle5 = () => {
  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-truffle4 @nomiclabs/hardhat-web3-legacy web3@^0.20.7`
  const snippet2 = `require("@nomiclabs/hardhat-truffle4");`
  const snippet3 = `import "@nomiclabs/hardhat-truffle4";`

  return (
    <section
      className={`flex flex-col gap-6 justify-center mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray`}
    >
      <h1 className="tertiary_heading">hardhat-truffle5</h1>
      <p>
        <u> Hardhat </u>
        plugin for integration with TruffleContract from Truffle 5. This allows tests and scripts
        written for Truffle to work with Hardhat.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>
        This plugin brings to Hardhat TruffleContracts from Truffle 5. With it you can call{" "}
        <u>contract() and artifacts.require()</u> like you normally would with Truffle. Interact
        with your contracts with a familiar API from tasks, scripts and tests.
      </p>

      <h3 className="text-xl font-semibold border-b border-border pb-2">Required plugins</h3>
      <p>
        This plugin requires <u>hardhat-web3</u> as a prerequisite.
      </p>

      <h4 className="text-xl font-semibold border-b border-border pb-2">Installation</h4>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>Or, if you are using TypeScript, add this to your hardhat.config.ts:</p>
      <CodeSnippet code={snippet3} language="javascript" />

      <h5 className="text-xl font-semibold border-b border-border pb-2">Tasks</h5>
      <p>This plugin creates no additional tasks.</p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Environment extensions</h6>
      <p>
        An instance of <u>TruffleEnvironmentArtifacts</u> is injected into env.artifacts and the
        method contract() is injected into the global scope for using in tests.
      </p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Usage</h6>
      <p>
        There are no additional steps you need to take for this plugin to work. Install it, run npx
        hardhat test and your Truffle tests should run with no need to make any modifications.
      </p>
      <p>
        Take a look at the <u>testing guide</u> for a tutorial using it.
      </p>

      <PageNavigator
        prev={{
          label: "@nomiclabs/hardhat-web3",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-web3",
        }}
        next={{
          label: "@nomiclabs/hardhat-web3-legacy",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-web3-legacy",
        }}
      />
    </section>
  )
}

export default PluginTruffle5
