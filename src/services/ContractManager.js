import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../../build/index.main.mjs';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { db } from '../../db';

const stdlib = loadStdlib('ALGO');

class ContractManager {
  constructor() {
    if (MyAlgoConnect) {
      stdlib.setWalletFallback(
        stdlib.walletFallback({
          // providerEnv: {
          //   ALGO_SERVER: 'https://testnet-api.algonode.cloud',
          //   ALGO_INDEXER_SERVER: 'https://testnet-idx.algonode.cloud',
          // },
          providerEnv: 'TestNet',
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
      console.log('Error authenticating. ', e);
    }
  }

  async deployContract(asa_id, asa_amount, max_entries) {
    this.asa_id = asa_id;
    this.asa_amount = asa_amount;
    this.max_entries = max_entries;

    const ctcDeployer = this.account.contract(backend);

    console.log('Starting Deployment');

    await backend.Deployer(ctcDeployer, {
      log: console.log,
      getInfo: async () => {
        console.log(`Populating parameters of contract: ASA ID: ${asa_id}, ASA Amount: ${asa_amount}, Max Entries: ${max_entries}`);

        return [asa_id, asa_amount, max_entries];
      },
      contractDeployed: async (contractId) => {
        console.log(contractId);
        this.contractId = contractId;

        try {
          const id = await db.contracts.add({
            contract_id: contractId,
            asa_id: asa_id,
            deployer_address: this.account.getAddress(),
            asa_amount: asa_amount,
            max_entries: max_entries,
            status: 'active',
          });

          console.log(`Contract saved to ID #${id}`);
        } catch (error) {
          alert('There was a problem deploying the contract');
          console.log(error);
          return false;
        }

        return;
      },
    });
  }
}

export const contractManager = new ContractManager();
