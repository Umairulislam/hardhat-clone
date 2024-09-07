import React from "react"
import { ethereumFoundationDark, ethereumFoundationLight } from "../assets"

const EthereumFoundation = ({ isDarkMode }) => {
  return (
    <section className={`${isDarkMode ? "dark-mode" : "light-mode"} py-20`}>
      <div className="flex justify-center items-center gap-5">
        <h1 className="text-xl">Suppported by</h1>
        <img
          src={isDarkMode ? ethereumFoundationLight : ethereumFoundationDark}
          alt=" Ethereum Foundation"
          className="w-44"
        />
      </div>
    </section>
  )
}

export default EthereumFoundation
