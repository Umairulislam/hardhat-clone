import React, { useState } from "react"
import { tools } from "../constants"

const ToolSection = () => {
  const [activeTool, setActiveTool] = useState(tools[0])

  return (
    <div className="flex justify-between items-center p-10 bg-gray-900 text-white">
      <div className="w-1/3 border-r border-gray-700">
        <h2 className="mb-5 text-lg font-bold">TOOLS</h2>
        <div className="space-y-4">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`flex items-center p-4 cursor-pointer rounded-lg transition ${
                activeTool.id === tool.id ? "bg-gray-800" : "bg-gray-700"
              }`}
              onClick={() => setActiveTool(tool)}
            >
              <div className="text-3xl mr-4">
                <img src={tool.icon} alt="" className="w-10"/>
              </div>
              <div className="font-medium">{tool.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 pl-10">
        <h2 className="text-3xl font-bold">{activeTool.name}</h2>
        <span className="inline-block mt-4 bg-yellow-500 text-black py-1 px-3 rounded-full">
          {activeTool.tag}
        </span>
        <p className="mt-4 text-gray-300">{activeTool.description}</p>
        <a href="#" className="mt-4 inline-block text-blue-400 hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  )
}

export default ToolSection
