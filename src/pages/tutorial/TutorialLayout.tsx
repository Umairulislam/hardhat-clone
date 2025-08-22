import { Outlet } from "react-router"
import { ScrollToHash, TutorialSidebar } from "../../components"

const TutorialLayout = () => {
  return (
    <main className="pt-24">
      <section>
        <TutorialSidebar />
      </section>
      <section className="container mx-auto">
        <ScrollToHash />
        <Outlet />
      </section>
    </main>
  )
}

export default TutorialLayout
