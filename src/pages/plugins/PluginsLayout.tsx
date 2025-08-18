import { Outlet } from "react-router"

const PluginsLayout = () => {
  return (
    <main className="pt-28">
      <section className="container mx-auto">
        <Outlet />
      </section>
    </main>
  )
}

export default PluginsLayout
