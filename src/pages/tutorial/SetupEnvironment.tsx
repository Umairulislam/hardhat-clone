import CodeSnippet from "../../components/CodeSnippet"

const SetupEnvironment = () => {
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
    <section className="flex flex-col gap-6">
      <h1 className="tertiary_heading">2. Setting up the environment</h1>
      <p>
        Most Ethereum libraries and tools are written in JavaScript, and so is Hardhat. If you're
        not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine.
        It's the most popular solution to run JavaScript outside of a web browser and Hardhat is
        built on top of it.
      </p>
      <div className="border-l-8 border-[#42B983] w-full p-8 bg-[#f3f5f7] dark:bg-[#282c34]">
        <h3 className="text-black dark:text-white font-semibold">TIP</h3>
        <p className="mt-2">
          <u>Hardhat for Visual Studio Code</u> is the official Hardhat extension that adds advanced
          support for Solidity to VSCode. If you use Visual Studio Code, give it a try!
        </p>
      </div>

      <h2 className="text-xl font-semibold border-b border-border pb-2">Installing Node.js</h2>
      <p>
        You can <u>skip</u> this section if you already have a working Node.js {`>`}
        =18.0 installation. If not, here's how to install it on Ubuntu, MacOS and Windows.
      </p>

      <h3 className="text-xl font-semibold">Linux</h3>
      <h4 className="font-semibold">Ubuntu</h4>
      <p>Copy and paste these commands in a terminal:</p>
      <CodeSnippet code={snippet1} language="bash" />

      <h5 className="text-xl font-semibold">MacOS</h5>
      <p>
        Make sure you have git installed. Otherwise, follow these <u>instructions</u>.
      </p>
      <p>
        There are multiple ways of installing Node.js on MacOS. We will be using{" "}
        <u>Node Version Manager (nvm)</u>. Copy and paste these commands in a terminal:
      </p>
      <CodeSnippet code={snippet2} language="bash" />

      <h6 className="text-xl font-semibold">Windows</h6>
      <p>
        If you are using Windows, we strongly recommend you use Windows Subsystem for Linux (also
        known as WSL 2). You can use Hardhat without it, but it will work better if you use it.
      </p>
      <p>
        To install Node.js using WSL 2, please read <u>this guide.</u>
      </p>
      <p>
        Make sure you also have <u>git installed on WSL</u>.
      </p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">
        Upgrading your Node.js installation
      </h6>
      <p>
        If your version of Node.js is older and <u>not supported by Hardhat</u> follow the
        instructions below to upgrade.
      </p>

      <h6 className="text-xl font-semibold">Linux</h6>
      <h6 className=" font-semibold">Ubuntu</h6>
      <ol className="list-decimal list-inside flex flex-col gap-1">
        <li>Run sudo apt remove nodejs in a terminal to remove Node.js.</li>
        <li>
          Find the version of Node.js that you want to install <u>here</u> and follow the
          instructions.
        </li>
        <li>
          Run sudo apt update && sudo apt install nodejs in a terminal to install Node.js again.
        </li>
      </ol>

      <h6 className="text-xl font-semibold">MacOS</h6>
      <p>
        You can change your Node.js version using <u>nvm</u>. To upgrade to Node.js 22.x run these
        in a terminal:
      </p>
      <CodeSnippet code={snippet3} language="bash" />

      <h6 className="text-xl font-semibold">Windows</h6>
      <p>
        You need to follow the <u>same installation instructions</u> as before but choose a
        different version. You can check the list of all available versions <u>here</u>.
      </p>
    </section>
  )
}

export default SetupEnvironment
