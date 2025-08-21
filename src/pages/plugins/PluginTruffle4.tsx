import CodeSnippet from "../../components/CodeSnippet"
import PageNavigator from "../../components/PageNavigator"

const PluginTruffle4 = () => {
  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-truffle4 @nomiclabs/hardhat-web3-legacy web3@^0.20.7`
  const snippet2 = `require("@nomiclabs/hardhat-truffle4");`
  const snippet3 = `import "@nomiclabs/hardhat-truffle4";`

  return (
    <section className="flex flex-col gap-6 justify-center">
      <h1 className="tertiary_heading">hardhat-web3-legacy</h1>
      <p>
        <u>Hardhat</u> plugin for integration with TruffleContract from Truffle 4
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>
        This plugin brings to Hardhat TruffleContracts from Truffle 4. With it you can call{" "}
        <u>contract() and artifacts.require() </u> like you normally would with Truffle. Interact
        with your contracts with a familiar API from tasks, scripts and tests.
      </p>
      <p>
        Additionally, you can{" "}
        <span className="font-semibold">
          migrate your contracts to Solidity 5 without needing to migrate your tests to Truffle 5.
        </span>
      </p>

      <h3 className="text-xl font-semibold border-b border-border pb-2">Required Plugins</h3>
      <p>
        This plugin requires <u>hardhat-web3-legacy</u> as a prerequisite.
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
      <p>There are no additional steps you need to take for this plugin to work.</p>
      <p>
        Install it, run npx hardhat test and your Truffle tests should run with no need to make any
        modifications.
      </p>

      <PageNavigator
        prev={{
          label: "@nomiclabs/hardhat-web3-legacy",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-web3-legacy",
        }}
        next={{
          label: "Community plugins",
          href: "/hardhat-runner/plugins#community-plugins",
        }}
      />
    </section>
  )
}

export default PluginTruffle4
