import CodeSnippet from "../../components/CodeSnippet"

const QuickStart = () => {
  const snippet1 = `$ npx hardhat init
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
❯ Create a JavaScript project
  Create a TypeScript project
  Create a TypeScript project (with Viem)
  Create an empty hardhat.config.js
  Quit`

  const snippet2 = `$ npx hardhat
Hardhat version 2.9.9

Usage: hardhat [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config              A Hardhat config file.
  --emoji               Use emoji in messages.
  --help                Shows this message, or a task's help if its name is provided
  --max-memory          The maximum amount of memory that Hardhat can use.
  --network             The network to connect to.
  --show-stack-traces   Show stack traces.
  --tsconfig            A TypeScript config file.
  --verbose             Enables Hardhat verbose logging
  --version             Shows hardhat's version.


AVAILABLE TASKS:

  check                 Check whatever you need
  clean                 Clears the cache and deletes all artifacts
  compile               Compiles the entire project, building all artifacts
  console               Opens a hardhat console
  coverage              Generates a code coverage report for tests
  flatten               Flattens and prints contracts and their dependencies
  help                  Prints this message
  node                  Starts a JSON-RPC server on top of Hardhat Network
  run                   Runs a user-defined script after compiling the project
  test                  Runs mocha tests
  typechain             Generate Typechain typings for compiled contracts
  verify                Verifies contract on Etherscan

To get help for a specific task run: npx hardhat help [task]`

  const snippet3 = `// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}`

  const snippet4 = `npx hardhat compile`

  const snippet5 = `const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    return { lock, unlockTime, lockedAmount, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.unlockTime()).to.equal(unlockTime);
    });

    it("Should set the right owner", async function () {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to lock", async function () {
      const { lock, lockedAmount } = await loadFixture(
        deployOneYearLockFixture
      );

      expect(await ethers.provider.getBalance(lock.target)).to.equal(
        lockedAmount
      );
    });

    it("Should fail if the unlockTime is not in the future", async function () {
      // We don't use the fixture here because we want a different deployment
      const latestTime = await time.latest();
      const Lock = await ethers.getContractFactory("Lock");
      await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
        "Unlock time should be in the future"
      );
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called too soon", async function () {
        const { lock } = await loadFixture(deployOneYearLockFixture);

        await expect(lock.withdraw()).to.be.revertedWith(
          "You can't withdraw yet"
        );
      });

      it("Should revert with the right error if called from another account", async function () {
        const { lock, unlockTime, otherAccount } = await loadFixture(
          deployOneYearLockFixture
        );

        // We can increase the time in Hardhat Network
        await time.increaseTo(unlockTime);

        // We use lock.connect() to send a transaction from another account
        await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
          "You aren't the owner"
        );
      });

      it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
        const { lock, unlockTime } = await loadFixture(
          deployOneYearLockFixture
        );

        // Transactions are sent using the first signer by default
        await time.increaseTo(unlockTime);

        await expect(lock.withdraw()).not.to.be.reverted;
      });
    });

    describe("Events", function () {
      it("Should emit an event on withdrawals", async function () {
        const { lock, unlockTime, lockedAmount } = await loadFixture(
          deployOneYearLockFixture
        );

        await time.increaseTo(unlockTime);

        await expect(lock.withdraw())
          .to.emit(lock, "Withdrawal")
          .withArgs(lockedAmount, anyValue); // We accept any value as 'when' arg
      });
    });

    describe("Transfers", function () {
      it("Should transfer the funds to the owner", async function () {
        const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
          deployOneYearLockFixture
        );

        await time.increaseTo(unlockTime);

        await expect(lock.withdraw()).to.changeEtherBalances(
          [owner, lock],
          [lockedAmount, -lockedAmount]
        );
      });
    });
  });
});
`
  const snippet6 = `$ npx hardhat test
Compiled 2 Solidity files successfully


  Lock
    Deployment
      ✔ Should set the right unlockTime (610ms)
      ✔ Should set the right owner
      ✔ Should receive and store the funds to lock
      ✔ Should fail if the unlockTime is not in the future
    Withdrawals
      Validations
        ✔ Should revert with the right error if called too soon
        ✔ Should revert with the right error if called from another account
        ✔ Shouldn't fail if the unlockTime has arrived and the owner calls it
      Events
        ✔ Should emit an event on withdrawals
      Transfers
        ✔ Should transfer the funds to the owner


  9 passing (790ms)`

  const snippet7 = `// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});
`

  const snippet8 = `$ npx hardhat ignition deploy ./ignition/modules/Lock.js
Compiled 1 Solidity file successfully (evm target: paris).
You are running Hardhat Ignition against an in-process instance of Hardhat Network.
This will execute the deployment, but the results will be lost.
You can use --network <network-name> to deploy to a different network.

Hardhat Ignition 🚀

Deploying [ LockModule ]

Batch #1
  Executed LockModule#Lock

[ LockModule ] successfully deployed 🚀

Deployed Addresses

LockModule#Lock - 0x5FbDB2315678afecb367f032d93F642f64180aa3`

  const snippet9 = `$ npx hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/`

  const snippet10 = `npx hardhat ignition deploy ./ignition/modules/Lock.js --network localhost`

  return (
    <section id="quick-start" className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold border-b border-border pb-2">QuickStart</h1>
      <div className="border-l-8 border-[#42B983] w-full p-8 bg-[#f3f5f7] dark:bg-[#282c34]">
        <h3 className="text-black dark:text-white font-semibold">TIP</h3>
        <p className="mt-2">
          If you are using Windows, we strongly recommend using <u>WSL 2</u> to follow this guide.
        </p>
      </div>

      <p>
        We will explore the basics of creating a Hardhat project with a sample contract, tests of
        that contract, and a Hardhat Ignition module to deploy it.
      </p>
      <p>To create the sample project, run npx hardhat init in your project folder:</p>
      <CodeSnippet code={snippet1} language="bash" />
      <p>
        Let’s create the JavaScript or TypeScript project and go through these steps to compile,
        test and deploy the sample contract. We recommend using TypeScript, but if you are not
        familiar with it just pick JavaScript.
      </p>

      <h2 className="text-xl font-semibold"> Runnig Tasks</h2>
      <p>
        To first get a quick sense of what's available and what's going on, run npx hardhat in your
        project folder:
      </p>
      <CodeSnippet code={snippet2} language="bash" />
      <p>
        The list of available tasks includes the built-in ones and also those that came with any
        installed plugins. npx hardhat is your starting point to find out what tasks are available
        to run.
      </p>

      <h3 className="text-xl font-semibold">Compiling your contracts</h3>
      <p>Next, if you take a look in the contracts/ folder, you'll see Lock.sol:</p>
      <CodeSnippet code={snippet3} language="solidity" />
      <p>To compile it, simply run:</p>
      <CodeSnippet code={snippet4} language="javascript" />
      <p>
        If you created a TypeScript project, this task will also generate TypeScript bindings using
        <u>TypeChain</u>.
      </p>

      <h4 className="text-xl font-semibold">Test your contracts</h4>
      <p>
        Your project comes with tests that use <u>Mocha</u>, <u>Chai</u>, <u>Ether.js</u> and{" "}
        <u>hardhat Ignition</u>.
      </p>
      <p>If you take a look in the test/ folder, you'll see a test file:</p>
      <CodeSnippet code={snippet5} language="javascript" />
      <p>You can run your tests with npx hardhat test:</p>
      <CodeSnippet code={snippet6} language="bash" />

      <h5 className="text-xl font-semibold">Deploying your contract</h5>
      <p>Next, to deploy the contract we will use a Hardhat Ignition module.</p>
      <p>Inside the ignition/modules folder you will find a file with the following code:</p>
      <CodeSnippet code={snippet7} language="javascript" />
      <p>You can deploy it using npx hardhat ignition deploy ./ignition/modules/Lock.js:</p>
      <CodeSnippet code={snippet8} language="" />
      <p>
        To learn more check out the <u>Hardhat Ignition documentation</u>.
      </p>

      <h6 className="text-xl font-semibold">Connecting a wallet or Dapp to Hardhat Network</h6>
      <p>
        By default, Hardhat will spin up a new in-memory instance of Hardhat Network on startup.
        It's also possible to run Hardhat Network in a standalone fashion so that external clients
        can connect to it. This could be a wallet, your Dapp front-end, or a Hardhat Ignition
        deployment.
      </p>
      <p>To run Hardhat Network in this way, run npx hardhat node:</p>
      <CodeSnippet code={snippet9} language="bash" />
      <p>
        This will expose a JSON-RPC interface to Hardhat Network. To use it connect your wallet or
        application to http://127.0.0.1:8545.
      </p>
      <p>
        If you want to connect Hardhat to this node, for example to run a deployment against it, you
        simply need to run it using --network localhost.
      </p>
      <p>
        To try this, start a node with npx hardhat node and re-run the deployment using the network
        option:
      </p>
      <CodeSnippet code={snippet10} language="bash" />
      <p>
        To run Hardhat Network on specific port and allow incoming requests from a specific network
        interface or hostname, run <code>npx hardhat node --hostname 127.0.0.1 --port 8545</code>.
      </p>
      <p>
        If you want to allow incoming requests from anywhere, including external ips, use --hostname
        0.0.0.0.
      </p>
      <p>
        Congrats! You have created a project and compiled, tested and deployed a smart contract.
      </p>
      <p>
        Show us some love by starring <u>our repository on GitHub!️</u>
      </p>
    </section>
  )
}

export default QuickStart
