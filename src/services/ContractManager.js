import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "../../build/index.main.mjs";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";

const stdlib = loadStdlib("ALGO");

class ContractManager {
  constructor() {
    if (MyAlgoConnect) {
      stdlib.setWalletFallback(
        stdlib.walletFallback({
          // providerEnv: {
          //   ALGO_SERVER: 'https://testnet-api.algonode.cloud',
          //   ALGO_INDEXER_SERVER: 'https://testnet-idx.algonode.cloud',
          // },
          providerEnv: "TestNet",
          MyAlgoConnect,
        })
      );

      this.myAlgoWallet = new MyAlgoConnect();
      this.authenticated = false;
      this.account = null;
    }
  }

  async authenticate() {
    try {
      this.account = await stdlib.getDefaultAccount();

      return this.account;
    } catch (e) {
      console.log("Error authenticating. ", e);
    }
  }
}

export const contractManager = new ContractManager();
