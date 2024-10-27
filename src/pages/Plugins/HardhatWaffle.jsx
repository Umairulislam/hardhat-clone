import React from "react"
import { Link } from "react-router-dom"

const HardhatWaffle = ({ isDarkMode }) => {
  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">@nomiclabs/hardhat-waffle plugin</h1>
      <p>
        This plugin integrates Hardhat with
        <span className="text-tertiary"> Waffle </span>
      </p>
      <p>
        To read more please visit{" "}
        <span className="text-tertiary"> his site </span>.
      </p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomiclabs-hardhat-vyper"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomiclabs/hardhat-vyper</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomiclabs-hardhat-web3"
          className="flex items-center space-x-2"
        >
          <span>@nomiclabs/hardhat-web3</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatWaffle
