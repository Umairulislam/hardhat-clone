import React from "react"
import { PluginsSection } from "../../components"

const Plugins = ({ isDarkMode }) => {
  return (
    <main>
      <section className="custom-padding">
        <PluginsSection isDarkMode={isDarkMode} />
      </section>
    </main>
  )
}

export default Plugins
