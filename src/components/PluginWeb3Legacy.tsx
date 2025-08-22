import PageNavigator from "./PageNavigator"
import CodeSnippet from "./CodeSnippet"

const PluginWeb3Legacy = () => {
  const snippet1 = `npm install --save-dev @nomiclabs/hardhat-web3-legacy web3@^0.20.7`
  const snippet2 = `require("@nomiclabs/hardhat-web3-legacy");`
  const snippet3 = `import "@nomiclabs/hardhat-web3-legacy";`

  return (
    <section
      className={`flex flex-col gap-6 justify-center mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray`}
    >
      <h1 className="tertiary_heading">hardhat-web3-legacy</h1>
      <p>
        This plugin integrates <u> Web3.js </u> 0.20x into <u>Hardhat</u>
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
      <ul className="list-disc ml-4 flex- flex-col gap-1">
        <li>Web3: The Web3.js module.</li>
        <li>web3: An instantiated Web3.js object connected to the selected network.</li>
        <li>pweb3: A promisified version of web3.</li>
      </ul>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Usage</h6>
      <p>
        In Web3 0.20x some features are synchronous and some are asynchronous. For example
        web3.eth.accounts and web3.eth.blockNumber are synchronous and not supported. You'll get a
        Synchronous requests are not supported, use pweb3 instead error when trying to access them.
        To use these you need to use the promisified web3 and call the getter version of the
        property instead: await pweb3.eth.getAccounts().
      </p>

      <PageNavigator
        prev={{
          label: "@nomiclabs/hardhat-truffle5",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-truffle5",
        }}
        next={{
          label: "@nomiclabs/hardhat-truffle4",
          href: "/hardhat-runner/plugins/nomiclabs-hardhat-truffle4",
        }}
      />
    </section>
  )
}

export default PluginWeb3Legacy
