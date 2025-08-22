const Overview = () => {
  return (
    <section id="overview" className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold border-b border-border pb-2">Overview</h1>
      <p>
        Hardhat is a development environment for Ethereum software. It consists of different
        components for editing, compiling, debugging and deploying your smart contracts and dApps,
        all of which work together to create a complete development environment.
      </p>
      <p>
        Hardhat Runner is the main component you interact with when using Hardhat. It's a flexible
        and extensible task runner that helps you manage and automate the recurring tasks inherent
        to developing smart contracts and dApps.
      </p>
      <p>
        Hardhat Runner is designed around the concepts of tasks and plugins. Every time you're
        running Hardhat from the command-line, you're running a task. For example, npx hardhat
        compile runs the built-in compile task. Tasks can call other tasks, allowing complex
        workflows to be defined. Users and plugins can override existing tasks, making those
        workflows customizable and extendable.
      </p>
      <p>
        This guide will take you through the installation of our recommended setup, but as most of
        Hardhat's functionality comes from plugins, you are free to customize it or choose a
        completely different path.
      </p>
    </section>
  )
}

export default Overview
