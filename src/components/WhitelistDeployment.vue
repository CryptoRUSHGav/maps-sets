<template>
  <div>
    <div>
      <button v-if="!deployerAccount" type="button" @click="authenticate" class="btn btn-primary">Authenticate to Deploy</button>
      <div v-else>
        <form>
          <div class="form-group">
            <label for="max_entries">Max Entries</label>
            <input
              v-model="max_entries"
              type="number"
              class="form-control"
              id="max_entries"
              aria-describedby="max_entry_help"
              placeholder="Enter the maximum number of members" />
            <small id="max_entry_help" class="form-text text-muted">The contract will not distribute beyond this number of addresses</small>
          </div>
          <div class="form-group">
            <label for="asa_id">ASA Token ID</label>
            <input v-model="asa_id" type="number" class="form-control" id="asa_id" placeholder="ASA ID for your Token" />
          </div>
          <div class="form-group">
            <label for="asa_amount">Token Amount</label>
            <input v-model="asa_amount" type="number" class="form-control" id="asa_amount" placeholder="Total number of tokens you are distributing." />
          </div>
          <button type="button" @click="deployContract" class="btn btn-primary">Deploy Contract</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { contractManager } from '../services/ContractManager';

  export default {
    name: 'WhitelistDeployment',
    props: {
      lastContractId: {
        type: Number,
        required: false,
        default: null,
      },
    },
    data() {
      return {
        contractId: null,
        deployerAccount: null,
        deployerAddress: null,
        asa_id: null,
        asa_amount: null,
        max_entries: null,
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
        if (!this.deployerAccount) {
          alert('You cannot deploy, please authenticate first');
          return false;
        }

        const isDeployed = await contractManager.deployContract(this.asa_id, this.asa_amount, this.max_entries);
        console.log('Is Deployed? ', isDeployed);
      },
    },
    mounted() {
      if (this.lastContractId) {
        console.log('loading last contract');
        this.contractId = this.lastContractId;
      }
    },
  };
</script>
