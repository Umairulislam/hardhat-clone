import { useSelector } from "react-redux"
import { CodeSnippet } from "../../components"

const SetupEnvironment = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const snippet1 = `sudo apt update
sudo apt install curl git
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs`

  const snippet2 = `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 22
nvm use 22
nvm alias default 22
npm install npm --global # Upgrade npm to the latest version`

  const snippet3 = `nvm install 22
nvm use 22
nvm alias default 22
npm install npm --global # Upgrade npm to the latest version`

  return (
    <section
      className={`p-6 lg:px-32 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">2. Setting up the environment</h1>
      <p>
        Most Ethereum libraries and tools are written in JavaScript, and so is
        Hardhat. If you're not familiar with Node.js, it's a JavaScript runtime
        built on Chrome's V8 JavaScript engine. It's the most popular solution
        to run JavaScript outside of a web browser and Hardhat is built on top
        of it.
      </p>
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
      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Installing Node.js
      </h2>
      <p>
        You can skip this section if you already have a working Node.js {`>`}
        =18.0 installation. If not, here's how to install it on Ubuntu, MacOS
        and Windows.
      </p>
      <h2 className="plugin-heading">Linux</h2>
      <h2 className=" font-semibold">Ubuntu</h2>
      <p>Copy and paste these commands in a terminal:</p>
      <CodeSnippet
        code={snippet1}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h2 className="plugin-heading">MacOS</h2>
      <p>
        Make sure you have git installed. Otherwise, follow these{" "}
        <span className="text-tertiary">instructions</span>.
      </p>
      <p>
        There are multiple ways of installing Node.js on MacOS. We will be using{" "}
        <span className="text-tertiary">Node Version Manager (nvm)</span>. Copy
        and paste these commands in a terminal:
      </p>
      <CodeSnippet
        code={snippet2}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h2 className="plugin-heading">Windows</h2>
      <p>
        If you are using Windows, we strongly recommend you use Windows
        Subsystem for Linux (also known as WSL 2). You can use Hardhat without
        it, but it will work better if you use it.
      </p>
      <p>
        To install Node.js using WSL 2, please read{" "}
        <span className="text-tertiary">this guide.</span>
      </p>
      <p>
        Make sure you also have{" "}
        <span className="text-tertiary">git installed on WSL</span>.
      </p>
      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Upgrading your Node.js installation
      </h2>
      <p>
        If your version of Node.js is older and{" "}
        <span className="text-tertiary">not supported by Hardhat</span> follow
        the instructions below to upgrade.
      </p>
      <h2 className="plugin-heading">Linux</h2>
      <h2 className=" font-semibold">Ubuntu</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Run sudo apt remove nodejs in a terminal to remove Node.js.</li>
        <li>
          Find the version of Node.js that you want to install here and follow
          the instructions.
        </li>
        <li>
          Run sudo apt update && sudo apt install nodejs in a terminal to
          install Node.js again.
        </li>
      </ol>
      <h2 className="plugin-heading">MacOS</h2>
      <p>
        You can change your Node.js version using nvm. To upgrade to Node.js
        22.x run these in a terminal:
      </p>
      <CodeSnippet
        code={snippet3}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <h2 className="plugin-heading">Windows</h2>
      <p>
        You need to follow the{" "}
        <span className="text-tertiary">same installation instructions</span> as
        before but choose a different version. You can check the list of all
        available versions here.
      </p>
    </section>
  )
}

export default SetupEnvironment
