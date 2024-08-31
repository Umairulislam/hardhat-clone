import React from "react"
import FeatureSection from "./FeatureSection"
import {
  solidityDark,
  solidityLight,
  extensibleDark,
  extensibleLight,
  flexibilityDark,
  flexibilityLight,
  iterationDark,
  iterationLight,
} from "../assets"

const WhyHardhat = ({ isDarkMode }) => {
  return (
    <main className="mt-40 ">
      <section className="flex justify-center items-center gap-6 relative text-center flex-wrap">
        <div className="max-w-sm border-t-2 border-l-2 w-full h-12  border-slate-700"></div>
        <h1 className="primary-heading h-20">
          why hardhat
        </h1>
        <div className="max-w-sm border-t-2 border-r-2 w-full h-12  border-slate-700"></div>
      </section>
      <section>
        <FeatureSection
          title1="Run Solidity locally"
          title2="Debugging-first"
          content1="Easily deploy your contracts, run tests and debug Solidity code without dealing with live environments. Hardhat Network is a local Ethereum network designed for development."
          content2="Hardhat is the best choice for Solidity debugging. You get Solidity stack traces, console.log and explicit error messages when transactions fail."
          image={isDarkMode ? solidityLight : solidityDark}
          btnText="Get started with Solidity console.log"
          reverse
        />
        <FeatureSection
          title1="Extreme flexibility"
          title2="Bring your own tools"
          content1="Change anything you like. Even entire out-of-the-box tasks, or just parts of them. Flexible and customizable design, with little constraints."
          content2="Designed to make integrations easy, Hardhat allows you to keep using your existing tools while enabling deeper interoperability between them."
          image={isDarkMode ? flexibilityLight : flexibilityDark}
          btnText="Learn more about extending Hardhat"
        />
        <FeatureSection
          title1="Fully extensible"
          title2="Plugin ecosystem"
          content1="A tooling platform designed to be extended, Hardhat has all the utilities you need to address your project-specific needs."
          content2="Extend Hardhat with a composable ecosystem of plugins that add functionality and integrate your existing tools into a smooth workflow."
          image={isDarkMode ? extensibleLight : extensibleDark}
          btnText="Get started with plugins"
          reverse
        />
        <FeatureSection
          title1="Fast iteration"
          title2="TypeScript"
          content1="Keep your momentum going by making your development feedback loop up to 10x faster with Hardhat."
          content2="Catch mistakes before you even run your code by switching to a typed language. Hardhat provides full native support for TypeScript."
          image={isDarkMode ? iterationLight : iterationDark}
          btnText="get started with TypeScript"
        />
      </section>
    </main>
  )
}

export default WhyHardhat
