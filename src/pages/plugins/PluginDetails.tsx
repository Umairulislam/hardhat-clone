import { useParams } from "react-router"
import { plugins } from "../../data"
import { Sidebar } from "../../components"

const PluginDetails = () => {
  const { pluginId } = useParams<{ pluginId: string }>()

  if (!pluginId) {
    return <div>Plugin not found</div>
  }

  const plugin = plugins[pluginId]

  return (
    <main>
      <section>
        <Sidebar />
      </section>

      <section className="mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray">
        <plugin.component />
      </section>
    </main>
  )
}

export default PluginDetails
