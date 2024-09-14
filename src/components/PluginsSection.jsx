import React from "react"
import { officialPlugins, communityPlugins } from "../constants"

const PluginsSection = ({ isDarkMode }) => {
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
        <h1 className={`font-semibold md:text-xl`}>Official plugins</h1>
        {officialPlugins.map((plugin) => (
          <div className="flex flex-col gap-4 mb-12">
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
                  class={` ${
                    isDarkMode ? "bg-zinc-200" : "bg-zinc-800"
                  }  px-3 py-1 shadow-sm rounded `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        <h1 className={`font-semibold md:text-xl`}>Community plugins</h1>
        {communityPlugins.map((plugin) => (
          <div className="flex flex-col gap-4 mb-12">
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
                  class={` ${
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
