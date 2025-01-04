import { useSelector } from "react-redux"
import { CodeSnippet } from "../../components"

const WriteCompileContracts = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const snippet1 = `//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.0;


// This is the main building block for smart contracts.
contract Token {
    // Some string type variables to identify the token.
    string public name = "My Hardhat Token";
    string public symbol = "MHT";

    // The fixed amount of tokens, stored in an unsigned integer type variable.
    uint256 public totalSupply = 1000000;

    // An address type variable is used to store ethereum accounts.
    address public owner;

    // A mapping is a key/value map. Here we store each account's balance.
    mapping(address => uint256) balances;

    // The Transfer event helps off-chain applications understand
    // what happens within your contract.
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
     * Contract initialization.
     */
    constructor() {
        // The totalSupply is assigned to the transaction sender, which is the
        // account that is deploying the contract.
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    /**
     * A function to transfer tokens.
     *
     * The 'external' modifier makes a function *only* callable from *outside*
     * the contract.
     */
    function transfer(address to, uint256 amount) external {
        // Check if the transaction sender has enough tokens.
        // If 'require''s first argument evaluates to 'false', the
        // transaction will revert.
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // Transfer the amount.
        balances[msg.sender] -= amount;
        balances[to] += amount;

        // Notify off-chain applications of the transfer.
        emit Transfer(msg.sender, to, amount);
    }

    /**
     * Read only function to retrieve the token balance of a given account.
     *
     * The 'view' modifier indicates that it doesn't modify the contract's
     * state, which allows us to call it without executing a transaction.
     */
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}`

  const snippet2 = `$ npx hardhat compile
Compiled 1 Solidity file successfully (evm target: paris).`

  return (
    <section
      className={`p-6 lg:px-32 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">
        4. Writing and compiling smart contracts
      </h1>
      <p>
        We're going to create a simple smart contract that implements a token
        that can be transferred. Token contracts are most frequently used to
        exchange or store value. We won't go in depth into the Solidity code of
        the contract in this tutorial, but there's some logic we implemented
        that you should know:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>There is a fixed total supply of tokens that can't be changed.</li>
        <li>
          The entire supply is assigned to the address that deploys the
          contract.
        </li>
        <li>Anyone can receive tokens.</li>
        <li>Anyone with at least one token can transfer tokens.</li>
        <li>
          The token is non-divisible. You can transfer 1, 2, 3, or 37 tokens but
          not 2.5.
        </li>
      </ul>
      <div
        className={` border-l-8 border-[#42B983] w-full p-8 ${
          isDarkMode ? "bg-gray-200" : "bg-secondary"
        }`}
      >
        <h1>TIP</h1>
        <p className="mt-2">
          You might have heard about ERC-20, which is a token standard in
          Ethereum. Tokens such as DAI and USDC implement the ERC-20 standard
          which allows them all to be compatible with any software that can deal
          with ERC-20 tokens. For the sake of simplicity, the token we're going
          to build does not implement the ERC-20 standard.
        </p>
      </div>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Writing smart contracts
      </h2>
      <p>
        Start by creating a new directory called contracts and create a file
        inside the directory called Token.sol.
      </p>
      <p>
        Paste the code below into the file and take a minute to read the code.
        It's simple and it's full of comments explaining the basics of Solidity.
      </p>
      <div
        className={` border-l-8 border-[#42B983] w-full p-8 ${
          isDarkMode ? "bg-gray-200" : "bg-secondary"
        }`}
      >
        <h1>TIP</h1>
        <p className="mt-2">
          To get syntax highlighting and editing assistance for Solidity in
          Visual Studio Code, try{" "}
          <span className="text-tertiary">Hardhat for Visual Studio Code</span>.
        </p>
      </div>
      <CodeSnippet
        code={snippet1}
        language="solidity"
        showLineNumbers={true}
        isCopyable={true}
      />
      <div
        className={` border-l-8 border-[#42B983] w-full p-8 ${
          isDarkMode ? "bg-gray-200" : "bg-secondary"
        }`}
      >
        <h1>TIP</h1>
        <p className="mt-2">
          *.sol is used for Solidity files. We recommend matching the file name
          to the contract it contains, which is a common practice.
        </p>
      </div>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Compiling contracts
      </h2>
      <p>
        To compile the contract run npx hardhat compile in your terminal. The
        compile task is one of the built-in tasks.
      </p>
      <CodeSnippet
        code={snippet2}
        language="shell"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        The contract has been successfully compiled and it's ready to be used.
      </p>
    </section>
  )
}

export default WriteCompileContracts
