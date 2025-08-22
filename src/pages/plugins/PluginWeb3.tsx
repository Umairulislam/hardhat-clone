import CodeSnippet from "../../components/CodeSnippet"
import PageNavigator from "../../components/PageNavigator"

const PluginWeb3 = () => {
  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-web3 'web3@^1.0.0-beta.36'`
  const snippet2 = `require("@nomiclabs/hardhat-web3");`
  const snippet3 = `import "@nomiclabs/hardhat-web3";`
  const snippet4 = `require("@nomiclabs/hardhat-web3");

// task action function receives the Hardhat Runtime Environment as second argument
task("accounts", "Prints accounts", async (_, { web3 }) => {
  console.log(await web3.eth.getAccounts());
});

module.exports = {};`

  return (
    <section className="flex flex-col gap-6 justify-center">
      <h1 className="tertiary_heading">hardhat-web3</h1>
      <p>
        This plugin integrates
        <u> Web3.js </u> 1.x into
        <u> hardhat</u>.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>This plugin brings to Hardhat the Web3 module and an initialized instance of Web3.</p>

      <h3 className="text-xl font-semibold border-b border-border pb-2">Installation</h3>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>Or, if you are using TypeScript, add this to your hardhat.config.ts:</p>
      <CodeSnippet code={snippet3} language="javascript" />

      <h4 className="text-xl font-semibold border-b border-border pb-2">Tasks</h4>
      <p>This plugin creates no additional tasks.</p>

      <h5 className="text-xl font-semibold border-b border-border pb-2">Environment extensions</h5>
      <p>This plugin adds the following elements to the HardhatRuntimeEnvironment:</p>
      <ul className="list-disc ml-4 flex flex-col gap-1">
        <li>
          <strong>web3</strong>: The Web3.js module.
        </li>
        <li>
          <strong>web3</strong>: An instantiated Web3.js object connected to the selected network.
        </li>
      </ul>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Usage</h6>
      <p>
        Install it and access Web3.js through the Hardhat Runtime Environment anywhere you need it
        (tasks, scripts, tests, etc). For example, in your hardhat.config.js:
      </p>
      <CodeSnippet code={snippet4} language="javascript" />
      <p>And then run npx hardhat accounts to try it.</p>
      <p>
        Read the documentation on the <u>Hardhat Runtime Environment</u> to learn how to access the
        HRE in different ways to use Web3.js from anywhere the HRE is accessible.
      </p>

      <PageNavigator
        prev={{
          label: "@nomiclabs/hardhat-solpp",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-solpp",
        }}
        next={{
          label: "@nomiclabs/hardhat-truffle5",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-truffle5",
        }}
      />
    </section>
  )
}

export default PluginWeb3
