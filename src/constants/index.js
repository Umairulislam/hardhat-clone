import {
  compile,
  deploy,
  debug,
  code,
  decentraland,
  openzeppelin,
  optimism,
  opyn,
  poap,
  set,
  augur,
  celo,
  chainlink,
  horizon,
  instadapp,
  mainframe,
  mycrypto,
  reflexer,
  skale,
  sushiswap,
  uniswap,
  unlock,
  balancer,
  connext,
  gnosis,
  iodestar,
  melon,
  status,
  kyber,
  aone,
  synthetix,
  avatar1,
  avatar2,
  avatar3,
} from "../assets"

const tools = [
  {
    id: 1,
    name: "Runner",
    description:
      "Hardhat Runner is the main component you interact with when using Hardhat. It's a flexible and extensible task runner that helps you manage and automate the recurring tasks inherent to developing smart contracts and dApps.",
    icon: compile,
    tag: "# COMPILE",
  },
  {
    id: 2,
    name: "Ignition",
    description:
      "Hardhat Ignition is the deployment tool built into Hardhat. It helps you to deploy your contracts to any network efficiently.",
    icon: deploy,
    tag: "# DEPLOY",
  },
  {
    id: 3,
    name: "Network",
    description:
      "Hardhat Network is the built-in network that comes with Hardhat. It allows you to develop smart contracts locally.",
    icon: debug,
    tag: "# TEST",
  },
  {
    id: 4,
    name: "VSCode",
    description:
      "Hardhat VSCode extension adds support for Hardhat projects directly in Visual Studio Code.",
    icon: code,
    tag: "# CODE",
  },
]

const brands = [
  {
    id: 1,
    name: "Decentraland",
    icon: decentraland,
  },
  {
    id: 2,
    name: "OpenZeppelin",
    icon: openzeppelin,
  },
  {
    id: 3,
    name: "Optimism",
    icon: optimism,
  },
  {
    id: 4,
    name: "Opyn",
    icon: opyn,
  },
  {
    id: 5,
    name: "POAP",
    icon: poap,
  },
  {
    id: 6,
    name: "Set",
    icon: set,
  },
  {
    id: 7,
    name: "Augur",
    icon: augur,
  },
  {
    id: 8,
    name: "Celo",
    icon: celo,
  },
  {
    id: 9,
    name: "Chainlink",
    icon: chainlink,
  },
  {
    id: 10,
    name: "Horizon",
    icon: horizon,
  },
  {
    id: 11,
    name: "Instadapp",
    icon: instadapp,
  },
  {
    id: 12,
    name: "Mainframe",
    icon: mainframe,
  },
  {
    id: 13,
    name: "MyCrypto",
    icon: mycrypto,
  },
  {
    id: 14,
    name: "Reflexer",
    icon: reflexer,
  },
  {
    id: 15,
    name: "Skale",
    icon: skale,
  },
  {
    id: 16,
    name: "SushiSwap",
    icon: sushiswap,
  },
  {
    id: 17,
    name: "Uniswap",
    icon: uniswap,
  },
  {
    id: 18,
    name: "Unlock",
    icon: unlock,
  },
  {
    id: 19,
    name: "Balancer",
    icon: balancer,
  },
  {
    id: 20,
    name: "Connext",
    icon: connext,
  },
  {
    id: 21,
    name: "Gnosis",
    icon: gnosis,
  },
  {
    id: 22,
    name: "Iodestar",
    icon: iodestar,
  },
  {
    id: 23,
    name: "Melon",
    icon: melon,
  },
  {
    id: 24,
    name: "Status",
    icon: status,
  },
]

