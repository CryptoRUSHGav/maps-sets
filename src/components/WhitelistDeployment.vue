<template>
  <div>
    <div>
      <button v-if="deployerAccount" type="button" @click="authenticate">Authenticate</button>
      <div v-else>
        <div v-if="!contractId">
          <form>
            <div class="form-group">
              <label for="max_entries">Max Entries</label>
              <input type="number" class="form-control" id="max_entries" aria-describedby="max_entry_help" placeholder="Enter the maximum number of members" />
              <small id="max_entry_help" class="form-text text-muted">The contract will not distribute beyond this number of addresses</small>
            </div>
            <div class="form-group">
              <label for="asset_id">ASA Token ID</label>
              <input type="number" class="form-control" id="asset_id" placeholder="ASA ID for your Token" />
            </div>
            <div class="form-group">
              <label for="asa_amount">Token Amount</label>
              <input type="number" class="form-control" id="asa_amount" placeholder="Total number of tokens you are distributing." />
            </div>
            <button v-if="!contractId" type="button" @click="deployContract" class="btn btn-primary">Deploy Contract</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { contractManager } from '../services/ContractManager';

  export default {
    name: 'WhitelistDeployment',
    data() {
      return {
        contractId: null,
        deployerAccount: null,
      };
    },
    methods: {
      async authenticate() {
        this.deployerAccount = await contractManager.authenticate();

        if (this.deployerAccount) {
          this.$emit('deployerAccount', this.deployerAccount);
        }
      },
      async deployContract() {
        if (!contractManager.authenticated) alert('You cannot deploy, please authenticate first');
      },
    },
  };
</script>
