import { useParams } from "react-router"
import { tutorials } from "../../data"

const TutorialDetails = () => {
  const { tutorialId } = useParams<{ tutorialId: string }>()

  if (!tutorialId) {
    return <div>Tutorial not found</div>
  }

  const tutorial = tutorials[tutorialId]

  return (
    <main>
      <section className="mx-auto lg:ml-[24rem] p-4 md:py-6 md:px-12 lg:py-12 lg:px-32 text-black dark:text-gray">
        <tutorial.component />
      </section>
    </main>
  )
}

export default TutorialDetails
