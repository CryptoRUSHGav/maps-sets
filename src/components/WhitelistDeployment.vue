<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="authenticate">Authenticate</button>
    </div>
  </div>
</template>
<script>
import { contractManager } from "../services/ContractManager";

export default {
  name: "WhitelistDeployment",
  methods: {
    authenticate() {
      contractManager.authenticate();
    },
  },
};
</script>
