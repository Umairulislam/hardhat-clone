import React from "react"

const HardhatChaiMatchers = ({ isDarkMode }) => {
  return (
    <section
      className={`p-6 lg:px-36 text-sm font-light flex flex-col space-y-4 ${
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
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap ">
          <code>
            <span className="text-orange-400">npm install </span>
            <span>--save-dev @nomicfoundation/hardhat-chai-matchers</span>;
          </code>
        </pre>
      </div>
      <p className="mt-2">
        If you are using an older version of npm, you'll also need to install
        all the packages used by the plugin.
      </p>
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap ">
          <code>
            <span className="text-orange-400">npm install </span>
            <span>
              --save-dev @nomicfoundation/hardhat-chai-matchers chai@4
              @nomicfoundation/hardhat-ethers ethers
            </span>
            ;
          </code>
        </pre>
      </div>
      <p className="mt-2">That's also the case if you are using yarn:</p>
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap ">
          <code>
            <span className="text-orange-400">npm install </span>
            <span>
              --dev @nomicfoundation/hardhat-chai-matchers chai@4
              @nomicfoundation/hardhat-ethers ethers
            </span>
            ;
          </code>
        </pre>
      </div>

      <h2 className="font-bold text-lg mt-4">Usage</h2>
      <p className="mt-2">
        After installing it, add the plugin to your Hardhat config:
      </p>
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap">
          <code>require("@nomicfoundation/hardhat-chai-matchers");</code>
        </pre>
      </div>
      <p className="mt-2">
        Then you'll be able to use the matchers in your tests:
      </p>
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap">
          <code>
            expect(await token.totalSupply()).to.equal(1_000_000);
            {"\n\n"}
            await expect(token.transfer(token, 1000)).to.be.revertedWith(
            {"\n"}
            {"  "} "Cannot transfer to the contract itself"
            {"\n"}
            );
            {"\n\n"}
            await expect(token.transfer(recipient, 1000))
            {"\n"}
            {"  "}.to.emit(token, "Transfer")
            {"\n"}
            {"  "}.withArgs(owner, recipient, 1000);
          </code>
        </pre>
      </div>

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
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap">
          <code>
            await expect(contract.f(...))
            {"\n"}
            {"  "}.to.changeEtherBalance(...)
            {"\n"}
            {"  "}.and.to.changeTokenBalance(...);
          </code>
        </pre>
      </div>
      <p className="mt-2">
        To work around this limitation, write separate assertions for each
        matcher:
      </p>
      <div className="bg-[#20232A] text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap">
          <code>
            const tx = contract.f(...);
            {"\n"}
            await expect(tx).to.changeEtherBalance(...);
            {"\n"}
            await expect(tx).to.changeTokenBalance(...);
          </code>
        </pre>
      </div>
      <p className="mt-2">
        If you are interested in seeing an implementation of chaining for async
        matchers, please visit the GitHub issue #4235 and leave an upvote or
        comment.
      </p>
    </section>
  )
}

export default HardhatChaiMatchers
