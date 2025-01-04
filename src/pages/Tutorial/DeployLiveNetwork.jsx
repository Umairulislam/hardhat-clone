import { useSelector } from "react-redux"
import { CodeSnippet } from "../../components"

const DeployLiveNetwork = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const snippet1 = `const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("Token");

  return { token };
});

module.exports = TokenModule;`

  const snippet2 = `npx hardhat ignition deploy ./ignition/modules/Token.js --network <network-name>`

  const snippet3 = `$ npx hardhat ignition deploy ./ignition/modules/Token.js
Compiled 1 Solidity file successfully (evm target: paris).
You are running Hardhat Ignition against an in-process instance of Hardhat Network.
This will execute the deployment, but the results will be lost.
You can use --network <network-name> to deploy to a different network.

Hardhat Ignition 🚀

Deploying [ TokenModule ]

Batch #1
  Executed TokenModule#Token

[ TokenModule ] successfully deployed 🚀

Deployed Addresses

TokenModule#Token - 0x5FbDB2315678afecb367f032d93F642f64180aa3`

  const snippet4 = `require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and add its key to the configuration variables
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");

// Add your Sepolia account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/{ALCHEMY_API_KEY}',
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};`

  const snippet5 = `npx hardhat ignition deploy ./ignition/modules/Token.js --network sepolia`

  return (
    <section
      className={`p-6 lg:px-32 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">7. Deploying to a live network</h1>
      <p>
        Once you're ready to share your dApp with other people, you may want to
        deploy it to a live network. This way others can access an instance
        that's not running locally on your system.
      </p>
      <p>
        The "mainnet" Ethereum network deals with real money, but there are
        separate "testnet" networks that do not. These testnets provide shared
        staging environments that do a good job of mimicking the real world
        scenario without putting real money at stake, and{" "}
        <span className="text-tertiary">Ethereum has several</span>, like
        Sepolia and Goerli. We recommend you deploy your contracts to the
        Sepolia testnet.
      </p>
      <p>
        At the software level, deploying to a testnet is the same as deploying
        to mainnet. The only difference is which network you connect to. Let's
        look into what the code to deploy your contracts using{" "}
        <span className="text-tertiary">Hardhat Ignition</span>
        would look like.
      </p>
      <p>
        In Hardhat Ignition, deployments are defined through Ignition Modules.
        These modules are abstractions to describe a deployment; that is,
        JavaScript functions that specify what you want to deploy.
      </p>
      <p>
        Ignition modules are expected to be within the ./ignition/modules
        directory. Let's create a new directory ignition inside the project
        root's directory, then, create a directory named modules inside of the
        ignition directory. Paste the following into a Token.js file in that
        directory:
      </p>
      <CodeSnippet
        code={snippet1}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        To tell Hardhat to connect to a specific Ethereum network, you can use
        the --network parameter when running any task, like this:
      </p>
      <CodeSnippet
        code={snippet2}
        language="bash"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        With our current configuration, running it without the --network
        parameter would cause the code to run against an embedded instance of
        Hardhat Network. In this scenario, the deployment actually gets lost
        when Hardhat finishes running, but it's still useful to test that our
        deployment code works:
      </p>
      <CodeSnippet
        code={snippet3}
        language="shell"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Deploying to remote networks
      </h2>
      <p>
        To deploy to a remote network such as mainnet or any testnet, you need
        to add a network entry to your hardhat.config.js file. We’ll use Sepolia
        for this example, but you can add any network. For key storage, utilize
        the configuration variables.
      </p>
      <div
        className={` border-l-8 border-[#42B983] w-full p-8 ${
          isDarkMode ? "bg-gray-200" : "bg-secondary"
        }`}
      >
        <h1>TIP</h1>
        <p className="mt-2">
          For more information on vars and configuration variables, please see
          our{" "}
          <span className="text-tertiary">configuration variables guide</span>.
        </p>
      </div>
      <CodeSnippet
        code={snippet4}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        We're using <span className="text-tertiary">Infura</span> or{" "}
        <span className="text-tertiary">Alchemy</span>, but pointing url to any
        Ethereum node or gateway. Go grab your API key and come back.
      </p>
      <p>
        To deploy on Sepolia you need to send some Sepolia ether to the address
        that's going to be making the deployment. You can get testnet ether from
        a faucet, a service that distributes testing-ETH for free. Here are a
        few for Sepolia:
      </p>
      <ul className="list-disc list-inside space-y-1 text-tertiary">
        <li>Alchemy Sepolia Faucet</li>
        <li>Coinbase Sepolia Faucet</li>
        <li>Infura Sepolia Faucet</li>
        <li>Chainstack Sepolia Faucet</li>
        <li>QuickNode Sepolia Faucet</li>
      </ul>
      <p>
        You'll have to change your wallet's network to Sepolia before
        transacting.
      </p>
      <div
        className={` border-l-8 border-[#42B983] w-full p-8 ${
          isDarkMode ? "bg-gray-200" : "bg-secondary"
        }`}
      >
        <h1>TIP</h1>
        <p className="mt-2">
          You can learn more about other testnets and find links to their
          faucets on the {""}
          <span className="text-tertiary">ethereum.org site</span>.
        </p>
      </div>
      <p>Finally, run:</p>
      <CodeSnippet
        code={snippet5}
        language="bash"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        If everything went well, you should see the deployed contract address.
      </p>
      <div
        className={` border-l-8 border-[#42B983] w-full p-8 ${
          isDarkMode ? "bg-gray-200" : "bg-secondary"
        }`}
      >
        <h1>TIP</h1>
        <p className="mt-2">
          For more information on Hardhat Ignition, including how to verify
          deployments via Etherscan, check out the {""}
          <span className="text-tertiary">Ignition documentation</span>.
        </p>
      </div>
    </section>
  )
}

export default DeployLiveNetwork
