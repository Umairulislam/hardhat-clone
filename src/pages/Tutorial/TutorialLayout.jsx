import { Outlet } from "react-router-dom"
import { TutorialSidebar } from "../../components"

const TutorialLayout = () => {
  return (
    <div className="flex pt-32">
      {/* Sidebar navigation for Tutorial */}
      <TutorialSidebar />
      {/* Nested routes will be rendered here */}
      <main className="flex-1 p-4 lg:ml-72">
        <Outlet />
      </main>
    </div>
  )
}

export default TutorialLayout
