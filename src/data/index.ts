import {
  runner,
  ignition,
  network,
  vscode,
  solidityLight,
  solidityDark,
  flexibilityDark,
  flexibilityLight,
  extensibleDark,
  extensibleLight,
  iterationDark,
  iterationLight,

  // Brands
  decentraland,
  aragon,
  kleros,
  mstable,
  lodestar,
  connext,
  set,
  opyn,
  balancer,
  molochdao,
  kyber,
  openzeppelin,
  horizon,
  mainframe,
  instadapp,
  pool,
  status,
  unlock,
  gsn,
  melon,
  poap,
  mycrypto,
  celo,
  synthetix,
  chainlink,
  sushiswap,
  ens,
  yearn,
  reflexer,
  dharma,
  oneinch,
  uniswap,
  hegic,
  augur,
  zksync,
  gnosis,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
} from "../assets"
import type { Brands, Features, Testimonials, Tools } from "../types/types"

export const tools: Tools[] = [
  {
    id: 1,
    name: "Runner",
    description:
      "Hardhat Runner is the main component you interact with when using Hardhat. It's a flexible and extensible task runner that helps you manage and automate the recurring tasks inherent to developing smart contracts and dApps.",
    icon: runner,
    tag: "# COMPILE",
  },
  {
    id: 2,
    name: "Ignition",
    description:
      "Hardhat Ignition is the deployment tool built into Hardhat. It helps you to deploy your contracts to any network efficiently.",
    icon: ignition,
    tag: "# DEPLOY",
  },
  {
    id: 3,
    name: "Network",
    description:
      "Hardhat Network is the built-in network that comes with Hardhat. It allows you to develop smart contracts locally.",
    icon: network,
    tag: "# TEST",
  },
  {
    id: 4,
    name: "VSCode",
    description:
      "Hardhat VSCode extension adds support for Hardhat projects directly in Visual Studio Code.",
    icon: vscode,
    tag: "# CODE",
  },
]

export const features: Features[] = [
  {
    id: 1,
    title1: "Run Solidity locally",
    description1:
      "Easily deploy your contracts, run tests and debug Solidity code without dealing with live environments. Hardhat Network is a local Ethereum network designed for development.",
    title2: "Debugging-first",
    description2:
      "Hardhat is the best choice for Solidity debugging. You get Solidity stack traces, console.log and explicit error messages when transactions fail.",
    buttonText: "Get started with Solidity console.log",
    reverse: false,
    imageDark: solidityDark,
    imageLight: solidityLight,
  },
  {
    id: 2,
    title1: "Extreme flexibility",
    description1:
      "Change anything you like. Even entire out-of-the-box tasks, or just parts of them. Flexible and customizable design, with little constraints.",
    title2: "Bring your own tools",
    description2:
      "Designed to make integrations easy, Hardhat allows you to keep using your existing tools while enabling deeper interoperability between them.",
    buttonText: "Learn more about extending Hardhat",
    reverse: true,
    imageDark: flexibilityDark,
    imageLight: flexibilityLight,
  },
  {
    id: 3,
    title1: "Fully extensible",
    description1:
      "A tooling platform designed to be extended, Hardhat has all the utilities you need to address your project-specific needs.",
    title2: "Plugin ecosystem",
    description2:
      "Extend Hardhat with a composable ecosystem of plugins that add functionality and integrate your existing tools into a smooth workflow.",
    buttonText: "Get started with plugins",
    reverse: true,
    imageDark: extensibleDark,
    imageLight: extensibleLight,
  },
  {
    id: 4,
    title1: "Fast iteration",
    description1:
      "Keep your momentum going by making your development feedback loop up to 10x faster with Hardhat.",
    title2: "TypeScript",
    description2:
      "Catch mistakes before you even run your code by switching to a typed language. Hardhat provides full native support for TypeScript.",
    buttonText: "Get started with TypeScript",
    reverse: true,
    imageDark: iterationDark,
    imageLight: iterationLight,
  },
]

