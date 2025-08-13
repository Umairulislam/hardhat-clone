import { useContext, useEffect, useState } from "react"
import {
  FaGithub,
  FaXTwitter,
  FaDiscord,
  GoArrowUpRight,
  CgDarkMode,
  FaBarsStaggered,
  IoMdClose,
} from "../assets"
import { NavLink } from "react-router"
import { logoLight, logoDark } from "../assets"
import { ThemeContext } from "../context/ThemeContext"

// Main navigation items
const navItems = [
  { label: "Home", to: "/", exact: true },
  { label: "Tools", to: "/#tools" },
  { label: "Plugins", to: "/plugins" },
  { label: "Documentation", to: "/docs" },
  { label: "Tutorial", to: "/tutorial" },
]

// Social media links
const socialLinks = [
  { icon: <FaGithub />, href: "" },
  { icon: <FaXTwitter />, href: "" },
  { icon: <FaDiscord />, href: "" },
]

// Tools submenu items
const toolsSubMenu = [
  { label: "Hardhat Runner", to: "/tools/hardhat-runner" },
  { label: "Hardhat Ignition", to: "/tools/hardhat-ignition" },
  { label: "Hardhat Network", to: "/tools/hardhat-network" },
  { label: "Hardhat VSCode", to: "/tools/hardhat-vscode" },
]

// Documentation submenu structure
const documentationSubmenu = [
  {
    heading: "Hardhat Runner",
    menus: [
      { label: "Overview", to: "/docs/hardhat-runner/overview" },
      { label: "Installation", to: "/docs/hardhat-runner/installation" },
      { label: "Quick start", to: "/docs/hardhat-runner/quick-start" },
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
      { label: "@nomicfoundation/hardhat-toolbox", to: "/docs/plugins/hardhat-toolbox" },
      { label: "@nomicfoundation/hardhat-toolbox-viem", to: "/docs/plugins/hardhat-toolbox-viem" },
      {
        label: "@nomicfoundation/hardhat-chai-matchers",
        to: "/docs/plugins/hardhat-chai-matchers",
      },
      { label: "@nomicfoundation/hardhat-ethers", to: "/docs/plugins/hardhat-ethers" },
      { label: "@nomicfoundation/hardhat-viem", to: "/docs/plugins/hardhat-viem" },
      { label: "@nomicfoundation/hardhat-verify", to: "/docs/plugins/hardhat-verify" },
      { label: "@nomicfoundation/hardhat-foundry", to: "/docs/plugins/hardhat-foundry" },
      { label: "@nomicfoundation/hardhat-ledger", to: "/docs/plugins/hardhat-ledger" },
      { label: "@nomicfoundation/hardhat-web3-v4", to: "/docs/plugins/hardhat-web3-v4" },
      { label: "@nomiclabs/hardhat-vyper", to: "/docs/plugins/hardhat-vyper" },
      { label: "@nomiclabs/hardhat-solhint", to: "/docs/plugins/hardhat-solhint" },
      { label: "@nomiclabs/hardhat-waffle", to: "/docs/plugins/hardhat-waffle" },
      { label: "@nomiclabs/hardhat-web3", to: "/docs/plugins/hardhat-web3" },
      { label: "@nomiclabs/hardhat-truffle5", to: "/docs/plugins/hardhat-truffle5" },
      { label: "Community plugins", to: "/docs/plugins/community" },
    ],
  },
]

// Tutorial submenu items
const tutorialSubMenu = [
  { label: "Overview", to: "/tutorial/overview" },
  { label: "Setting up the environment", to: "/tutorial/setting-up" },
  { label: "Creating a new Hardhat project", to: "/tutorial/new-project" },
  { label: "Writing and compiling contracts", to: "/tutorial/writing-compiling" },
  { label: "Testing contracts", to: "/tutorial/testing" },
  { label: "Debugging with Hardhat Network", to: "/tutorial/debugging" },
  { label: "Deploying to a live network", to: "/tutorial/deploying" },
  { label: "Boilerplate Project", to: "/tutorial/boilerplate" },
  { label: "Final Thoughts", to: "/tutorial/final-thoughts" },
]

