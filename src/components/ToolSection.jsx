import React, { useState } from "react"
import { tools } from "../constants"
import { useSelector } from "react-redux"

const ToolSection = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const [activeTool, setActiveTool] = useState(tools[0])

  return (
    <main
      className="flex justify-center flex-col md:flex-row items-center gap-5 flex-wrap mt-40"
      id="tools"
    >
      <section className="max-w-lg border-l-2 p-10 border-slate-700 relative cursor-pointer">
        <span className="absolute left-0 top-0 w-10 border-t-2 pl-5 border-slate-700"></span>
        <h1 className="text-2xl tracking-widest">TOOLS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 ">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setActiveTool(tool)}
              className={`flex items-center gap-5 p-4  font-bold hover:scale-110 transition-all duration-300 ease-in-out ${
                activeTool.id === tool.id
                  ? isDarkMode
                    ? "shadow-all-light"
                    : "shadow-all-dark"
                  : ""
              }`}
            >
              <div>
                <img
                  src={tool.icon}
                  alt=""
                  className={`${
                    activeTool.id === tool.id
                      ? "shadow-none"
                      : isDarkMode
                      ? "shadow-all-light"
                      : "shadow-all-dark"
                  } p-4`}
                />
              </div>
              <div>
                <h2 className="text-gray-500">Hardhat</h2>
                <h2>{tool.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <span className="absolute left-0 bottom-0 w-10 border-t-2 pl-5 border-slate-700"></span>
      </section>
      <section className="hidden md:block max-w-md border-l-2 py-28  border-slate-700 relative"></section>
      <section className="block md:hidden max-w-md border-t-2 px-28  border-slate-700 relative"></section>
      <section className="max-w-lg border-r-2 p-10 border-slate-700 relative">
        <span className="absolute right-0 top-0 w-10 border-t-2 pl-5 border-slate-700"></span>
        <div className="">
          <div className="flex flex-col md:flex-row gap-2 font-bold items-center">
            <h2 className="text-gray-500 text-2xl">Hardhat</h2>
            <h2 className="text-2xl">{activeTool.name}</h2>
            <h2 className="bg-[#F8F4CB] text-gray-500 text-md px-3 py-1 rounded-tl-lg rounded-br-md">
              {activeTool.tag}
            </h2>
          </div>
          <p className="mt-4 text-gray-500 w-56 md:w-full">
            {activeTool.description}
          </p>
          <a
            href="#"
            className="mt-4 inline-block hover:underline text-gray-500"
          >
            Learn more →
          </a>
        </div>
        <span className="absolute right-0 bottom-0 w-10 border-t-2 pl-5 border-slate-700"></span>
      </section>
    </main>
  )
}

export default ToolSection
