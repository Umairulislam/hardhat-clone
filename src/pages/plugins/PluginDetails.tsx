import { useParams } from "react-router"
import { plugins } from "../../data"
import { ScrollToTop, Sidebar } from "../../components"

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
      <section>
        <plugin.component />
        <ScrollToTop />
      </section>
    </main>
  )
}

export default PluginDetails
