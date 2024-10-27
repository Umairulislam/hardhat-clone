import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const HardhatFoundry = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-foundry</h1>
      <p>
        This plugin makes it easier to use Hardhat and{" "}
        <span className="text-tertiary">Foundry </span> in the same project.
      </p>
      <p>
        When this plugin is enabled, Hardhat will use the same contracts
        directory that is used by Foundry, and it will be able to use
        dependencies installed with forge install.
      </p>
      <p>
        If you have a pure Hardhat project, you can use the init-foundry task to
        create a foundry.toml file. The file will be created using the proper
        values to make Foundry work well with your Hardhat project.
      </p>
      <p>Read our guide to learn more.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        How it works
      </h2>
      <p>
        The plugin uses forge config to get Foundry's configuration and
        remappings. It then uses this information to make Hardhat's
        configuration compatible with Foundry.
      </p>
      <p>
        Two of Hardhat's paths are updated: the sources path to make it match
        the one used by Foundry, and the cache path to guarantee that a
        different one is used, preventing potential issues.
      </p>
      <p>
        The compilation task is also modified to add support for Foundry's
        remappings. This means that you can compile your contracts both with npx
        hardhat compile and forge build, and in both cases you can use
        dependencies installed with npm or with Foundry.
      </p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-verify"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-verify</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-ledger"
          className="flex items-center space-x-2"
        >
          <span>@nomicfoundation/hardhat-ledger</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatFoundry
