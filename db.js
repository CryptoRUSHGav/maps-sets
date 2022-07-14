import Dexie from 'dexie';

export const db = new Dexie('mns');

db.version(1).stores({
  contracts: '++id, contract_id, asa_id, deployer_address, asa_amount, max_entries, status',
});
