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

    try {
      console.log('Accepting ASA', asa_id, asa_amount);
      await this.account.tokenAccept(asa_id);

      const asa_balance = stdlib.bigNumberToNumber(await this.account.balanceOf(asa_id));
      console.log(asa_balance);

      if (asa_balance < asa_amount) {
        alert(`Your balance of ${asa_balance} for ASA #${asa_id} is insufficient to proceed.`);
        return false;
      }
    } catch (e) {
      alert(e);
      return false;
    }

    console.log('Starting Deployment');

    await backend.Deployer(ctcDeployer, {
      log: console.log,
      getInfo: async () => {
        console.log(`Populating parameters of contract: ASA ID: ${asa_id}, ASA Amount: ${asa_amount}, Max Entries: ${max_entries}`);

        return [asa_id, asa_amount, max_entries];
      },
      contractDeployed: async (contractId) => {
        const contract_id = stdlib.bigNumberToNumber(contractId);
        console.log(contractId, contractId);
        this.contractId = contract_id;

        try {
          const id = await db.contracts.add({
            contract_id: Number(contract_id),
            asa_id: Number(asa_id),
            deployer_address: stdlib.formatAddress(this.account.getAddress()),
            asa_amount: Number(asa_amount),
            max_entries: Number(max_entries),
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
      ready: () => {
        window.location.reload();
        return;
      },
    });

    return true;
  }

  async subscribeToWhitelist(contractId, walletAddress) {
    if (!this.account) {
      alert('Please authenticate first.');
      return false;
    }

    if (!contractId) {
      alert('Please provide a contract.');
      return false;
    }

    const ctcMember = this.account.contract(backend, contractId);
    const memberApi = ctcMember.a.MemberAPI;

    let isSubscribed = false;
    try {
      console.log('Accepting ASA');
      const contract = await this.loadContract(contractId);
      console.log(contract);
      await this.account.tokenAccept(contract.asa_id);

      let [membersCnt, lastMember, airdropAmount] = await this.getViewInfo(contractId);

      isSubscribed = await memberApi.joinWhitelist();

      if (membersCnt + 1 >= contract.max_entries) {
        const update = await db.contracts.update(contract.id, { status: 'settled' });
        console.log('Status updated? ', update);
      }
    } catch (e) {
      alert(e.message);

      if (e.message.match(/The whitelist does not accept any more members/)) {
        alert("We're full");
      }
    }

    return isSubscribed;
  }

  async getViewInfo(contractId) {
    if (!this.account) {
      alert('Please authenticate first.');
      return false;
    }

    const ctcMember = this.account.contract(backend, contractId);
    const v = ctcMember.views.Whitelist;

    let membersCnt = await v.membersCnt();

    membersCnt = membersCnt ? stdlib.bigNumberToNumber(membersCnt[1]) : 0;

    let lastMember = await v.lastMember();
    lastMember = lastMember ? stdlib.formatAddress(lastMember[1]) : null;

    let airdropAmount = await v.airdropAmount();
    airdropAmount = airdropAmount ? stdlib.bigNumberToNumber(airdropAmount[1]) : 0;

    console.log([membersCnt, lastMember, airdropAmount]);
    return [membersCnt, lastMember, airdropAmount];
  }

  async loadContract(contractId) {
    if (!contractId) {
      alert('Please provide a contract to load');
      return false;
    }

    const contract = await db.contracts.get({ contract_id: contractId });

    console.log('contract', contract);
    return contract;
  }
}

export const contractManager = new ContractManager();
