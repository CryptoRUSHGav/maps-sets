<template>
  <div>
    <h1>The Coolest Airdrop</h1>
    <div class="mb-5">Welcome to our Whitelist. Join while you still can to receive an airdrop!</div>

    <WhitelistDeployment v-if="!contractId" @contractId="getContractId" />
    <WhitelistSubscription v-else :contractId="contractId" />
    <hr />
    <ContractsTable />
  </div>
</template>

<script>
  import ContractsTable from './ContractsTable.vue';
  import WhitelistDeployment from './WhitelistDeployment.vue';
  import WhitelistSubscription from './WhitelistSubscription.vue';
  import { db } from '../../db';

  export default {
    name: 'App',
    components: {
      WhitelistDeployment,
      WhitelistSubscription,
      ContractsTable,
    },
    data() {
      return {
        contractId: null,
      };
    },
    methods: {
      async loadLastContract() {
        // const upd = await db.contracts.update(1, {
        //   deployer_address: stdlib.formatAddress('0xcd5fe0b8a084c658bc3a07d96e5b89b7511a32cd18e017f7605478763ce124d6'),
        // });
        const lastContract = await db.contracts.where({ status: 'active' }).last();

        console.log('last contract: ', lastContract);

        if (lastContract && lastContract.contract_id) {
          console.log('Setting Contract ID to ' + lastContract.contract_id);
          this.contractId = parseInt(lastContract.contract_id);
        }
      },
      getContractId(value) {
        this.contractId = value;
      },
    },
    async mounted() {
      await this.loadLastContract();
    },
  };
</script>
