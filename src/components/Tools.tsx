import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { tools } from "../data"

const ToolSection = () => {
  const [activeTool, setActiveTool] = useState(tools[0])
  const location = useLocation()
  const isDarkMode = document.documentElement.classList.contains("dark")

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [location])

  return (
    <section
      className="flex justify-center flex-col md:flex-row items-center gap-5 flex-wrap mt-40"
      id="tools"
    >
      <div className="max-w-lg border-l-1 p-5 md:p-10 border-border relative cursor-pointer min-h-[400px]">
        <span className="absolute left-0 top-0 w-10 border-t-1 pl-5 border-border"></span>
        <h1 className="primary_heading">TOOLS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setActiveTool(tool)}
              className={`flex items-center gap-5 p-4 rounded-sm font-bold hover:scale-110 transition-all duration-300 ease-in-out ${
                activeTool.id === tool.id
                  ? isDarkMode
                    ? "box_shadow_dark"
                    : "box_shadow_light"
                  : ""
              }`}
            >
              <div>
                <img
                  src={tool.icon}
                  className={`rounded-sm ${
                    activeTool.id === tool.id
                      ? "shadow-none"
                      : isDarkMode
                      ? "box_shadow_dark"
                      : "box_shadow_light"
                  } p-4 w-20 md:w-full`}
                />
              </div>
              <div>
                <h2 className="text-muted">Hardhat</h2>
                <h2>{tool.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <span className="absolute left-0 bottom-0 w-10 border-t-1 pl-5 border-border"></span>
      </div>

      <div className="hidden md:block max-w-md border-l-1 py-28  border-border relative"></div>
      <div className="block md:hidden max-w-md border-t-1 px-28  border-border relative"></div>

      <div className="max-w-lg border-r-1 p-5 md:p-10 flex flex-col justify-center border-border relative min-h-[400px]">
        <span className="absolute right-0 top-0 w-10 border-t-1 pl-5 border-border"></span>
        <div className="flex flex-col md:flex-row gap-2 font-bold items-center">
          <h2 className="text-muted text-2xl">Hardhat</h2>
          <h2 className="text-2xl">{activeTool.name}</h2>
          <h2 className="bg-[#F8F4CB] text-muted text-md px-3 py-1 rounded-tl-lg rounded-br-md">
            {activeTool.tag}
          </h2>
        </div>
        <p className="mt-4 text-muted w-56 md:w-full">{activeTool.description}</p>
        <a href="#" className="mt-4 inline-block hover:underline text-muted">
          Learn more →
        </a>

        <span className="absolute right-0 bottom-0 w-10 border-t-1 pl-5 border-border"></span>
      </div>
    </section>
  )
}

export default ToolSection
