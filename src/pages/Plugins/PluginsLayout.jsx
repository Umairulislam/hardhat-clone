import { Outlet } from "react-router-dom"
import SideNavbar from "../../components/SideNavbar"

const PluginsLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar navigation for Plugins */}
      <SideNavbar />
      {/* Nested routes will be rendered here */}
      <main className="flex-1 p-4 lg:ml-72">
        <Outlet />
      </main>
    </div>
  )
}

export default PluginsLayout
