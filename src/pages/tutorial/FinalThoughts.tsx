import { coolHardhat } from "../../assets"

const FinalThoughts = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="tertiary_heading">9. Final thoughts</h1>
      <p>Congratulations on finishing the tutorial!</p>
      <p>Here are some links you might find useful throughout your journey:</p>
      <ul className="list-disc list-inside flex flex-col gap-1 text-link-dark dark:text-link-light">
        <li>Hardhat's Boilerplate</li>
        <li>Hardhat's documentation site</li>
        <li>Hardhat Toolbox's documentation</li>
        <li>Hardhat Ignition's documentation</li>
        <li>Hardhat Support Discord server</li>
        <li>Ethers.js Documentation</li>
        <li>Mocha Documentation</li>
        <li>Chai Documentation</li>
        <li>Alchemy's smart contract tutorial</li>
      </ul>
      <p>Further things to do with your smart contract using Hardhat:</p>
      <ul className="list-disc list-inside flex flex-col gap-1 text-link-dark dark:text-link-light">
        <li>Interact with a smart contract</li>
        <li>Submit your smart contract to Etherscan</li>
      </ul>
      <p>
        Finally, show us some love by starring <u>our repository on GitHub!️</u>
      </p>
      <p>Happy hacking!</p>
      <img src={coolHardhat} alt="cool hardhat" />
    </section>
  )
}

export default FinalThoughts
