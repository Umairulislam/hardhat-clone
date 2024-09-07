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

export { tools, brands, testimonials }
