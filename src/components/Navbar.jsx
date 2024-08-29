import React from "react"
import { NavLink } from "react-router-dom"
import {
  hardhatLogo,
  GitHubIcon,
  TwitterIcon,
  ContrastIcon,
  LinkedInIcon,
} from "../assets"

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="flex justify-between items-center gap-12 px-10 py-6">
      <section>
        <NavLink to="/">
          <img src={hardhatLogo} alt="logo" />
        </NavLink>
      </section>
      <section className="flex justify-evenly items-center gap-14 text-lg uppercase ">
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
            to="/plugins"
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
          <a href="" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </section>
      <section>
        <button onClick={toggleTheme}>
          <ContrastIcon />
        </button>
      </section>
    </nav>
  )
}

export default Navbar
