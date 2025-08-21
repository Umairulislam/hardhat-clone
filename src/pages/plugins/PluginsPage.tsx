import { CommunityPlugins, OfficialPlugins } from "../../components"

const PluginsPage = () => {
  return (
    <main>
      <section className="max-w-4xl mx-auto">
        <OfficialPlugins />
        <CommunityPlugins />
      </section>
    </main>
  )
}

export default PluginsPage
