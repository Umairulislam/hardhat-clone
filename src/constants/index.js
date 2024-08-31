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
]

export { tools, brands }
