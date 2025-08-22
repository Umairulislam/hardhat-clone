import CodeSnippet from "../../components/CodeSnippet"

const Installation = () => {
  const snippet1 = `npm install --save-dev hardhat`
  return (
    <section id="installation" className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold border-b border-border pb-2">Installation</h1>
      <div className="border-l-8 border-[#42B983] w-full p-8 bg-[#f3f5f7] dark:bg-[#282c34]">
        <h3 className="text-black dark:text-white font-semibold">TIP</h3>
        <p className="mt-2">
          <u>Hardhat for Visual Studio Code</u> is the official Hardhat extension that adds advanced
          support for Solidity to VSCode. If you use Visual Studio Code, give it a try!
        </p>
      </div>
      <p>
        Hardhat is used through a local installation in your project. This way your environment will
        be reproducible, and you will avoid future version conflicts.
      </p>
      <p>
        To install it, you need to create an npm project by going to an empty folder, running npm
        init, and following its instructions. You can use another package manager, like yarn, but we
        recommend you use npm 7 or later, as it makes installing Hardhat plugins simpler.
      </p>
      <p>Once your project is ready, you should run</p>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>
        To use your local installation of Hardhat, you need to use npx to run it (i.e. npx hardhat
        init).
      </p>
    </section>
  )
}

export default Installation
