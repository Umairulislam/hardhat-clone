import React from "react"
import { useSelector } from "react-redux"
import { CodeSnippet } from "../../components"

const Installation = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const snippet1 = `npm install --save-dev hardhat`

  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading border-b-[1px] border-gray-600">
        Installation
      </h1>
      <div
        className={` border-l-8 border-[#42B983] w-full p-8 ${
          isDarkMode ? "bg-gray-200" : "bg-secondary"
        }`}
      >
        <h1>TIP</h1>
        <p className="mt-2">
          <span className="text-tertiary">Hardhat for Visual Studio Code</span>{" "}
          is the official Hardhat extension that adds advanced support for
          Solidity to VSCode. If you use Visual Studio Code, give it a try!
        </p>
      </div>
      <p>
        Hardhat is used through a local installation in your project. This way
        your environment will be reproducible, and you will avoid future version
        conflicts.
      </p>
      <p>
        To install it, you need to create an npm project by going to an empty
        folder, running npm init, and following its instructions. You can use
        another package manager, like yarn, but we recommend you use npm 7 or
        later, as it makes installing Hardhat plugins simpler.
      </p>
      <p>Once your project is ready, you should run</p>
      <CodeSnippet
        code={snippet1}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        To use your local installation of Hardhat, you need to use npx to run it
        (i.e. npx hardhat init).
      </p>
    </section>
  )
}

export default Installation
