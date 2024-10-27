import React from "react"
import { Link } from "react-router-dom"
import { CodeSnippet } from "../../components"

const HardhatFoundry = ({ isDarkMode }) => {
  const snippet1 = `npm install --save-dev @nomicfoundation/hardhat-ledger`
  const snippet2 = `require("@nomicfoundation/hardhat-ledger");`
  const snippet3 = `import "@nomicfoundation/hardhat-ledger";`
  const snippet4 = `require("@nomicfoundation/hardhat-ledger");

module.exports = {
  networks: {
    hardhat: {
      ledgerAccounts: [
        "0xa809931e3b38059adae9bc5455bc567d0509ab92",
        "0xda6a52afdae5ff66aa786da68754a227331f56e3",
        "0xbc307688a80ec5ed0edc1279c44c1b34f7746bda",
      ],
    },
  },
};`

  const snippet5 = `hardhat: {
    ledgerAccounts: [...],
    ledgerOptions: {
      derivationFunction: (x) => \`m/44'/60'/0'/\${x}\` // legacy derivation path
    }
  }`

  const snippet6 = `task("sign", "Signs a message", async (_, hre) => {
  const message =
    "0x5417aa2a18a44da0675524453ff108c545382f0d7e26605c56bba47c21b5e979";
  const account = "0xa809931e3b38059adae9bc5455bc567d0509ab92";

  const signature = await hre.network.provider.request({
    method: "personal_sign",
    params: [
      "0x5417aa2a18a44da0675524453ff108c545382f0d7e26605c56bba47c21b5e979",
      account,
    ],
  });

  console.log(
    "Signed message",
    message,
    "for Ledger account",
    account,
    "and got",
    signature
  );
});`

  const snippet7 = `try {
  //(...)
} catch (error) {
  if (DerivationPathError.isDerivationPathError(error)) {
    // error is a DerivationPathError
  }
}`

  return (
    <section
      className={`p-6 lg:px-36 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1 className="tertiary-heading">hardhat-ledger</h1>
      <p>
        <span className="text-tertiary">Hardhat </span> plugin for integration
        with a Ledger hardware wallet.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">What</h2>
      <p>
        This plugin extends the Hardhat provider enabling it to work with a
        connected Ledger wallet seamlessly.
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Installation
      </h2>
      <CodeSnippet
        code={snippet1}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet
        code={snippet2}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        Or, if you are using TypeScript, add this to your hardhat.config.ts:
      </p>
      <CodeSnippet
        code={snippet3}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Tasks</h2>
      <p>This plugin creates no additional tasks.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Environment extensions
      </h2>
      <p>This plugin adds nothing to the Hardhat Runtime Environment.</p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">
        Provider extensions
      </h2>
      <p>
        The provider supplied by Hardhat will be extended using extendProvider ,
        decorating it to be a LedgerProvider. Any successive calls to
        extendProvider will be added on top of this.
      </p>
      <p>
        A LedgerProvider knows how to connect and interact with a Ledger wallet
      </p>

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Usage</h2>
      <p>
        he only additional step to make this plugin work is to configure it
        properly through the Hardhat Config. For example, in your
        hardhat.config.js:
      </p>
      <CodeSnippet
        code={snippet4}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        This will make those three accounts available to the LedgerProvider. If
        you try to send a transaction or sign something using any of those
        accounts, the provider will try to connect to the Ledger wallet and find
        a derivation path for that address. By default, the derivation paths
        that are tried start from m/44'/60'/0'/0'/0 and go way up to
        m/44'/60'/20'/0'/0.
      </p>
      <p>
        An additional (optional) configuration is possible to specify the
        derivation path that should be used, allowing 'legacy' or otherwise
        non-standard addresses to still be used with the plugin. An example of
        such a configuration would be:
      </p>
      <CodeSnippet
        code={snippet5}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>If you want to use the provider, you could, for example in a task:</p>
      <CodeSnippet
        code={snippet6}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />

      <h2 className="plugin-heading border-b-[1px] border-gray-600">Errors</h2>
      <p>
        The package throws and exports a few errors. In case you ever need to
        catch and check for them, you can use the public static method present
        on each of them. For example:
      </p>
      <CodeSnippet
        code={snippet7}
        language="javascript"
        showLineNumbers={true}
        isCopyable={true}
      />
      <p>
        Same for the other errors, all have their corresponding .isXXXError()
        method.
      </p>

      <br />
      <div className="border-t border-gray-600 pt-4 mt-24 flex justify-center gap-2 xs:justify-between items-center text-tertiary text-[10px] sm:text-xs flex-wrap">
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-foundry"
          className="flex items-center space-x-2"
        >
          <span>&larr;</span>
          <span>@nomicfoundation/hardhat-foundry</span>
        </Link>
        <Link
          to="/hardhat-runner/plugins/nomicfoundation-hardhat-web3-v4"
          className="flex items-center space-x-2"
        >
          <span>@nomicfoundation/hardhat-web3-v4</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default HardhatFoundry
