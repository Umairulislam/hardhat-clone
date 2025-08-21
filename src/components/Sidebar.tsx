import { NavLink, useLocation } from "react-router"

const documentationSubmenu = [
  {
    heading: "Hardhat Runner",
    menus: [
      { label: "Overview", to: "/hardhat-runner/docs/getting-started#overview" },
      { label: "Installation", to: "/hardhat-runner/docs/getting-started#installation" },
      { label: "Quick start", to: "/hardhat-runner/docs/getting-started#quick-start" },
    ],
  },
  {
    heading: "Guides",
    menus: [
      { label: "Setting up a project", to: "/docs/guides/setting-up" },
      { label: "Compiling your contracts", to: "/docs/guides/compiling" },
      { label: "Testing contracts", to: "/docs/guides/testing" },
      { label: "Deploying your contracts", to: "/docs/guides/deploying" },
      { label: "Verifying your contracts", to: "/docs/guides/verifying" },
      { label: "Writing tasks", to: "/docs/guides/writing-tasks" },
      { label: "Using the Hardhat console", to: "/docs/guides/console" },
      { label: "Using TypeScript", to: "/docs/guides/typescript" },
      { label: "Command-line completion", to: "/docs/guides/cli-completion" },
      { label: "Configuration variables", to: "/docs/guides/configuration" },
      { label: "Getting help", to: "/docs/guides/help" },
    ],
  },
  {
    heading: "Advanced",
    menus: [
      { label: "Hardhat Runtime Environment (HRE)", to: "/docs/advanced/hre" },
      { label: "Compilation artifacts", to: "/docs/advanced/artifacts" },
      { label: "Multiple Solidity versions", to: "/docs/advanced/solidity-versions" },
      { label: "Creating a task", to: "/docs/advanced/creating-tasks" },
      { label: "Writing scripts with Hardhat", to: "/docs/advanced/writing-scripts" },
      { label: "Building plugins", to: "/docs/advanced/building-plugins" },
      { label: "Integrating with Foundry", to: "/docs/advanced/integrating-foundry" },
      { label: "Flattening your contracts", to: "/docs/advanced/flattening-contracts" },
      { label: "Running tests in VS Code", to: "/docs/advanced/running-tests-vscode" },
      { label: "Using ES modules", to: "/docs/advanced/using-es-modules" },
      { label: "Using Viem", to: "/docs/advanced/using-viem" },
      {
        label: "Migrating away from hardhat-waffle",
        to: "/docs/advanced/migrating-away-hardhat-waffle",
      },
    ],
  },
  {
    heading: "Plugins",
    menus: [
      {
        label: "@nomicfoundation/hardhat-toolbox",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox",
      },
      {
        label: "@nomicfoundation/hardhat-toolbox-viem",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox-viem",
      },
      {
        label: "@nomicfoundation/hardhat-chai-matchers",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-chai-matchers",
      },
      {
        label: "@nomicfoundation/hardhat-ethers",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-ethers",
      },
      {
        label: "@nomicfoundation/hardhat-viem",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-viem",
      },
      {
        label: "@nomicfoundation/hardhat-verify",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-verify",
      },
      {
        label: "@nomicfoundation/hardhat-foundry",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-foundry",
      },
      {
        label: "@nomicfoundation/hardhat-ledger",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-ledger",
      },
      {
        label: "@nomicfoundation/hardhat-web3-v4",
        to: "/hardhat-runner/plugins/nomicfoundation-hardhat-web3-v4",
      },
      {
        label: "@nomiclabs/hardhat-vyper",
        to: "/hardhat-runner/plugins/nomiclabs-hardhat-vyper",
      },
      {
        label: "@nomiclabs/hardhat-solhint",
        to: "/hardhat-runner/plugins/nomiclabs-hardhat-solhint",
      },
      {
        label: "@nomiclabs/hardhat-solpp",
        to: "/hardhat-runner/plugins/nomiclabs-hardhat-solpp",
      },

      {
        label: "@nomiclabs/hardhat-web3",
        to: "/hardhat-runner/plugins/nomiclabs-hardhat-web3",
      },
      {
        label: "@nomiclabs/hardhat-truffle5",
        to: "/hardhat-runner/plugins/nomiclabs-hardhat-truffle5",
      },
      {
        label: "@nomiclabs/hardhat-web3-legacy",
        to: "/hardhat-runner/plugins/nomiclabs-hardhat-web3-legacy",
      },
      {
        label: "@nomiclabs/hardhat-truffle4",
        to: "/hardhat-runner/plugins/nomiclabs-hardhat-truffle4",
      },
      { label: "Community plugins", to: "/hardhat-runner/plugins#community-plugins" },
    ],
  },
]

const Sidebar = () => {
  const { hash, pathname } = useLocation()
  return (
    <section className="hidden lg:block fixed left-0 top top-24 border-r border-border h-[calc(100vh-100px)] w-sm p-10 bg-white dark:bg-bg-dark overflow-y-auto">
      <ul className="flex flex-col gap-4 text-black dark:text-gray">
        {documentationSubmenu.map((section, i) => (
          <div key={i}>
            <h3 className="font-bold mb-2">{section.heading}</h3>
            <ul className="flex flex-col pl-5 gap-1.5 text-sm">
              {section.menus.map((menu, j) => {
                const isActive = pathname + hash === menu.to
                return (
                  <li key={j}>
                    <NavLink
                      to={menu.to}
                      end
                      className={() =>
                        isActive
                          ? "text-link-dark dark:text-link-light"
                          : "hover:text-link-dark dark:hover:text-link-light"
                      }
                    >
                      {menu.label}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </ul>
    </section>
  )
}

export default Sidebar
