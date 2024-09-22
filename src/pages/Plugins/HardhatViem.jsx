import React from "react";

const HardhatViem = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold">@nomicfoundation/hardhat-viem</h1>
      <p className="mt-4">
        Hardhat plugin for integration with Viem, a lightweight, composable, and type-safe Ethereum library.
      </p>
      <h2 className="text-xl font-semibold mt-4">What</h2>
      <p className="mt-2">
        This plugin integrates the Viem Ethereum library into your Hardhat development environment. Viem is an alternative to ethers.js that offers developers a different way to interact with the Ethereum blockchain.
      </p>
      <h2 className="text-xl font-semibold mt-4">Installation</h2>
      <pre className="bg-gray-100 p-2 mt-2">
        <code>npm install --save-dev @nomicfoundation/hardhat-viem viem</code>
      </pre>
      <p className="mt-2">
        And add the following statement to your hardhat.config.js:
      </p>
      <pre className="bg-gray-100 p-2 mt-2">
        <code>require("@nomicfoundation/hardhat-viem");</code>
      </pre>
      <p className="mt-2">
        Or, if you are using TypeScript, add this to your hardhat.config.ts:
      </p>
      <pre className="bg-gray-100 p-2 mt-2">
        <code>import "@nomicfoundation/hardhat-viem";</code>
      </pre>
      {/* Add more sections as needed */}
    </div>
  );
};

export default HardhatViem;