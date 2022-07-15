<template>
  <div>
    <div>
      <button v-if="!memberAccount" type="button" @click="authenticate" class="btn btn-primary">Authenticate to Subscribe</button>
      <div v-else>
        <form>
          <div class="form-group">
            <label for="wallet_address">Wallet Address</label>
            <input
              v-model="walletAddress"
              type="text"
              class="form-control"
              id="wallet_address"
              aria-describedby="wallet_address_help"
              placeholder="Enter wallet address" />
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
      contractId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        memberAccount: null,
        walletAddress: null,
      };
    },
    methods: {
      async authenticate() {
        this.memberAccount = await contractManager.authenticate();

        if (this.memberAccount) {
          this.$emit('memberAccount', this.memberAccount);
        }
      },
      async subscribeToWhitelist() {
        if (!this.memberAccount) {
          alert('You cannot subscribe, please authenticate first');
          return false;
        }

        if (!this.walletAddress || this.walletAddress.length < 58) {
          alert('Please enter a valid wallet address');
          return false;
        }

        const isDeployed = await contractManager.subscribeToWhitelist(this.contractId, this.wallet_address);
        console.log('Is Deployed? ', isDeployed);
        if (isDeployed) {
          alert('Address was entered successfully');
          this.walletAddress = null;
        }
      },
    },
    mounted() {},
  };
</script>