const testimonials = [
  {
    id: 1,
    avatar: avatar1,
    name: "Victor Tran",
    designation: "CTO at Kyber",
    companyLogo: kyber,
    message:
      "Working with Hardhat has been a great experience. Thanks to its flexibility we were able to test across different Solidity versions without duplicating our setup. Kyber has been around for long enough to have legacy contracts deployed with different Solidity versions in our architecture, so this kind of flexibility is important for such a mature project. The collaboration between the Kyber and Hardhat teams to fix issues and implement new features has been fast and smooth, which helped our internal timelines a lot.",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "ustin J. Moses",
    designation: "CTO at SYNTHETIX",
    companyLogo: synthetix,
    message:
      "Tired of battling other testing frameworks, I tried Hardhat on a whim one afternoon to see just how hard it might be to port Synthetix over to it. After fifteen minutes I had one of our specs running nearly 10x faster that what I’d become used to; from that moment I was hooked. Since then, we’ve integrated coverage, supported multiple versions of solc and even set up legacy testing through injection - all without having to wait for features to be added by the Hardhat team. It’s been built using its own extensible task system, dogfooding its own plugin architecture. Fast test turnarounds, extensible architecture and solidity stack traces - my dream of smart contract TDD has become a lot more real!",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Brett Sun",
    designation: "CTO at Aragon One",
    companyLogo: aone,
    message:
      "Our interest in Hardhat was driven by our own experience of building and maintaining developer tooling for the Aragon ecosystem. Not only were these efforts time consuming, difficult, and error-prone, we also found ourselves constantly re-inventing the wheel in areas we did not want to care about or force opinions on (e.g. Ganache connections, Truffle providers, test strategy). Hardhat, with its plugin ecosystem, has effectively eliminated many of these problems for us. We feel confident piggybacking on the best for the underlying layers so that we can focus our attention on exposing the power of the Aragon ecosystem to our community.",
  },
]

const officialPlugins = [
  {
    id: 1,
    name: "@nomicfoundation/hardhat-toolbox",
    description:
      "Nomic Foundation's recommended bundle of Hardhat plugins (ethers based)",
    tags: ["Hardhat", "Setup", "Ethers.js"],
    foundation: "Nomic Foundation",
  },
  {
    id: 2,
    name: "@nomicfoundation/hardhat-toolbox-viem",
    description:
      "Nomic Foundation's recommended bundle of Hardhat plugins (viem based)",
    tags: ["Hardhat", "Setup", "viem"],
    foundation: "Nomic Foundation",
  },
  {
    id: 3,
    name: "@nomicfoundation/hardhat-chai-matchers",
    description: "Adds Ethereum-related matchers to Chai",
    tags: ["Chai", "Testing"],
    foundation: "Nomic Foundation",
  },
  {
    id: 4,
    name: "@nomicfoundation/hardhat-ethers",
    description: "Injects ethers.js into the Hardhat Runtime Environment",
    tags: ["Ethers.js", "Testing", "Tasks", "Scripts"],
    foundation: "Nomic Foundation",
  },
  {
    id: 5,
    name: "@nomicfoundation/hardhat-viem",
    description: "Injects ethers.js into the Hardhat Runtime Environment",
    tags: ["Ethers.js", "Testing", "Tasks", "Scripts"],
    foundation: "Nomic Foundation",
  },
  {
    id: 6,
    name: "@nomicfoundation/hardhat-verify",
    description: "Automatically verify contracts",
    tags: ["Etherscan", "Verification"],
    foundation: "Nomic Foundation",
  },
  {
    id: 7,
    name: "@nomicfoundation/hardhat-foundry",
    description:
      "Makes it easier to use Hardhat and Foundry in the same project",
    tags: ["Foundry"],
    foundation: "Nomic Foundation",
  },
  {
    id: 8,
    name: "@nomicfoundation/hardhat-ledger",
    description: "Hardhat plugin for the Ledger hardware wallet",
    tags: ["Ledger", "Wallet"],
    foundation: "Nomic Foundation",
  },
  {
    id: 9,
    name: "@nomiclabs/hardhat-vyper",
    description: "Adds support to compile Vyper smart contracts",
    tags: ["Vyper", "Compiler"],
    foundation: "Nomic Foundation",
  },
  {
    id: 10,
    name: "@nomiclabs/hardhat-solhint",
    description: "Easily run solhint to lint your Solidity code",
    tags: ["Solhint", "Linter"],
    foundation: "Nomic Foundation",
  },
  {
    id: 11,
    name: "@nomiclabs/hardhat-solpp",
    description:
      "Automatically run the solpp preprocessor before each compilation",
    tags: ["Solpp", "Preprocessor"],
    foundation: "Nomic Foundation",
  },
  {
    id: 12,
    name: "@nomiclabs/hardhat-waffle",
    description:
      "Adds a Waffle-compatible provider to the Hardhat Runtime Environment and automatically initializes the Waffle Chai matchers",
    tags: ["Waffle", "Testing"],
    foundation: "Nomic Foundation",
  },
  {
    id: 13,
    name: "@nomiclabs/hardhat-web3",
    description: "Injects Web3 1.x into the Hardhat Runtime Environment",
    tags: ["Web3.js", "Testing", "Tasks", "Scripts"],
    foundation: "Nomic Foundation",
  },
  {
    id: 14,
    name: "@nomicfoundation/hardhat-web3-v4",
    description: "Injects Web3 4.x into the Hardhat Runtime Environment",
    tags: ["Web3.js", "Testing", "Tasks", "Scripts"],
    foundation: "ChainSafe and Nomic Foundation",
  },
  {
    id: 15,
    name: "@nomiclabs/hardhat-truffle5",
    description: "Integration with TruffleContract from Truffle 5",
    tags: ["Truffle", "Testing"],
    foundation: "Nomic Foundation",
  },
  {
    id: 16,
    name: "@nomiclabs/hardhat-web3-legacy",
    description: "Injects Web3 0.20.x into the Hardhat Runtime Environment",
    tags: ["Web3.js", "Legacy", "Testing", "Tasks", "Scripts"],
    foundation: "Nomic Foundation",
  },
  {
    id: 17,
    name: "@nomiclabs/hardhat-truffle4",
    description: "Integration with TruffleContract from Truffle 4",
    tags: ["Truffle", "Testing"],
    foundation: "Nomic Foundation",
  },
]

