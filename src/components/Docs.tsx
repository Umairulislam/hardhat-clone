import { Link } from "react-router"
import { docs } from "../data"

const Docs = () => {
  return (
    <main>
      <section className="section_padding text-black dark:text-gray flex flex-col gap-6">
        <h1 className="secondary_heading py-4">Documentation</h1>
        <p>
          Hardhat is a development environment for Ethereum software. It consists of different
          components for editing, compiling, debugging and deploying your smart contracts and dApps,
          all of which work together to create a complete development environment.
        </p>
        <p>To get started check out these sections:</p>
        <ul className="list-disc ml-4 flex flex-col gap-1 text-link-dark dark:text-link-light">
          <li className="text-tertiary ">
            <Link to="/hardhat-runner/docs/getting-started#overview">Getting Overview</Link>
          </li>
          <li className="text-tertiary ">
            <Link to="/hardhat-runner/docs/getting-started#quick-start">Quick start guide</Link>
          </li>
          <li className="text-tertiary ">
            <Link to="/tutorial">Step-by-step tutorial</Link>
          </li>
        </ul>

        <h2 className="font-semibold text-xl w-full border-b pb-2 border-border">
          Browse by component
        </h2>
        <div className="border-l-8 border-[#42B983] w-full p-8 bg-[#f3f5f7] dark:bg-[#282c34]">
          <h3 className="text-black dark:text-white font-semibold">TIP</h3>
          <p className="mt-2">
            If you are in doubt about which component you are looking for, you can start <u>here</u>
            .
          </p>
        </div>

        {docs.map((resource) => (
          <div>
            <h4 className="font-semibold text-xl">{resource.title}</h4>
            <p className="mt-3">
              {resource.description} <u> {resource.link} </u>
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Docs
