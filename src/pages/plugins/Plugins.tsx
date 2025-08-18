import { CommunityPlugins, OfficialPlugins } from "../../components"

const Plugins = () => {
  return (
    <main>
      <section className="max-w-4xl mx-auto">
        <OfficialPlugins />
        <CommunityPlugins />
      </section>
    </main>
  )
}

export default Plugins
