import { useParams } from "react-router"
import { Sidebar } from "../../components"
import Installation from "./Installation"
import Overview from "./Overview"
import QuickStart from "./QuickStart"

function DocDetails() {
  //   const { DocId } = useParams<{ DocId: string }>()

  //   if (!DocId) {
  //     return <div>Documentation not found</div>
  //   }

  return (
    <main>
      <section>
        <Sidebar />
      </section>
      <section className="flex flex-col gap-6 justify-center mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray">
        <Overview />
        <Installation />
        <QuickStart />
      </section>
    </main>
  )
}

export default DocDetails
