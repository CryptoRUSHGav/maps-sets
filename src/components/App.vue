<template>
  <div>
    <h1>The Coolest Airdrops</h1>
    <div>Welcome to our Whitelist. Join while you still can to receive an airdrop!</div>

    <WhitelistDeployment v-if="!contractId" @contractId="getContractId" />
    <ContractsTable />
  </div>
</template>

<script>
  import ContractsTable from './ContractsTable.vue';
  import WhitelistDeployment from './WhitelistDeployment.vue';

  export default {
    name: 'App',
    components: {
      WhitelistDeployment,
      ContractsTable,
    },
    data() {
      return {
        contractId: null,
      };
    },
    methods: {
      getContractId(value) {
        this.contractId = value;
      },
    },
  };
</script>
