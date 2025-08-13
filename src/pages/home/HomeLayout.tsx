import { Outlet } from "react-router"
import { Header } from "../../components"

const HomeLayout = () => {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#181a1f] dark:text-white transition-colors duration-300">
      <Header />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default HomeLayout
