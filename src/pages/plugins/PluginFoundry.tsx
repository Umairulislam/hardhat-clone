import PageNavigator from "../../components/PageNavigator"

const PluginFoundry = () => {
  return (
    <section className="flex flex-col gap-6 justify-center">
      <h1 className="tertiary_heading">hardhat-foundry</h1>
      <p>
        This plugin makes it easier to use Hardhat and <u>Foundry </u> in the same project.
      </p>
      <p>
        When this plugin is enabled, Hardhat will use the same contracts directory that is used by
        Foundry, and it will be able to use dependencies installed with forge install.
      </p>
      <p>
        If you have a pure Hardhat project, you can use the init-foundry task to create a
        foundry.toml file. The file will be created using the proper values to make Foundry work
        well with your Hardhat project.
      </p>
      <p>
        Read <u>our guide</u> to learn more.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">How it works</h2>
      <p>
        The plugin uses forge config to get Foundry's configuration and remappings. It then uses
        this information to make Hardhat's configuration compatible with Foundry.
      </p>
      <p>
        Two of Hardhat's paths are updated: the sources path to make it match the one used by
        Foundry, and the cache path to guarantee that a different one is used, preventing potential
        issues.
      </p>
      <p>
        The compilation task is also modified to add support for Foundry's remappings. This means
        that you can compile your contracts both with npx hardhat compile and forge build, and in
        both cases you can use dependencies installed with npm or with Foundry.
      </p>

      <PageNavigator
        prev={{
          label: "@nomicfoundation/hardhat-verify",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-verify",
        }}
        next={{
          label: "@nomicfoundation/hardhat-ledger",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-ledger",
        }}
      />
    </section>
  )
}

export default PluginFoundry