export const brands: Brands[] = [
  {
    id: 1,
    name: "Decentraland",
    icon: decentraland,
  },
  {
    id: 2,
    name: "AragonOne",
    icon: aragon,
  },
  {
    id: 3,
    name: "Kleros",
    icon: kleros,
  },
  {
    id: 4,
    name: "M Stable",
    icon: mstable,
  },
  {
    id: 5,
    name: "Loadstar",
    icon: lodestar,
  },
  {
    id: 6,
    name: "Connext",
    icon: connext,
  },
  {
    id: 7,
    name: "Set",
    icon: set,
  },
  {
    id: 8,
    name: "Opyn",
    icon: opyn,
  },
  {
    id: 9,
    name: "Balancer",
    icon: balancer,
  },
  {
    id: 10,
    name: "Molochdao",
    icon: molochdao,
  },
  {
    id: 11,
    name: "Kyber",
    icon: kyber,
  },
  {
    id: 12,
    name: "Openzeppelin",
    icon: openzeppelin,
  },
  {
    id: 13,
    name: "Horizon",
    icon: horizon,
  },
  {
    id: 14,
    name: "Mainframe",
    icon: mainframe,
  },
  {
    id: 15,
    name: "Instadapp",
    icon: instadapp,
  },
  {
    id: 16,
    name: "Pool",
    icon: pool,
  },
  {
    id: 17,
    name: "Status",
    icon: status,
  },
  {
    id: 18,
    name: "Unlock",
    icon: unlock,
  },
  {
    id: 19,
    name: "OpenGSN",
    icon: gsn,
  },
  {
    id: 20,
    name: "Melon",
    icon: melon,
  },
  {
    id: 21,
    name: "Poap",
    icon: poap,
  },
  {
    id: 22,
    name: "MyCrypto",
    icon: mycrypto,
  },
  {
    id: 23,
    name: "Celo",
    icon: celo,
  },
  {
    id: 24,
    name: "Synthetix",
    icon: synthetix,
  },
  {
    id: 25,
    name: "Chainlink",
    icon: chainlink,
  },
  {
    id: 26,
    name: "Sushiswap",
    icon: sushiswap,
  },
  {
    id: 27,
    name: "ENS",
    icon: ens,
  },
  {
    id: 28,
    name: "Yearn",
    icon: yearn,
  },
  {
    id: 29,
    name: "Reflexer",
    icon: reflexer,
  },
  {
    id: 30,
    name: "Dharma",
    icon: dharma,
  },
  {
    id: 31,
    name: "1Inch",
    icon: oneinch,
  },
  {
    id: 32,
    name: "Uniswap",
    icon: uniswap,
  },
  {
    id: 33,
    name: "Hegic",
    icon: hegic,
  },
  {
    id: 34,
    name: "Augur",
    icon: augur,
  },
  {
    id: 35,
    name: "zkSync",
    icon: zksync,
  },
  {
    id: 36,
    name: "Gnosis",
    icon: gnosis,
  },
]

export const testimonials: Testimonials[] = [
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
    name: "Justin J. Moses",
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
    companyLogo: aragon,
    message:
      "Our interest in Hardhat was driven by our own experience of building and maintaining developer tooling for the Aragon ecosystem. Not only were these efforts time consuming, difficult, and error-prone, we also found ourselves constantly re-inventing the wheel in areas we did not want to care about or force opinions on (e.g. Ganache connections, Truffle providers, test strategy). Hardhat, with its plugin ecosystem, has effectively eliminated many of these problems for us. We feel confident piggybacking on the best for the underlying layers so that we can focus our attention on exposing the power of the Aragon ecosystem to our community.",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "Rahul Sethuram",
    designation: "CTO at Connext Network",
    companyLogo: connext,
    message:
      "Builder has become an essential part of our development and Continuous Integration stack. At Connext, we develop and test complicated smart contract systems for our state channel implementations, making proper Solidity tooling a key to our productivity and success. Hardhat's state-of-the-art Solidity stack trace and console.log features saved us considerable development time. As a user, it's clear that Hardhat prioritizes a great developer experience, which aligns fully with Connext's values. We enjoy interacting with the team and we have even made contributions to the project.",
  },
]
