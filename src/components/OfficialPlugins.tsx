import { Link } from "react-router"
import { officialPlugins } from "../data"

const OfficialPlugins = () => {
  return (
    <section className="section_padding text-black dark:text-gray">
      <div>
        <h1 className="secondary_heading border-b border-border py-4">Plugins</h1>
        <p className="mt-4">
          Plugins are the backbone of Hardhat, and they're built using the same config API that you
          use in your Hardhat configuration. Read the <u>Building plugins</u> guide to learn how to
          create your own, and <u>send a pull request</u> to get it listed here.
        </p>
        <p className="mt-4">Extend Hardhat's functionality with the plugins below.</p>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold">Official Plugins</h2>
        <div className="mt-8 flex flex-col gap-10">
          {officialPlugins.map((plugin) => (
            <div key={plugin.id} className="flex flex-col gap-3">
              <div className="flex gap-3 flex-wrap">
                <Link
                  to={plugin.name.replace("@", "").replace("/", "-")}
                  className="text-lg font-bold"
                >
                  <u>{plugin.name}</u>
                </Link>
                <p className="text-muted border-l border-border pl-2">{plugin.foundation}</p>
              </div>
              <div>
                <p>{plugin.description}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {plugin.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-[#e5e6e7] dark:bg-[#20232a] text-black dark:text-white py-1 px-2 rounded-sm"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficialPlugins
