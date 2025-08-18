import { Link } from "react-router"
import { communityPlugins } from "../data"

const CommunityPlugins = () => {
  return (
    <section id="community-plugins" className="section_padding text-black dark:text-gray">
      <div>
        <h2 className="text-2xl font-semibold">Community Plugins</h2>
        <div className="mt-8 flex flex-col gap-10">
          {communityPlugins.map((plugin) => (
            <div key={plugin.id} className="flex flex-col gap-3">
              <div className="flex gap-3 flex-wrap">
                <Link
                  to={plugin.name.replace("@", "").replace("/", "")}
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

export default CommunityPlugins