const Header = () => {
  // Get theme and toggleTheme from context
  const { theme, toggleTheme } = useContext(ThemeContext)
  // State for mobile menu open/close
  const [isOpen, setIsOpen] = useState(false)
  // State for scroll position
  const [scrolled, setScrolled] = useState(false)
  // State for which submenu is open
  const [menuScreen, setMenuScreen] = useState<"main" | "tools" | "documentation" | "tutorial">(
    "main"
  )

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const handleScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 75) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Render main navigation links
  const renderNavLinks = (isMobile = false) => (
    <ul
      className={`flex tracking-widest uppercase ${
        isMobile ? "flex-col items-start gap-8 text-xl" : "flex-row items-center gap-6"
      }`}
    >
      {navItems.map(({ label, to, exact }) => (
        <li key={label}>
          <NavLink
            to={to}
            end={exact}
            onClick={() => {
              if (label === "Tools") setMenuScreen("tools")
              if (label === "Documentation") setMenuScreen("documentation")
              if (label === "Tutorial") setMenuScreen("tutorial")
            }}
            className={({ isActive }: { isActive: boolean }) =>
              label === "Tools"
                ? "pb-1 hover:border-b-1" // Always hover only
                : `pb-1 ${isActive ? "border-b-1" : "hover:border-b-1"}`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}

      {/* Github link for mobile */}
      {isMobile && (
        <li>
          <a href="" className="flex items-center">
            Github <GoArrowUpRight />
          </a>
        </li>
      )}
    </ul>
  )

  // Render social icons
  const renderSocialIcons = () => (
    <div className="flex gap-4 text-lg">
      {socialLinks.map(({ icon, href }, index) => (
        <a key={index} href={href}>
          {icon}
        </a>
      ))}
    </div>
  )

  // Render Tools submenu
  const renderToolsSubmenu = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4">Tools</h2>
      <ul className="flex-1 flex flex-col gap-4 overflow-y-auto text-[#ccc]">
        {toolsSubMenu.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      <div className="border-t border-slate-700 pt-4 mt-4">{renderSocialIcons()}</div>
    </div>
  )

  // Render Documentation submenu with headings and menus
  const renderDocumentationSubmenu = () => (
    <div className="flex flex-col h-full pb-32">
      <h2 className="text-xl font-bold mb-4">Documentation</h2>
      <ul className="flex-1 flex flex-col gap-4 overflow-y-auto text-[#ccc]">
        {documentationSubmenu.map((section, i) => (
          <div key={i}>
            <h3 className="font-semibold mb-2">{section.heading}</h3>
            <ul className="space-y-2 pl-4">
              {section.menus.map((menu, j) => (
                <li key={j}>
                  <NavLink to={menu.to}>{menu.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <div className="border-t border-slate-700 pt-4 mt-4">{renderSocialIcons()}</div>
    </div>
  )

  // Render Tutorial submenu
  const renderTutorialSubmenu = () => (
    <div className="flex flex-col h-full pb-32">
      <h2 className="text-xl font-bold mb-4">Tutorial</h2>
      <ul className="flex-1 flex flex-col gap-4 overflow-y-auto list-decimal pl-10 text-[#ccc]">
        {tutorialSubMenu.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      <div className="border-t border-slate-700 pt-4 mt-4">{renderSocialIcons()}</div>
    </div>
  )

  return (
    <header
      className={`section_padding fixed top-0 left-0 right-0 z-50 bg-transparent ${
        scrolled ? "bg-white dark:bg-[#181a1f]" : ""
      }`}
    >
      {/* Desktop Navbar */}
      <nav className="flex justify-between items-center gap-2 container mx-auto">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={theme === "dark" ? logoLight : logoDark}
            alt="Hardhat Light Logo"
            width={150}
            height={100}
          />
        </NavLink>
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center gap-12">
          {renderNavLinks()}
          {renderSocialIcons()}
        </div>
        {/* Dark Mode Icon */}
        <button
          className="hidden lg:flex text-2xl cursor-pointer"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <CgDarkMode />
        </button>
        {/* Mobile Hamburger */}
        <button className="flex lg:hidden text-3xl" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <IoMdClose /> : <FaBarsStaggered />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden fixed left-0 top-16 z-50 flex flex-col gap-5 border-r border-slate-700 h-full w-80 p-8 bg-white dark:bg-[#181a1f]">
          {/* Back button for submenus */}
          {menuScreen !== "main" && (
            <button className="flex items-center gap-2" onClick={() => setMenuScreen("main")}>
              ← Back
            </button>
          )}
          {/* Render appropriate menu screen */}
          {menuScreen === "main" && renderNavLinks(true)}
          {menuScreen === "tools" && renderToolsSubmenu()}
          {menuScreen === "documentation" && renderDocumentationSubmenu()}
          {menuScreen === "tutorial" && renderTutorialSubmenu()}
          {/* Social icons and dark mode at bottom */}
          <div className="flex justify-between items-center border-t border-slate-700 pt-4">
            {renderSocialIcons()}
            <button
              className="text-2xl cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              <CgDarkMode />
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
