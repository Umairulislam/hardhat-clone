import { NavLink } from "react-router"

const tutorialSubMenu = [
  { label: "Overview", to: "/tutorial" },
  { label: "Setting up the environment", to: "/tutorial/setting-up-the-environment" },
  { label: "Creating a new Hardhat project", to: "/tutorial/creating-a-new-hardhat-project" },
  { label: "Writing and compiling contracts", to: "/tutorial/writing-and-compiling-contracts" },
  { label: "Testing contracts", to: "/tutorial/testing-contracts" },
  { label: "Debugging with Hardhat Network", to: "/tutorial/debugging-with-hardhat-network" },
  { label: "Deploying to a live network", to: "/tutorial/deploying-to-a-live-network" },
  { label: "Boilerplate Project", to: "/tutorial/boilerplate-project" },
  { label: "Final Thoughts", to: "/tutorial/final-thoughts" },
]
const TutorialSidebar = () => {
  return (
    <section className="hidden lg:block fixed left-0 top top-24 border-r border-border h-[calc(100vh-100px)] w-sm p-10 bg-white dark:bg-bg-dark text-black dark:text-gray overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Tutorial</h2>
      <ul className="flex flex-col pl-5 gap-1.5 text-sm list-decimal list-inside">
        {tutorialSubMenu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              end={item.to === "/tutorial"}
              className={({ isActive }) =>
                isActive
                  ? "text-link-dark dark:text-link-light"
                  : "hover:text-link-dark dark:hover:text-link-light"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TutorialSidebar
