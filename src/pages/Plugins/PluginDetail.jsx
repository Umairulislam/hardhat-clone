import React from "react"
import { useParams } from "react-router-dom"

const PluginDetail = () => {
  const { pluginName } = useParams()

  const pluginDetails = {
    "nomicfoundation-hardhat-toolbox": {
      name: "@nomicfoundation/hardhat-toolbox",
      description: `
        The @nomicfoundation/hardhat-toolbox plugin bundles all the commonly used packages and Hardhat plugins we recommend to start developing with Hardhat.
        
        When you use this plugin, you'll be able to:
        - Interact with your contracts using ethers.js and the hardhat-ethers plugin.
        - Test your contracts with Mocha, Chai and our own Hardhat Chai Matchers plugin.
        - Deploy your contracts with Hardhat Ignition.
        - Interact with Hardhat Network with our Hardhat Network Helpers.
        - Verify the source code of your contracts with the hardhat-verify plugin.
        - Get metrics on the gas used by your contracts with the hardhat-gas-reporter plugin.
        - Measure your tests coverage with solidity-coverage.
        - And, if you are using TypeScript, get type bindings for your contracts with Typechain.
        
        Usage:
        To create a new project that uses the Toolbox, check our Setting up a project guide.
        
        If you want to migrate an existing Hardhat project to use the Toolbox, read our migration guide.
        
        Network Helpers:
        When the Toolbox is installed using npm 7 or later, its peer dependencies are automatically installed. However, these dependencies won't be listed in the package.json. As a result, directly importing the Network Helpers can be problematic for certain tools or IDEs. To address this issue, the Toolbox re-exports the Hardhat Network Helpers. You can use them like this:
        
        import helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";
      `,
    },
    // Add other plugin details here
  }

  const plugin = pluginDetails[pluginName]

  if (!plugin) {
    return <div>Plugin not found</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-4 ">
      <h1 className="text-2xl font-bold">{plugin.name}</h1>
      <p className="mt-4 whitespace-pre-line">{plugin.description}</p>
    </div>
  )
}

export default PluginDetail