const communityPlugins = [
  {
    id: 1,
    name: "solidity-coverage",
    description: "Code coverage for Solidity",
    tags: ["Testing", "Coverage"],
    foundation: "Chris Gewecke",
  },
  {
    id: 2,
    name: "hardhat-gas-reporter",
    description:
      "Gas usage per unit test. Average gas usage per method. A mocha reporter.",
    tags: ["Testing", "Gas"],
    foundation: "Chris Gewecke",
  },
  {
    id: 3,
    name: "@typechain/hardhat",
    description: "Zero-config TypeChain support for Hardhat.",
    tags: ["Testing", "Tasks"],
    foundation: "Rahul Sethuram",
  },
  {
    id: 4,
    name: "hardhat-watcher",
    description: "Automatically run Hardhat actions on file changes.",
    tags: ["Tasks", "Testing"],
    foundation: "Xander Deseyn",
  },
  {
    id: 5,
    name: "hardhat-deploy",
    description: "Hardhat plugin for Deployments",
    tags: ["Deployment", "Testing"],
    foundation: "Ronan Sandford",
  },
  {
    id: 6,
    name: "hardhat-contract-sizer",
    description: "Calculate compiled contract sizes",
    tags: ["Compiling", "Bytecode"],
    foundation: "Nick Barry",
  },
  {
    id: 7,
    name: "@openzeppelin/hardhat-upgrades",
    description:
      "Hardhat plugin for deploying and managing upgradeable contracts.",
    tags: ["Security", "Upgrades"],
    foundation: "OpenZeppelin",
  },
  {
    id: 8,
    name: "hardhat-deploy-ethers",
    description: "A hardhat-deploy plugin for Ethers.js v5",
    tags: ["Ethers.js", "hardhat-deploy"],
    foundation: "Ronan Sandford",
  },
  {
    id: 9,
    name: "hardhat-tracer",
    description:
      "See internal transactions, events and storage operations during your hardhat tests in the console",
    tags: ["EVM", "Events", "Logs", "Trace", "Console", "Testing"],
    foundation: "Soham Zemse",
  },
  {
    id: 10,
    name: "@tenderly/hardhat-tenderly",
    description: "Easily integrate your Hardhat project with Tenderly.",
    tags: ["Debugging", "Monitoring", "Alerting", "Tasks", "Scripts"],
    foundation: "Tenderly",
  },
  {
    id: 11,
    name: "hardhat-abi-exporter",
    description: "Automatically export Solidity contract ABIs on compilation",
    tags: ["Compiling", "ABI"],
    foundation: "Nick Barry",
  },
  {
    id: 12,
    name: "@defi-wonderland/smock",
    description:
      "The Solidity mocking library. Smock is a utility package that can generate mock Solidity contracts written entirely in JavaScript.",
    tags: ["Testting", "Mocking"],
    foundation: "DeFi Wonderland and Optimism PBC",
  },
  {
    id: 13,
    name: "hardhat-dependency-compiler",
    description: "Compile Solidity sources directly from npm dependencies",
    tags: ["Compiling", "Dependencies"],
    foundation: "Nick Barry",
  },
  {
    id: 14,
    name: "@tovarishfin/hardhat-yul",
    description:
      "An updated and working Hardhat plugin to compile the Yul and Yul+ languages into solc compatible artifacts. Works with .yul and .yulp file extensions",
    tags: ["Yul", "Assembly", "Compiler", "Yul+"],
    foundation: "tovarishfin",
  },
  {
    id: 15,
    name: "hardhat-preprocessor",
    description:
      "An hardhat plugin to pre-process contract source code before compilation",
    tags: ["Solidity", "Preprocessor"],
    foundation: "Ronan Sandford",
  },
  {
    id: 16,
    name: "@primitivefi/hardhat-dodoc",
    description:
      "Zero-config Hardhat plugin to generate documentation for all your Solidity contracts.",
    tags: ["Documentation", "Docs", "Solidity", "NatSpec"],
    foundation: "Primitive",
  },
  {
    id: 17,
    name: "hardhat-storage-layout",
    description: "Exporting Solidity contract storage layout.",
    tags: ["solidity", "storage-layout"],
    foundation: "Aurora Labs",
  },
  {
    id: 18,
    name: "hardhat-log-remover",
    description:
      "Remove Hardhat console.log imports and calls from Solidity source files.",
    tags: ["Logging", "Console", "Deployment"],
    foundation: "Nick Barry",
  },
  {
    id: 19,
    name: "hardhat-spdx-license-identifier",
    description:
      "Automatically prepend local Solidity source files with an SPDX License Identifier.",
    tags: ["License"],
    foundation: "Nick Barry",
  },
  {
    id: 20,
    name: "hardhat-erc1820",
    description:
      "Automatically deploy the ERC-1820 registry contract to Hardhat EVM chains.",
    tags: ["Testing"],
    foundation: "David Mihal",
  },
  {
    id: 21,
    name: "hardhat-w3f",
    description:
      "The hardhat-w3f plugin allows builders to build & run Web3 Functions connecting smart off-chain data with smart contracts.",
    tags: ["Gelato", "w3f", "offchain", "functions"],
    foundation: "Gelato Network",
  },
  {
    id: 22,
    name: "hardhat-docgen",
    description: "Generate a static documentation site from NatSpec comments.",
    tags: ["Documentation", "NatSpec"],
    foundation: "Nick Barry, samuveth",
  },
  {
    id: 23,
    name: "hardhat-exposed",
    description:
      "Automatically expose internal Solidity functions for testing.",
    tags: ["Solidity", "Testing"],
    foundation: "Francisco Giordano",
  },
  {
    id: 24,
    name: "jest-environment-hardhat",
    description: "A jest environment with Hardhat built in.",
    tags: ["uniswap", "testing", "jest", "node"],
    foundation: "Uniswap Labs",
  },
  {
    id: 25,
    name: "hardhat-ethernal",
    description:
      "Integrate your Hardhat project and Hardhat network with Ethernal. Ethernal is a block explorer for private chains.",
    tags: ["explorer", "debugging", "development-tool"],
    foundation: "Ethernal",
  },
  {
    id: 26,
    name: "hardhat-time-n-mine",
    description:
      "Helper plugin to manipulate blocks timestamp and trigger mining. It can be used from the command line and in the tests.",
    tags: ["Testing"],
    foundation: "Gonzalo Petraglia & Alan Verbner",
  },
  {
    id: 27,
    name: "xdeployer",
    description:
      "Hardhat plugin to deploy your smart contracts across multiple EVM chains with the same deterministic address.",
    tags: ["Deployment", "CREATE2", "Tasks"],
    foundation: "Pascal Marco Caversaccio",
  },
  {
    id: 28,
    name: "hardhat-cannon",
    description:
      "Define your project's deployment in a simple manifest, then deploy and share it anywhere. Inspired by Docker, Terraform, and npm.",
    tags: ["Tooling", "Deployment", "Testing"],
    foundation: "Synthetix Core Contributors",
  },
  {
    id: 29,
    name: "hardhat-etherscan-abi",
    description: "Automatically fetch contract ABI from Etherscan.",
    tags: ["Etherscan", "ABI"],
    foundation: "Roman Semenov",
  },
  {
    id: 30,
    name: "@0xweb/hardhat",
    description:
      "Generate 0xWeb classes for contracts to easily communicate with the blockchain.",
    tags: ["dApp-Client", "Class-Generation", "Testing"],
    foundation: "Alex Kit",
  },
  {
    id: 31,
    name: "hardhat-diamond-abi",
    description:
      "Hardhat plugin to combine multiple ABIs into a Diamond ABI artifact.",
    tags: ["diamond standard"],
    foundation: "Project Sophon",
  },
  {
    id: 32,
    name: "hardhat-storage-layout-changes",
    description: "Check for storage layout changes.",
    tags: ["Storage Layout", "Solidity", "Upgradable Contracts"],
    foundation: "Soham Zemse",
  },
]

export { tools, brands, testimonials, officialPlugins, communityPlugins }
