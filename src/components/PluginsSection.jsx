import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { officialPlugins, communityPlugins } from "../constants"
import { useSelector } from "react-redux"

const PluginsSection = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [location])

  return (
    <main>
      <section
        className={`flex flex-col gap-5 justify-center items-start max-w-2xl mx-auto text-sm leading-relaxed ${
          isDarkMode ? "text-black" : "text-gray-300 "
        }`}
      >
        <h1
          className={`secondary-heading border-b-2 w-full py-4 ${
            isDarkMode ? " border-black" : " border-gray-500"
          }`}
        >
          Plugins
        </h1>
        <p>
          Plugins are the backbone of Hardhat, and they're built using the same
          config API that you use in your Hardhat configuration. Read the
          <a href="" className="text-tertiary">
            {""} Building plugins {""}
          </a>
          guide to learn how to create your own, and {""}
          <a href="" className="text-tertiary">
            send a pull request{" "}
          </a>
          to get it listed here.
        </p>
        <p>Extend Hardhat's functionality with the plugins below.</p>
      </section>
      <section
        className={`mt-28 flex flex-col gap-5 justify-center items-start max-w-2xl mx-auto  ${
          isDarkMode ? "text-black" : "text-gray-300 "
        }`}
      >
        <h1 className={`font-bold md:text-xl`}>Official plugins</h1>
        {officialPlugins.map((plugin) => (
          <div key={plugin.name} className="flex flex-col gap-4 mb-12">
            <div className="flex gap-2 items-center flex-wrap">
              <Link
                to={`/hardhat-runner/plugins/${plugin.name
                  .replace("@", "")
                  .replace("/", "-")}`}
              >
                <h1 className="text-tertiary font-bold">{plugin.name}</h1>
              </Link>

              <p className="text-gray-600 text-sm">| {plugin.foundation}</p>
            </div>
            <p className="text-sm">{plugin.description}</p>
            <div className="flex gap-2 flex-wrap text-xs font-light">
              {plugin.tags.map((tag, index) => (
                <span
                  key={index}
                  className={` ${
                    isDarkMode ? "bg-zinc-200" : "bg-zinc-800"
                  }  px-3 py-1 shadow-sm rounded `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        <h1 id="community-plugins" className={`font-bold md:text-xl`}>
          Community plugins
        </h1>
        {communityPlugins.map((plugin) => (
          <div key={plugin.name} className="flex flex-col gap-4 mb-12">
            <div className="flex gap-2 items-center flex-wrap">
              <a href="">
                <h1 className="text-tertiary font-bold">{plugin.name}</h1>
              </a>

              <p className="text-gray-600 text-sm">| {plugin.foundation}</p>
            </div>
            <p className="text-sm">{plugin.description}</p>
            <div className="flex gap-2 flex-wrap text-xs font-light">
              {plugin.tags.map((tag, index) => (
                <span
                  key={index}
                  className={` ${
                    isDarkMode ? "bg-zinc-200" : "bg-zinc-800"
                  }  px-3 py-1 shadow-sm rounded `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default PluginsSection
