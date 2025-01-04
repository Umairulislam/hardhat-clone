import { useSelector } from "react-redux"
import { coolHardhat } from "../../assets"

const FinalThoughts = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  return (
    <section
      className={`p-6 lg:px-32 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">9. Final thoughts</h1>
      <p>Congratulations on finishing the tutorial!</p>
      <p>Here are some links you might find useful throughout your journey:</p>
      <ul className="list-disc pl-4 text-tertiary space-y-1">
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
      <ul className="list-disc pl-4 text-tertiary space-y-1">
        <li>Interact with a smart contract</li>
        <li>Submit your smart contract to Etherscan</li>
      </ul>
      <p>
        Finally, show us some love by starring{" "}
        <span className="text-tertiary">our repository on GitHub!️</span>
      </p>
      <p>Happy hacking!</p>
      <img src={coolHardhat} alt="cool hardhat" />
    </section>
  )
}

export default FinalThoughts
