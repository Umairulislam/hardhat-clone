import React from "react"
import { useSelector } from "react-redux"

const Overview = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1>Overview</h1>
    </section>
  )
}

export default Overview
