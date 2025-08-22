import CodeSnippet from "../../components/CodeSnippet"
import PageNavigator from "../../components/PageNavigator"

const PluginLedger = () => {
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
    <section className="flex flex-col gap-6 justify-center">
      <h1 className="tertiary_heading">hardhat-ledger</h1>
      <p>
        <u>Hardhat </u> plugin for integration with a Ledger hardware wallet.
      </p>

      <h2 className="text-xl font-semibold border-b border-border pb-2">What</h2>
      <p>
        This plugin extends the Hardhat provider enabling it to work with a connected Ledger wallet
        seamlessly.
      </p>

      <h3 className="text-xl font-semibold border-b border-border pb-2">Installation</h3>
      <CodeSnippet code={snippet1} language="javascript" />
      <p>And add the following statement to your hardhat.config.js:</p>
      <CodeSnippet code={snippet2} language="javascript" />
      <p>Or, if you are using TypeScript, add this to your hardhat.config.ts:</p>
      <CodeSnippet code={snippet3} language="javascript" />

      <h4 className="text-xl font-semibold border-b border-border pb-2">Tasks</h4>
      <p>This plugin creates no additional tasks.</p>

      <h5 className="text-xl font-semibold border-b border-border pb-2">Environment extensions</h5>
      <p>This plugin adds nothing to the Hardhat Runtime Environment.</p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Provider extensions</h6>
      <p>
        The provider supplied by Hardhat will be extended using <u>extendProvider</u> , decorating
        it to be a LedgerProvider. Any successive calls to extendProvider will be added on top of
        this.
      </p>
      <p>A LedgerProvider knows how to connect and interact with a Ledger wallet</p>

      <h6 className="text-xl font-semibold border-b border-border pb-2">Usage</h6>
      <p>
        he only additional step to make this plugin work is to configure it properly through the
        Hardhat Config. For example, in your hardhat.config.js:
      </p>
      <CodeSnippet code={snippet4} language="javascript" />
      <p>
        This will make those three accounts available to the LedgerProvider. If you try to send a
        transaction or sign something using any of those accounts, the provider will try to connect
        to the Ledger wallet and find a derivation path for that address. By default, the derivation
        paths that are tried start from m/44'/60'/0'/0'/0 and go way up to m/44'/60'/20'/0'/0.
      </p>
      <p>
        An additional (optional) configuration is possible to specify the derivation path that
        should be used, allowing 'legacy' or otherwise non-standard addresses to still be used with
        the plugin. An example of such a configuration would be:
      </p>
      <CodeSnippet code={snippet5} language="javascript" />
      <p>If you want to use the provider, you could, for example in a task:</p>
      <CodeSnippet code={snippet6} language="javascript" />

      <h6 className="text-xl font-semibold border-b border-border pb-2">Errors</h6>
      <p>
        The package throws and exports a few <u>errors</u>. In case you ever need to catch and check
        for them, you can use the public static method present on each of them. For example:
      </p>
      <CodeSnippet code={snippet7} language="javascript" />
      <p>Same for the other errors, all have their corresponding .isXXXError() method.</p>

      <PageNavigator
        prev={{
          label: "@nomicfoundation/hardhat-foundry",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-foundry",
        }}
        next={{
          label: "@nomicfoundation/hardhat-web3-v4",
          href: "/hardhat-runner/plugins/nomicfoundation-hardhat-web3-v4",
        }}
      />
    </section>
  )
}

export default PluginLedger
