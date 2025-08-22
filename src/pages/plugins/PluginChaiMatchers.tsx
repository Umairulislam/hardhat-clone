import CodeSnippet from "../../components/CodeSnippet"
import PageNavigator from "../../components/PageNavigator"

const PluginChaiMatchers = () => {
  const snippet1 = `npm install --save-dev @nomicfoundation/hardhat-chai-matchers`
  const snippet2 = `npm install --save-dev @nomicfoundation/hardhat-chai-matchers chai@4 @nomicfoundation/hardhat-ethers ethers`
  const snippet3 = `yarn add --dev @nomicfoundation/hardhat-chai-matchers chai@4 @nomicfoundation/hardhat-ethers ethers`
  const snippet4 = `require("@nomicfoundation/hardhat-chai-matchers");`
  const snippet5 = `expect(await token.totalSupply()).to.equal(1_000_000);

await expect(token.transfer(token, 1000)).to.be.revertedWith(
  "Cannot transfer to the contract itself"
);

await expect(token.transfer(recipient, 1000))
  .to.emit(token, "Transfer")
  .withArgs(owner, recipient, 1000);`
  const snippet6 = `await expect(contract.f(...))
  .to.changeEtherBalance(...)
  .and.to.changeTokenBalance(...)`
  const snippet7 = `const tx = contract.f(...);
await expect(tx).to.changeEtherBalance(...)
await expect(tx).to.changeTokenBalance(...)`

  return (
    <section className="flex flex-col gap-6 justify-center">
      <h1 className="tertiary_heading">Hardhat Chai Matchers</h1>
      <p>
        This plugin adds Ethereum-specific capabilities to the <u>Chai</u> assertion library, making
        your smart contract tests easy to write and read.
      </p>
      <p>
        Check <u>its documentation</u> to learn more.
      </p>

      <h2 className="text-xl font-semibold">Installation</h2>
      <p>
        We recommend using npm 7 or later. If you do that, then you just need to install the plugin
        itself:
      </p>

      <CodeSnippet code={snippet1} language="javascript" />
      <p>
        If you are using an older version of npm, you'll also need to install all the packages used
        by the plugin.
      </p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>That's also the case if you are using yarn:</p>
      <CodeSnippet code={snippet3} language="javascript" />

      <h3 className="text-xl font-semibold">Usage</h3>
      <p>After installing it, add the plugin to your Hardhat config:</p>
      <CodeSnippet code={snippet4} language="javascript" />
      <p>Then you'll be able to use the matchers in your tests:</p>
      <CodeSnippet code={snippet5} language="javascript" />

      <h4 className="text-xl font-semibold">Known issues</h4>
      <h5 className="font-medium">Chaining Async Matchers</h5>
      <p>Currently, the following matchers do not support chaining:</p>
      <ul className="list-disc ml-4 flex flex-col gap-1">
        <li>reverted</li>
        <li>revertedWith</li>
        <li>revertedWithCustomError</li>
        <li>revertedWithoutReason</li>
        <li>revertedWithPanic</li>
        <li>changeEtherBalance</li>
        <li>changeEtherBalances</li>
        <li>changeTokenBalance</li>
        <li>changeTokenBalances</li>
        <li>emit (with the only exception of chaining multiple emit matchers)</li>
      </ul>
      <p>Which means you can't do:</p>
      <CodeSnippet code={snippet6} language="javascript" />
      <p>To work around this limitation, write separate assertions for each matcher:</p>
      <CodeSnippet code={snippet7} language="javascript" />
      <p>
        If you are interested in seeing an implementation of chaining for async matchers, please
        visit the GitHub issue <u>#4235</u> and leave an upvote or comment.
      </p>

      <PageNavigator
        prev={{
          label: "@nomicfoundation/hardhat-toolbox",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox",
        }}
        next={{
          label: "@nomicfoundation-hardhat-ethers",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-ethers",
        }}
      />
    </section>
  )
}

export default PluginChaiMatchers
