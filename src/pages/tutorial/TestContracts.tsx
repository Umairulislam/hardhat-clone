import CodeSnippet from "../../components/CodeSnippet"

const TestContracts = () => {
  const snippet1 = `const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});`

  const snippet2 = `$ npx hardhat test

  Token contract
    ✓ Deployment should assign the total supply of tokens to the owner (654ms)


  1 passing (663ms)`

  const snippet3 = `const [owner] = await ethers.getSigners();`

  const snippet4 = `const { ethers } = require("hardhat");`

  const snippet5 = `const hardhatToken = await ethers.deployContract("Token");`

  const snippet6 = `const ownerBalance = await hardhatToken.balanceOf(owner.address);`

  const snippet7 = `expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);`

  const snippet8 = `const { expect } = require("chai");

describe("Token contract", function () {
  // ...previous test...

  it("Should transfer tokens between accounts", async function() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
  });
});`

  const snippet9 = `const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Token contract", function () {
  async function deployTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    // Fixtures can return anything you consider useful for your tests
    return { hardhatToken, owner, addr1, addr2 };
  }

  it("Should assign the total supply of tokens to the owner", async function () {
    const { hardhatToken, owner } = await loadFixture(deployTokenFixture);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should transfer tokens between accounts", async function () {
    const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
      deployTokenFixture
    );

    // Transfer 50 tokens from owner to addr1
    await expect(
      hardhatToken.transfer(addr1.address, 50)
    ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

    // Transfer 50 tokens from addr1 to addr2
    // We use .connect(signer) to send a transaction from another account
    await expect(
      hardhatToken.connect(addr1).transfer(addr2.address, 50)
    ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
  });
});`

  const snippet10 = `// This is an example test file. Hardhat will run every *.js file in 'test/',
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
const { expect } = require("chai");

// We use 'loadFixture' to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

// 'describe' is a Mocha function that allows you to organize your tests.
// Having your tests organized makes debugging them easier. All Mocha
// functions are available in the global scope.
//
// 'describe' receives the name of a section of your test suite, and a
// callback. The callback must define the tests of that section. This callback
// can't be an async function.
describe("Token contract", function () {
  // We define a fixture to reuse the same setup in every test. We use
  // loadFixture to run this setup once, snapshot that state, and reset Hardhat
  // Network to that snapshot in every test.
  async function deployTokenFixture() {
    // Get the Signers here.
    const [owner, addr1, addr2] = await ethers.getSigners();

    // To deploy our contract, we just have to call ethers.deployContract and await
    // its waitForDeployment() method, which happens once its transaction has been
    // mined.
    const hardhatToken = await ethers.deployContract("Token");

    await hardhatToken.waitForDeployment();

    // Fixtures can return anything you consider useful for your tests
    return { hardhatToken, owner, addr1, addr2 };
  }

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // 'it' is another Mocha function. This is the one you use to define each
    // of your tests. It receives the test name, and a callback function.
    //
    // If the callback function is async, Mocha will 'await' it.
    it("Should set the right owner", async function () {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);

      // 'expect' receives a value and wraps it in an assertion object. These
      // objects have a lot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be
      // equal to our Signer's owner.
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
        deployTokenFixture
      );
      // Transfer 50 tokens from owner to addr1
      await expect(
        hardhatToken.transfer(addr1.address, 50)
      ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(
        hardhatToken.connect(addr1).transfer(addr2.address, 50)
      ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
    });

    it("Should emit Transfer events", async function () {
      const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
        deployTokenFixture
      );

      // Transfer 50 tokens from owner to addr1
      await expect(hardhatToken.transfer(addr1.address, 50))
        .to.emit(hardhatToken, "Transfer")
        .withArgs(owner.address, addr1.address, 50);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50))
        .to.emit(hardhatToken, "Transfer")
        .withArgs(addr1.address, addr2.address, 50);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const { hardhatToken, owner, addr1 } = await loadFixture(
        deployTokenFixture
      );
      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

      // Try to send 1 token from addr1 (0 tokens) to owner.
      // 'require' will evaluate false and revert the transaction.
      await expect(
        hardhatToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("Not enough tokens");

      // Owner balance shouldn't have changed.
      expect(await hardhatToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });
  });
});`

  const snippet11 = `$ npx hardhat test

 Token contract
    Deployment
      ✔ Should set the right owner (889ms)
      ✔ Should assign the total supply of tokens to the owner
    Transactions
      ✔ Should transfer tokens between accounts (121ms)
      ✔ Should emit Transfer events
      ✔ Should fail if sender doesn't have enough tokens (74ms)


  5 passing (1s)`

  return (
    <section className="flex flex-col gap-6">
      <h1 className="tertiary_heading">5. Testing contracts</h1>
      <p>
        Writing automated tests when building smart contracts is of crucial importance, as your
        user's money is what's at stake.
      </p>
      <p>
        To test our contract, we are going to use Hardhat Network, a local Ethereum network designed
        for development. It comes built-in with Hardhat, and it's used as the default network. You
        don't need to setup anything to use it.
      </p>
      <p>
        In our tests we're going to use <u>ethers.js</u> to interact with the Ethereum contract we
        built in the previous section, and we'll use <u>Mocha</u> as our test runner.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">Writing tests</h2>
      <p>
        Create a new directory called test inside our project root directory and create a new file
        in there called Token.js.
      </p>
      <p>
        Let's start with the code below. We'll explain it next, but for now paste this into
        Token.js:
      </p>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>In your terminal run npx hardhat test. You should see the following output:</p>
      <CodeSnippet code={snippet2} language="bash" />
      <p>This means the test passed. Let's now explain each line:</p>
      <CodeSnippet code={snippet3} language="javascript" />
      <p>
        A Signer in ethers.js is an object that represents an Ethereum account. It's used to send
        transactions to contracts and other accounts. Here we're getting a list of the accounts in
        the node we're connected to, which in this case is Hardhat Network, and we're only keeping
        the first one.
      </p>
      <p>
        The ethers variable is available in the global scope. If you like your code always being
        explicit, you can add this line at the top:
      </p>
      <CodeSnippet code={snippet4} language="javascript" />
      <div className="border-l-8 border-[#42B983] w-full p-8 bg-[#f3f5f7] dark:bg-[#282c34]">
        <h3 className="text-black dark:text-white font-semibold">TIP</h3>
        <p className="mt-2">
          To learn more about Signer, you can look at the <u>Signers documentation</u>.
        </p>
      </div>
      <CodeSnippet code={snippet5} language="javascript" />
      <p>
        Calling ethers.deployContract("Token") will start the deployment of our token contract, and
        return a Promise that resolves to a Contract. This is the object that has a method for each
        of your smart contract functions.
      </p>
      <CodeSnippet code={snippet6} language="javascript" />
      <p>
        Once the contract is deployed, we can call our contract methods on hardhatToken. Here we get
        the balance of the owner account by calling the contract's balanceOf() method. Recall that
        the account that deploys the token gets its entire supply. By default, Contract instances
        are connected to the first signer. This means that the account in the owner variable
        executed the deployment, and balanceOf() should return the entire supply amount.
      </p>
      <CodeSnippet code={snippet7} language="javascript" />
      <p>
        Here we're again using our Contract instance to call a smart contract function in our
        Solidity code. totalSupply() returns the token's supply amount and we're checking that it's
        equal to ownerBalance, as it should be.
      </p>
      <p>
        To do this we're using Chai which is a popular JavaScript assertion library. These asserting
        functions are called "matchers", and the ones we're using here come from the{" "}
        <u>@nomicfoundation/hardhat-chai-matchers</u>
        plugin, which extends Chai with many matchers useful to test smart contracts.
      </p>

      <h4 className="text-xl font-semibold">Using a different account</h4>
      <p>
        If you need to test your code by sending a transaction from an account (or Signer in
        ethers.js terminology) other than the default one, you can use the connect() method on your
        ethers.js Contract object to connect it to a different account, like this:
      </p>
      <CodeSnippet code={snippet8} language="javascript" />

      <h2 className="text-xl font-semibold">Reusing common test setups with fixtures</h2>
      <p>
        The two tests that we wrote begin with their setup, which in this case means deploying the
        token contract. In more complex projects, this setup could involve multiple deployments and
        other transactions. Doing that in every test means a lot of code duplication. Plus,
        executing many transactions at the beginning of each test can make the test suite much
        slower.
      </p>
      <p>
        You can avoid code duplication and improve the performance of your test suite by using
        fixtures. A fixture is a setup function that is run only the first time it's invoked. On
        subsequent invocations, instead of re-running it, Hardhat will reset the state of the
        network to what it was at the point after the fixture was initially executed.
      </p>
      <CodeSnippet code={snippet9} language="javascript" />
      <p>
        Here we wrote a deployTokenFixture function that does the necessary setup and returns every
        value we use later in the tests. Then in each test, we use loadFixture to run the fixture
        and get those values. loadFixture will run the setup the first time, and quickly return to
        that state in the other tests.
      </p>

      <h5 className="text-xl font-semibold">Full coverage</h5>
      <p>
        Now that we've covered the basics that you'll need for testing your contracts, here's a full
        test suite for the token with a lot of additional information about Mocha and how to
        structure your tests. We recommend reading it thoroughly.
      </p>
      <CodeSnippet code={snippet10} language="javascript" />
      <p>
        This is what the output of npx hardhat test should look like against the full test suite:
      </p>
      <CodeSnippet code={snippet11} language="bash" />
      <p>
        Keep in mind that when you run npx hardhat test, your contracts will be automatically
        compiled if they've changed since the last time you ran your tests.
      </p>
    </section>
  )
}

export default TestContracts
