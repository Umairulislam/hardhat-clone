import CodeSnippet from "../../components/CodeSnippet"
import PageNavigator from "../../components/PageNavigator"

const PluginVyper = () => {
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
    <section className="flex flex-col gap-6 justify-center">
      <h1 className="tertiary_heading">hardhat-vyper</h1>
      <p>
        <u> Hardhat </u> plugin to develop smart contracts with Vyper.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>
        This plugin adds support for Vyper to Hardhat. Once installed, Vyper contracts can be
        compiled by running the compile task.
      </p>
      <p>
        This plugin generates the same artifact format as the built-in Solidity compiler, so that it
        can be used in conjunction with all other plugins.
      </p>
      <p>
        The Vyper compiler is run using the <u>official binary releases</u>.
      </p>

      <h3 className="text-xl font-semibold border-b border-border pb-2">Installation</h3>
      <p>First, you need to install the plugin by running</p>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>Or, if you are using TypeScript, add this to your hardhat.config.ts:</p>
      <CodeSnippet code={snippet3} language="javascript" />

      <h4 className="text-xl font-semibold border-b border-border pb-2">Required plugins</h4>
      <p>No plugins dependencies.</p>

      <h5 className="text-xl font-semibold border-b border-border pb-2">Tasks</h5>
      <p>This plugin creates no additional tasks.</p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Environment extensions</h6>
      <p>This plugin does not extend the Hardhat Runtime Environment.</p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Configuration</h6>
      <p>
        This plugin adds an optional vyper entry to Hardhat's config, which lets you specify the
        Vyper version to use.
      </p>
      <p>This is an example of how to set it:</p>
      <CodeSnippet code={snippet4} language="javascript" />
      <p>
        You can also configure multiple versions of the Vyper compiler, as well as the compiler
        settings evmVersion and optimize. See the <u>Vyper docs</u> for more info.
      </p>
      <CodeSnippet code={snippet5} language="javascript" />

      <h6 className="text-xl font-semibold border-b border-border pb-2">Usage</h6>
      <p>There are no additional steps you need to take for this plugin to work.</p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Test directives</h6>
      <p>
        Brownie allows you to use the test directive #@ if mode == "test": to specify when a portion
        of code should be included only for testing purposes.
      </p>
      <p>Example:</p>
      <CodeSnippet code={snippet6} language="javascript" />
      <p>
        We do NOT support this feature. An error will be thrown every time that, when compiling a
        contract, the directive #@ if mode == "test": is found.
      </p>

      <h6 className="text-xl font-semibold">Additional notes</h6>
      <p>
        The oldest vyper version supported by this plugin is 0.2.0. Versions older than this will
        not work and will throw an error.
      </p>

      <PageNavigator
        prev={{
          label: "@nomicfoundation/hardhat-web3-v4",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-web3-v4",
        }}
        next={{
          label: "@nomiclabs/hardhat-solhint",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-solhint",
        }}
      />
    </section>
  )
}

export default PluginVyper
