import { useContext } from "react"
import { communityDark, communityLight } from "../assets"
import { ThemeContext } from "../context/ThemeContext"

const Community = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <main
      className={`mt-40 flex justify-around flex-row-reverse items-center gap-10 flex-wrap bg-white dark:bg-[#20232A] p-10 ${
        theme === "dark" ? "box_shadow_dark" : "box_shadow_light"
      }`}
    >
      <section className="max-w-md">
        <img src={theme === "dark" ? communityDark : communityLight} alt="vibrant community" />
      </section>
      <section className="max-w-md flex flex-col gap-10  md:items-start">
        <div>
          <h1 className="primary_heading">vibrant community</h1>
          <p className="text-muted text-base md:text-lg mt-5">
            Great tech attracts great people. Join the Hardhat community to find answers to your
            problems and contribute to the plugin ecosystem.
          </p>
        </div>
        <a href="https://discord.com/invite/TETZs2KK4k" target="_blank">
          <button className="btn btn_secondary">Join the Hardhat Discord</button>
        </a>
      </section>
    </main>
  )
}

export default Community
