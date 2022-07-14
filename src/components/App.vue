<template>
  <div>
    <h1>The Coolest Airdrops</h1>
    <div>Welcome to our Whitelist. Join while you still can to receive an airdrop!</div>

    <WhitelistDeployment v-if="!contractId" @contractId="getContractId" />
  </div>
</template>

<script>
  import WhitelistDeployment from './WhitelistDeployment.vue';

  export default {
    name: 'App',
    components: {
      WhitelistDeployment,
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
