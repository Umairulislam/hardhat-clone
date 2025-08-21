import CodeSnippet from "../../components/CodeSnippet"

const NewProject = () => {
  const snippet1 = `mkdir hardhat-tutorial
cd hardhat-tutorial`

  const snippet2 = `npm init`

  const snippet3 = `npm install --save-dev hardhat`

  const snippet4 = `npx hardhat init`

  const snippet5 = `$ npx hardhat init
  888    888                      888 888               888
  888    888                      888 888               888
  888    888                      888 888               888
  8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
  888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
  888    888 .d888888 888    888  888 888  888 .d888888 888
  888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
  888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888
  
  👷 Welcome to Hardhat v2.22.17 👷‍
  
  ? What do you want to do? …
    Create a JavaScript project
    Create a TypeScript project
    Create a TypeScript project (with Viem)
  ❯ Create an empty hardhat.config.js
    Quit`

  const snippet6 = `npm install --save-dev @nomicfoundation/hardhat-toolbox`
  const snippet7 = `require("@nomicfoundation/hardhat-toolbox");
  
  /** @type import('hardhat/config').HardhatUserConfig */
  module.exports = {
    solidity: "0.8.28",
  };`

  return (
    <section className="flex flex-col gap-6">
      <h1 className="tertiary_heading">3. Creating a new Hardhat project</h1>
      <p>
        We'll install Hardhat using the Node.js package manager (npm), which is both a package
        manager and an online repository for JavaScript code.
      </p>
      <p>
        You can use other package managers with Node.js, but we suggest you use npm 7 or higher to
        follow this guide. You should already have it if you followed the previous section's steps.
      </p>
      <p>Open a new terminal and run these commands to create a new folder:</p>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>
        Then initialize an npm project as shown below. You'll be prompted to answer some questions.
      </p>
      <div className="border-l-8 border-[#42B983] w-full p-8 bg-[#f3f5f7] dark:bg-[#282c34]">
        <h3 className="text-black dark:text-white font-semibold">TIP</h3>
        <p className="mt-2">
          Use the tabs in the snippets to select your preferred package manager. We recommend using
          npm 7 or later, since it makes installing Hardhat's dependencies much easier.
        </p>
      </div>
      <CodeSnippet code={snippet2} language="bash" />
      <p>Now we can install Hardhat:</p>
      <CodeSnippet code={snippet3} language="bash" />
      <p>In the same directory where you installed Hardhat run:</p>
      <CodeSnippet code={snippet4} language="bash" />
      <p>Select Create an empty hardhat.config.js with your keyboard and hit enter.</p>
      <CodeSnippet code={snippet5} language="bash" />
      <p>
        When Hardhat is run, it searches for the closest hardhat.config.js file starting from the
        current working directory. This file normally lives in the root of your project and an empty
        hardhat.config.js is enough for Hardhat to work. The entirety of your setup is contained in
        this file.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">Hardhat's architecture</h2>
      <p>
        Hardhat is designed around the concepts of tasks and plugins. The bulk of Hardhat's
        functionality comes from plugins, and <u>you're free to choose</u>
        the ones you want to use.
      </p>

      <h3 className="text-xl font-semibold">Tasks</h3>
      <p>
        Every time you're running Hardhat from the command-line, you're running a task. For example,
        npx hardhat compile is running the compile task. To see the currently available tasks in
        your project, run npx hardhat. Feel free to explore any task by running npx hardhat help
        [task].
      </p>
      <div className="border-l-8 border-[#42B983] w-full p-8 bg-[#f3f5f7] dark:bg-[#282c34]">
        <h3 className="text-black dark:text-white font-semibold">TIP</h3>
        <p className="mt-2">
          You can create your own tasks. Check out the <u>Creating a task guide</u>.
        </p>
      </div>

      <h4 className="text-xl font-semibold">Plugins</h4>
      <p>
        Hardhat is unopinionated in terms of what tools you end up using, but it does come with some
        built-in defaults. All of which can be overridden. Most of the time the way to use a given
        tool is by consuming a plugin that integrates it into Hardhat.
      </p>
      <p>
        In this tutorial we are going to use our recommended plugin,{" "}
        <u>@nomicfoundation/hardhat-toolbox</u> , which has everything you need for developing smart
        contracts.
      </p>
      <p>To install it, run this in your project directory:</p>
      <CodeSnippet code={snippet6} language="javascript" />
      <p>Add the highlighted line to your hardhat.config.js so that it looks like this:</p>
      <CodeSnippet code={snippet7} language="javascript" />
    </section>
  )
}

export default NewProject
