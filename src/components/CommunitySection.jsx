import React from "react"
import { communityDark, communityLight } from "../assets"
import { useSelector } from "react-redux"

const CommunitySection = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <main
      className={`mt-40 flex justify-around flex-row-reverse items-center gap-10 flex-wrap ${
        isDarkMode ? "bg-lightBackground" : "bg-secondary"
      } p-10 ${isDarkMode ? "shadow-all-light" : "shadow-all-dark"}`}
    >
      <section className="max-w-md">
        <img src={isDarkMode ? communityLight : communityDark} alt="" />
      </section>
      <section className="max-w-md flex flex-col gap-10  md:items-start">
        <div>
          <h1 className="primary-heading">vibrant community</h1>
          <p className="text-gray-500 mt-5">
            Great tech attracts great people. Join the Hardhat community to find
            answers to your problems and contribute to the plugin ecosystem.
          </p>
        </div>
        <a href="https://discord.com/invite/TETZs2KK4k" target="_blank">
          <button className="btn btn-secondary">
            Join the Hardhat Discord
          </button>
        </a>
      </section>
    </main>
  )
}

export default CommunitySection
