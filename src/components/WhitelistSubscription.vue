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
              placeholder="Enter wallet address"
              disabled />
            <small id="wallet_address_help" class="form-text text-muted">
              This is your Algorand Wallet Address. If space is available in the whitelist you will be guaranteed an AIRDROP!
            </small>
          </div>
          <button type="button" @click="subscribeToWhitelist" class="btn btn-primary" :disabled="isSubscribing">Subscribe</button>
        </form>

        <div v-if="subscribing" class="progress mt-2">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            :style="progressWidth"
            :aria-valuenow="currentProgress"
            aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>

        <div v-if="memberAccount" class="mt-5">
          <h4>Contract View Information:</h4>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Members in list:</strong>
              {{ membersCnt }} ({{ maxMembers - membersCnt }} remaining)
            </li>
            <li class="list-group-item">
              <strong>Last Added Member:</strong>
              {{ lastMember }}
            </li>
            <li class="list-group-item">
              <strong>Airdrop Amount:</strong>
              {{ airdropAmount }}
            </li>
          </ul>
        </div>
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
        membersCnt: null,
        lastMember: null,
        airdropAmount: null,
        maxMembers: null,
        walletAddress: null,
        progress: 50,
        isSubscribing: false,
      };
    },
    computed: {
      currentProgress() {
        console.log(this.progress);
        return this.progress;
      },
      progressWidth() {
        return `width: ${this.currentProgress}%`;
      },
      subscribing() {
        console.log(this.isSubscribing);
        return this.isSubscribing;
      },
    },
    methods: {
      async authenticate() {
        this.memberAccount = await contractManager.authenticate();

        if (this.memberAccount) {
          this.$emit('memberAccount', this.memberAccount);
          this.walletAddress = this.memberAccount.networkAccount.addr;

          [this.membersCnt, this.lastMember, this.airdropAmount] = await contractManager.getViewInfo(this.contractId);
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

        this.isSubscribing = true;
        this.progress = 50;

        const isSubscribed = await contractManager.subscribeToWhitelist(this.contractId, this.wallet_address);
        this.progress = 100;
        console.log('Is Subscribed? ', isSubscribed);
        if (isSubscribed) {
          alert('Address was entered successfully');
          this.isSubscribing = false;
          window.location.reload();
        }
      },
    },
    async mounted() {
      this.contract = await contractManager.loadContract(this.contractId);

      if (this.contract) {
        console.log(this.contract);
        this.maxMembers = parseInt(this.contract.max_entries);
      }
    },
  };
</script>
