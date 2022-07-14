<template>
  <div>
    <h1>The Coolest Airdrops</h1>
    <div>
      Welcome to our Whitelist. Join while you still can to receive an airdrop!
    </div>

    <WhitelistDeployment msg="Welcome Deployer" />

    <footer>Powered by Reach</footer>
  </div>
</template>

<script>
import WhitelistDeployment from "./WhitelistDeployment.vue";

export default {
  name: "App",
  components: {
    WhitelistDeployment,
  },
};
</script>
