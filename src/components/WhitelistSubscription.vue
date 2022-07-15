<template>
  <div>
    <div>
      <button v-if="!memberAccount" type="button" @click="authenticate" class="btn btn-primary">Authenticate to Subscribe</button>
      <div v-else>
        <form>
          <div class="form-group">
            <label for="wallet_address">Wallet Address</label>
            <input type="number" class="form-control" id="wallet_address" aria-describedby="wallet_address_help" placeholder="Enter wallet address" />
            <small id="wallet_address_help" class="form-text text-muted">
              Please enter your Algorand Wallet Address. If space is available in the whitelist you will be guarranteed an AIRDROP!
            </small>
          </div>
          <button type="button" @click="subscribeToWhitelist" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { contractManager } from '../services/ContractManager';

  export default {
    name: 'WhitelistSubscription',
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
        memberAccount: null,
      };
    },
    methods: {
      async authenticate() {
        this.memberAccount = await contractManager.authenticate();

        if (this.memberAccount) {
          this.$emit('memberAccount', this.memberAccount);
        }
      },
      // async deployContract() {
      //   if (!this.deployerAccount) {
      //     alert('You cannot deploy, please authenticate first');
      //     return false;
      //   }

      //   const isDeployed = await contractManager.deployContract(this.asa_id, this.asa_amount, this.max_entries);
      //   console.log('Is Deployed? ', isDeployed);
      // },
    },
    mounted() {},
  };
</script>
