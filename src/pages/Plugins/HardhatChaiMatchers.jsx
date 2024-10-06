// import CodeSnippet from "../../components/CodeSnippet"

// const HardhatChaiMatchers = () => {
//   const exampleCode = `
//   function greet(name) {
//     return 'Hello, ' + name + '!';
//   }

//   console.log(greet('World')); // Output: Hello, World!
//   `

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4">Code Snippet Example</h1>
//       <CodeSnippet
//         code={exampleCode}
//         language="javascript"
//         showLineNumbers={true}
//         isCopyable={true}
//         highlight="2-3"
//       />
//     </>
//   )
// }

// export default HardhatChaiMatchers

import React from "react"
import CodeSnippet from "../../components/CodeSnippet"

const HardhatChaiMatchers = ({ isDarkMode }) => {
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
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-4 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">Hardhat Chai Matchers</h1>
      <p>
        This plugin adds Ethereum-specific capabilities to the{" "}
        <span className="text-tertiary">Chai</span> assertion library, making
        your smart contract tests easy to write and read.
      </p>
      <p>
        Check <span className="text-tertiary">its documentation</span> to learn
        more.
      </p>

      <h2 className="font-bold text-lg mt-4">Installation</h2>
      <p>
        We recommend using npm 7 or later. If you do that, then you just need to
        install the plugin itself:
      </p>
      <CodeSnippet
        code={snippet1}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p className="mt-2">
        If you are using an older version of npm, you'll also need to install
        all the packages used by the plugin.
      </p>
      <CodeSnippet
        code={snippet2}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p className="mt-2">That's also the case if you are using yarn:</p>
      <CodeSnippet
        code={snippet3}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="font-bold text-lg mt-4">Usage</h2>
      <p className="mt-2">
        After installing it, add the plugin to your Hardhat config:
      </p>
      <CodeSnippet
        code={snippet4}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p className="mt-2">
        Then you'll be able to use the matchers in your tests:
      </p>
      <CodeSnippet
        code={snippet5}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="font-bold text-lg mt-4">Known issues</h2>
      <h3 className="font-bold text-md mt-2">Chaining Async Matchers</h3>
      <p className="mt-2">
        Currently, the following matchers do not support chaining:
      </p>
      <ul className="list-disc ml-4 space-y-2">
        <li>reverted</li>
        <li>revertedWith</li>
        <li>revertedWithCustomError</li>
        <li>revertedWithoutReason</li>
        <li>revertedWithPanic</li>
        <li>changeEtherBalance</li>
        <li>changeEtherBalances</li>
        <li>changeTokenBalance</li>
        <li>changeTokenBalances</li>
        <li>
          emit (with the only exception of chaining multiple emit matchers)
        </li>
      </ul>
      <p className="mt-2">Which means you can't do:</p>
      <CodeSnippet
        code={snippet6}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p className="mt-2">
        To work around this limitation, write separate assertions for each
        matcher:
      </p>
      <CodeSnippet
        code={snippet6}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p className="mt-2">
        If you are interested in seeing an implementation of chaining for async
        matchers, please visit the GitHub issue{" "}
        <a
          className="text-tertiary"
          href="https://github.com/NomicFoundation/hardhat/issues/4235"
        >
          #4235
        </a>{" "}
        and leave an upvote or comment.
      </p>
      <br />
      <div class="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <a
          href="nomicfoundation-hardhat-toolbox"
          class="flex items-center space-x-2 "
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-toolbox</span>
        </a>
        <a
          href="nomicfoundation-hardhat-ethers"
          class="flex items-center space-x-2 "
        >
          <span>@nomicfoundation-hardhat-ethers</span>
          <span>&rarr;</span>
        </a>
      </div>
    </section>
  )
}

export default HardhatChaiMatchers
