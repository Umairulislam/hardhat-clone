import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  logolight,
  logoDark,
  GitHubIcon,
  TwitterIcon,
  ContrastIcon,
  LinkedInIcon,
  MenuIcon,
  ClearIcon,
} from "../assets"

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main>
      {/* Desktop Menu */}
      <nav className="flex justify-between items-center gap-10 px-8 py-4 md:px-10 md:py-6 flex-wrap">
        <section>
          <NavLink to="/">
            <img src={isDarkMode ? logoDark : logolight} alt="logo" />
          </NavLink>
        </section>
        <section className="hidden md:flex justify-evenly items-center gap-14 text-lg uppercase">
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `border-b-2 ${isDarkMode ? "border-black" : "border-white"}`
                  : `hover:border-b-2 ${
                      isDarkMode ? "hover:border-black" : "hover:border-white"
                    }`
              }
            >
              Home
            </NavLink>
            <a
              href="#tools"
              className={`hover:border-b-2 ${
                isDarkMode ? "hover:border-black" : "hover:border-white"
              }`}
            >
              Tools
            </a>
            <NavLink
              to="/hardhat-runner/plugins"
              className={({ isActive }) =>
                isActive
                  ? `border-b-2 ${isDarkMode ? "border-black" : "border-white"}`
                  : `hover:border-b-2 ${
                      isDarkMode ? "hover:border-black" : "hover:border-white"
                    }`
              }
            >
              Plugins
            </NavLink>
            <NavLink
              to="/docs"
              className={({ isActive }) =>
                isActive
                  ? `border-b-2 ${isDarkMode ? "border-black" : "border-white"}`
                  : `hover:border-b-2 ${
                      isDarkMode ? "hover:border-black" : "hover:border-white"
                    }`
              }
            >
              Docs
            </NavLink>
            <NavLink
              to="/tutorial"
              className={({ isActive }) =>
                isActive
                  ? `border-b-2 ${isDarkMode ? "border-black" : "border-white"}`
                  : `hover:border-b-2 ${
                      isDarkMode ? "hover:border-black" : "hover:border-white"
                    }`
              }
            >
              Tutorial
            </NavLink>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/NomicFoundation/hardhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/HardhatHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </section>
        <section className="hidden md:flex">
          <button onClick={toggleTheme}>
            <ContrastIcon />
          </button>
        </section>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden fixed top-14 left-0 h-full w-full ${
          isDarkMode ? "light-mode" : "dark-mode"
        }  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <section className="flex flex-col items-center gap-8 mt-10 text-xl">
          <NavLink
            to="/"
            onClick={handleMenu}
            className={({ isActive }) =>
              isActive
                ? `border-b-2 ${isDarkMode ? "border-black" : "border-white"}`
                : "none"
            }
          >
            Home
          </NavLink>
          <a href="#tools" onClick={handleMenu}>
            Tools
          </a>
          <NavLink
            to="/hardhat-runner/plugins"
            onClick={handleMenu}
            className={({ isActive }) =>
              isActive
                ? `border-b-2 ${isDarkMode ? "border-black" : "border-white"}`
                : "none"
            }
          >
            Plugins
          </NavLink>
          <NavLink
            to="/docs"
            onClick={handleMenu}
            className={({ isActive }) =>
              isActive
                ? `border-b-2 ${isDarkMode ? "border-black" : "border-white"}`
                : "none"
            }
          >
            Docs
          </NavLink>
          <NavLink
            to="/tutorial"
            onClick={handleMenu}
            className={({ isActive }) =>
              isActive
                ? `border-b-2 ${isDarkMode ? "border-black" : "border-white"}`
                : "none"
            }
          >
            Tutorial
          </NavLink>
          <div className="flex gap-4">
            <a
              href="https://github.com/NomicFoundation/hardhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/HardhatHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <button onClick={toggleTheme} className="mt-8">
            <ContrastIcon />
          </button>
        </section>
      </nav>

      {/* Mobile Menu Icon */}
      <section className="md:hidden absolute top-6 right-4">
        <button onClick={handleMenu}>
          {isOpen ? <ClearIcon /> : <MenuIcon />}
        </button>
      </section>
    </main>
  )
}

export default Navbar
