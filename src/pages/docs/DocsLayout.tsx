import { Outlet } from "react-router"
import { ScrollToHash } from "../../components"

const DocsLayout = () => {
  return (
    <main className="pt-28">
      <section className="container mx-auto">
        <ScrollToHash />
        <Outlet />
      </section>
    </main>
  )
}

export default DocsLayout
