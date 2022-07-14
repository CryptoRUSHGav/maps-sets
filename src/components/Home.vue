<template>
  <div>
    <div>
      Welcome to our Whitelist. Join while you still can to receive an airdrop!
    </div>

    <WhitelistDeployment msg="Welcome Deployer" />
  </div>
</template>

<script>
import WhitelistDeployment from "./WhitelistDeployment.vue";

export default {
  name: "Home",
  components: {
    WhitelistDeployment,
  },
};
</script>
