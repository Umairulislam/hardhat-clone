import React, { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import { logolight, logoDark } from "../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import {
  faCircleHalfStroke,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main>
      {/* Desktop Menu */}
      <nav
        className={`flex justify-between items-center w-full fixed top-0 z-20 gap-10 px-8 py-6 md:px-10 md:py-6 ${
          scrolled
            ? isDarkMode
              ? "bg-white"
              : "bg-zinc-900"
            : "bg-transparent"
        }`}
      >
        <div>
          <NavLink to="/">
            <img
              src={isDarkMode ? logoDark : logolight}
              alt="logo"
              className="w-32 md:w-44"
            />
          </NavLink>
        </div>
        <section className="hidden lg:flex justify-evenly items-center gap-14 text-lg uppercase">
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
            <Link
              to="/#tools"
              className={`hover:border-b-2 ${
                isDarkMode ? "hover:border-black" : "hover:border-white"
              }`}
            >
              Tools
            </Link>
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
              Documentation
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
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/HardhatHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://discord.com/invite/TETZs2KK4k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </section>
        <div className="hidden lg:flex">
          <button onClick={toggleTheme}>
            <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden fixed z-50 top-14 left-0 h-full w-full ${
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
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/HardhatHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://discord.com/invite/TETZs2KK4k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
          <div>
            <button onClick={toggleTheme} className="mt-8">
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </button>
          </div>
        </section>
      </nav>

      {/* Mobile Menu Icon */}
      <section className="lg:hidden fixed top-6 right-6 z-50">
        <button onClick={handleMenu} className="w-10 h-10 z-30 relative">
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} size="xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" />
          )}
        </button>
      </section>
    </main>
  )
}

export default Navbar
