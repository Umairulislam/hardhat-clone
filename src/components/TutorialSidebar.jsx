import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const TutorialSidebar = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const location = useLocation()

  const tutorialLinks = [
    {
      id: 1,
      title: "Overview",
      path: "/tutorial",
    },
    {
      id: 2,
      title: "Setting up the environment",
      path: "/tutorial/setting-up-the-environment",
    },
    {
      id: 3,
      title: "Creating a new Hardhat project",
      path: "/tutorial/creating-a-new-hardhat-project",
    },
    {
      id: 4,
      title: "Writing and compiling contracts",
      path: "/tutorial/writing-and-compiling-contracts",
    },
    { id: 5, title: "Testing contracts", path: "/tutorial/testing-contracts" },
    {
      id: 6,
      title: "Debugging with Hardhat Network",
      path: "/tutorial/debugging-with-hardhat-network",
    },
    {
      id: 7,
      title: "Deploying to a live network",
      path: "/tutorial/deploying-to-a-live-network",
    },
    {
      id: 8,
      title: "Boilerplate Project",
      path: "/tutorial/boilerplate-project",
    },
    { id: 9, title: "Final thoughts", path: "/tutorial/final-thoughts" },
  ]

  return (
    <div
      className={`fixed left-0 hidden lg:block w-80 border-r-[1px] border-gray-400 h-[calc(100vh-140px)] overflow-y-auto px-4 ${
        isDarkMode ? "text-black" : "text-gray-300"
      }`}
    >
      <nav>
        <h2
          className={`font-bold  mb-2 ${
            tutorialLinks.some((link) => location.pathname === link.path)
              ? "text-tertiary border-l-2 pl-1 border-tertiary"
              : ""
          }`}
        >
          Tutorial
        </h2>
        {tutorialLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.id}
              to={link.path}
              className={`block text-sm font-light ml-8 py-2 ${
                isActive ? "text-tertiary " : ""
              }`}
            >
              {link.id}. {link.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default TutorialSidebar
