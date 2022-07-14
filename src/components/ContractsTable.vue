<template>
  <div class="table-responsive">
    <h3>Contracts</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Contract ID</th>
          <th scope="col">ASA ID</th>
          <th scope="col">ASA Amount</th>
          <th scope="col">Deployer Address</th>
          <th scope="col">Max Entries</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contract in contracts" :key="contract.id">
          <th scope="row">{{ contract.id }}</th>
          <td>{{ contract.contract_id }}</td>
          <td>{{ contract.asa_id }}</td>
          <td>{{ contract.asa_amount }}</td>
          <td>{{ contract.deployer_address }}</td>
          <td>{{ contract.max_entries }}</td>
          <td>{{ contract.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { liveQuery } from 'dexie';
  import { useObservable } from '@vueuse/rxjs';
  import { db } from '../../db';

  export default {
    name: 'ContractsTable.vue',
    components: {},
    setup() {
      return {
        db,
        contracts: useObservable(liveQuery(() => db.contracts.toArray())),
      };
    },
  };
</script>
