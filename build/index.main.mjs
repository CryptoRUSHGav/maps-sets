// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      Whitelist: {
        ASA: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v442, v446] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v446, v468, v469, v470, v471, v479] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v446, v468, v469, v470, v471, v482, v495, v502, v503] = svs;
              return (await ((async () => {
                
                
                return v468;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc5
          },
        ASAAmount: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v442, v446] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v446, v468, v469, v470, v471, v479] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v446, v468, v469, v470, v471, v482, v495, v502, v503] = svs;
              return (await ((async () => {
                
                
                return v469;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        airdropAmount: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v442, v446] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v446, v468, v469, v470, v471, v479] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v446, v468, v469, v470, v471, v482, v495, v502, v503] = svs;
              return (await ((async () => {
                
                
                return v470;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        lastMember: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v442, v446] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v446, v468, v469, v470, v471, v479] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v446, v468, v469, v470, v471, v482, v495, v502, v503] = svs;
              return (await ((async () => {
                
                
                return v482;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          },
        maxMembers: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v442, v446] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v446, v468, v469, v470, v471, v479] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v446, v468, v469, v470, v471, v482, v495, v502, v503] = svs;
              return (await ((async () => {
                
                
                return v471;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        membersCnt: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v442, v446] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v446, v468, v469, v470, v471, v479] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v446, v468, v469, v470, v471, v482, v495, v502, v503] = svs;
              return (await ((async () => {
                
                
                return v495;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      1: [ctc3, ctc4],
      2: [ctc4, ctc5, ctc0, ctc0, ctc0, ctc3],
      5: [ctc4, ctc5, ctc0, ctc0, ctc0, ctc4, ctc0, ctc3, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3, ctc3]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v442 = [v441];
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v448, time: v447, didSend: v22, from: v446 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v448, time: v447, didSend: v22, from: v446 } = txn1;
  ;
  const v451 = stdlib.protect(ctc4, await interact.getInfo(), {
    at: './index.rsh:29:69:application',
    fs: ['at ./index.rsh:28:16:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)'],
    msg: 'getInfo',
    who: 'Deployer'
    });
  const v452 = v451[stdlib.checkedBigNumberify('./index.rsh:29:69:application', stdlib.UInt_max, '0')];
  const v453 = v451[stdlib.checkedBigNumberify('./index.rsh:29:69:application', stdlib.UInt_max, '1')];
  const v454 = v451[stdlib.checkedBigNumberify('./index.rsh:29:69:application', stdlib.UInt_max, '2')];
  const v458 = stdlib.gt(v453, stdlib.checkedBigNumberify('./index.rsh:31:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:31:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:28:16:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)'],
    msg: 'No negative amounts allowed.',
    who: 'Deployer'
    });
  const v460 = stdlib.gt(v454, stdlib.checkedBigNumberify('./index.rsh:33:20:decimal', stdlib.UInt_max, '0'));
  const v461 = stdlib.le(v454, v453);
  const v462 = v460 ? v461 : false;
  stdlib.assert(v462, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:28:16:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)'],
    msg: 'We can\'t have more members than tokens to distribute!',
    who: 'Deployer'
    });
  const v464 = stdlib.div(v453, v454);
  const v465 = stdlib.gt(v464, stdlib.checkedBigNumberify('./index.rsh:38:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v465, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:28:16:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)'],
    msg: 'We do not want to be airdropping some debt!',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v442, v446, v452, v453, v464, v454],
    evt_cnt: 4,
    funcNum: 1,
    lct: v447,
    onlyIf: true,
    out_tys: [ctc2, ctc3, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v468, v469, v470, v471], secs: v473, time: v472, didSend: v92, from: v467 } = txn2;
      
      const v474 = v442[stdlib.checkedBigNumberify('./index.rsh:44:12:dot', stdlib.UInt_max, '0')];
      const v476 = v474[stdlib.checkedBigNumberify('./index.rsh:44:12:dot', stdlib.UInt_max, '1')];
      const v477 = v474[stdlib.checkedBigNumberify('./index.rsh:44:12:dot', stdlib.UInt_max, '2')];
      const v478 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v476, v477];
      const v479 = stdlib.Array_set(v442, stdlib.checkedBigNumberify('./index.rsh:44:12:dot', stdlib.UInt_max, '0'), v478);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v468
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc7, ctc2, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v468, v469, v470, v471], secs: v473, time: v472, didSend: v92, from: v467 } = txn2;
  const v474 = v442[stdlib.checkedBigNumberify('./index.rsh:44:12:dot', stdlib.UInt_max, '0')];
  const v476 = v474[stdlib.checkedBigNumberify('./index.rsh:44:12:dot', stdlib.UInt_max, '1')];
  const v477 = v474[stdlib.checkedBigNumberify('./index.rsh:44:12:dot', stdlib.UInt_max, '2')];
  const v478 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v476, v477];
  const v479 = stdlib.Array_set(v442, stdlib.checkedBigNumberify('./index.rsh:44:12:dot', stdlib.UInt_max, '0'), v478);
  ;
  ;
  const v481 = stdlib.addressEq(v446, v467);
  stdlib.assert(v481, {
    at: './index.rsh:44:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v446, v468, v469, v470, v471, v479],
    evt_cnt: 0,
    funcNum: 2,
    lct: v472,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), [[v469, v468]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v484, time: v483, didSend: v99, from: v482 } = txn3;
      
      ;
      const v485 = v479[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0')];
      const v486 = v485[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0')];
      const v487 = stdlib.add(v486, v469);
      const v490 = v485[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '1')];
      const v491 = v485[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '2')];
      const v492 = [v487, v490, v491];
      const v493 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'), v492);
      sim_r.txns.push({
        amt: v469,
        kind: 'to',
        tok: v468
        });
      const v495 = stdlib.checkedBigNumberify('./index.rsh:59:40:decimal', stdlib.UInt_max, '0');
      const v496 = v483;
      const v502 = v493;
      const v503 = stdlib.checkedBigNumberify('./index.rsh:24:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v510 = stdlib.lt(v495, stdlib.checkedBigNumberify('./index.rsh:67:25:decimal', stdlib.UInt_max, '5'));
        
        return v510;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v585 = v502[stdlib.checkedBigNumberify('./index.rsh:116:32:application', stdlib.UInt_max, '0')];
        const v586 = v585[stdlib.checkedBigNumberify('./index.rsh:116:32:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v446,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v446,
          tok: v468
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v468
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc3, ctc3, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v484, time: v483, didSend: v99, from: v482 } = txn3;
  ;
  const v485 = v479[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0')];
  const v486 = v485[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0')];
  const v487 = stdlib.add(v486, v469);
  const v490 = v485[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '1')];
  const v491 = v485[stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '2')];
  const v492 = [v487, v490, v491];
  const v493 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:47:12:dot', stdlib.UInt_max, '0'), v492);
  ;
  const v494 = stdlib.addressEq(v446, v482);
  stdlib.assert(v494, {
    at: './index.rsh:47:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  let v495 = stdlib.checkedBigNumberify('./index.rsh:59:40:decimal', stdlib.UInt_max, '0');
  let v496 = v483;
  let v502 = v493;
  let v503 = stdlib.checkedBigNumberify('./index.rsh:24:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v510 = stdlib.lt(v495, stdlib.checkedBigNumberify('./index.rsh:67:25:decimal', stdlib.UInt_max, '5'));
    
    return v510;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v529], secs: v531, time: v530, didSend: v255, from: v528 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v533 = v502[stdlib.checkedBigNumberify('./index.rsh:86:22:application', stdlib.UInt_max, '0')];
    const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:86:22:application', stdlib.UInt_max, '0')];
    const v535 = stdlib.ge(v534, v470);
    stdlib.assert(v535, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
      msg: 'NFT needs to move into escrow.',
      who: 'Deployer'
      });
    const v537 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v528), null);
    let v538;
    switch (v537[0]) {
      case 'None': {
        const v539 = v537[1];
        v538 = false;
        
        break;
        }
      case 'Some': {
        const v540 = v537[1];
        v538 = true;
        
        break;
        }
      }
    const v541 = v538 ? false : true;
    stdlib.assert(v541, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:87:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
      msg: 'You already are a member of our WL.',
      who: 'Deployer'
      });
    const v543 = stdlib.lt(v495, v471);
    stdlib.assert(v543, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:88:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
      msg: 'The whitelist does not accept any more members.',
      who: 'Deployer'
      });
    const v546 = stdlib.eq(v503, stdlib.checkedBigNumberify('./index.rsh:92:28:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v546, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:92:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
      msg: 'There should be no balance',
      who: 'Deployer'
      });
    await stdlib.mapSet(map0, v528, null);
    const v549 = stdlib.add(v495, stdlib.checkedBigNumberify('./index.rsh:96:44:decimal', stdlib.UInt_max, '1'));
    const v550 = stdlib.gt(v549, v471);
    if (v550) {
      await stdlib.mapSet(map0, v528, undefined /* Nothing */);
      const v552 = false;
      await txn4.getOutput('MemberAPI_joinWhitelist', 'v552', ctc6, v552);
      const cv495 = v549;
      const cv496 = v530;
      const cv502 = v502;
      const cv503 = v503;
      
      v495 = cv495;
      v496 = cv496;
      v502 = cv502;
      v503 = cv503;
      
      continue;}
    else {
      const v566 = stdlib.sub(v534, v470);
      const v569 = v533[stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '1')];
      const v570 = v533[stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '2')];
      const v571 = [v566, v569, v570];
      const v572 = stdlib.Array_set(v502, stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '0'), v571);
      ;
      const v574 = 'We have a new member!';
      stdlib.protect(ctc0, await interact.log(v574), {
        at: './index.rsh:107:32:application',
        fs: ['at ./index.rsh:107:32:application call to [unknown function] (defined at: ./index.rsh:107:32:function exp)', 'at ./index.rsh:107:32:application call to "liftedInteract" (defined at: ./index.rsh:107:32:application)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
        msg: 'log',
        who: 'Deployer'
        });
      
      const v575 = true;
      await txn4.getOutput('MemberAPI_joinWhitelist', 'v575', ctc6, v575);
      const cv495 = v549;
      const cv496 = v530;
      const cv502 = v572;
      const cv503 = v503;
      
      v495 = cv495;
      v496 = cv496;
      v502 = cv502;
      v503 = cv503;
      
      continue;}
    
    }
  const v585 = v502[stdlib.checkedBigNumberify('./index.rsh:116:32:application', stdlib.UInt_max, '0')];
  const v586 = v585[stdlib.checkedBigNumberify('./index.rsh:116:32:application', stdlib.UInt_max, '0')];
  ;
  const v596 = stdlib.sub(v586, v586);
  const v599 = v585[stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '1')];
  const v600 = v585[stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '2')];
  const v601 = [v596, v599, v600];
  const v602 = stdlib.Array_set(v502, stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '0'), v601);
  ;
  const v603 = v602[stdlib.checkedBigNumberify('./index.rsh:118:16:application', stdlib.UInt_max, '0')];
  const v604 = v603[stdlib.checkedBigNumberify('./index.rsh:118:16:application', stdlib.UInt_max, '0')];
  const v605 = stdlib.eq(v604, stdlib.checkedBigNumberify('./index.rsh:118:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v605, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'We should not have any remaining ASA balance',
    who: 'Deployer'
    });
  return;
  
  
  
  
  
  
  };
export async function _MemberAPI_joinWhitelist5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _MemberAPI_joinWhitelist5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _MemberAPI_joinWhitelist5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v446, v468, v469, v470, v471, v482, v495, v502, v503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc2, ctc4, ctc7, ctc4]);
  const v511 = ctc.selfAddress();
  const v513 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)'],
    msg: 'in',
    who: 'MemberAPI_joinWhitelist'
    });
  const v515 = v502[stdlib.checkedBigNumberify('./index.rsh:73:22:application', stdlib.UInt_max, '0')];
  const v516 = v515[stdlib.checkedBigNumberify('./index.rsh:73:22:application', stdlib.UInt_max, '0')];
  const v517 = stdlib.ge(v516, v470);
  stdlib.assert(v517, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)'],
    msg: 'NFT needs to move into escrow.',
    who: 'MemberAPI_joinWhitelist'
    });
  const v519 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v511), null);
  let v520;
  switch (v519[0]) {
    case 'None': {
      const v521 = v519[1];
      v520 = false;
      
      break;
      }
    case 'Some': {
      const v522 = v519[1];
      v520 = true;
      
      break;
      }
    }
  const v523 = v520 ? false : true;
  stdlib.assert(v523, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:74:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)'],
    msg: 'You already are a member of our WL.',
    who: 'MemberAPI_joinWhitelist'
    });
  const v525 = stdlib.lt(v495, v471);
  stdlib.assert(v525, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:75:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)', 'at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)'],
    msg: 'The whitelist does not accept any more members.',
    who: 'MemberAPI_joinWhitelist'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v446, v468, v469, v470, v471, v482, v495, v502, v503, v513],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v529], secs: v531, time: v530, didSend: v255, from: v528 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "MemberAPI_joinWhitelist"
        });
      ;
      const v533 = v502[stdlib.checkedBigNumberify('./index.rsh:86:22:application', stdlib.UInt_max, '0')];
      const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:86:22:application', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v528), null);
      await stdlib.simMapSet(sim_r, 0, v528, null);
      const v549 = stdlib.add(v495, stdlib.checkedBigNumberify('./index.rsh:96:44:decimal', stdlib.UInt_max, '1'));
      const v550 = stdlib.gt(v549, v471);
      if (v550) {
        await stdlib.simMapSet(sim_r, 0, v528, undefined /* Nothing */);
        const v552 = false;
        const v553 = await txn1.getOutput('MemberAPI_joinWhitelist', 'v552', ctc5, v552);
        
        const v833 = v549;
        const v835 = v502;
        const v836 = v503;
        const v837 = stdlib.lt(v549, stdlib.checkedBigNumberify('./index.rsh:67:25:decimal', stdlib.UInt_max, '5'));
        if (v837) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v446,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v446,
            tok: v468
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v468
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v566 = stdlib.sub(v534, v470);
        const v569 = v533[stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '1')];
        const v570 = v533[stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '2')];
        const v571 = [v566, v569, v570];
        const v572 = stdlib.Array_set(v502, stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '0'), v571);
        sim_r.txns.push({
          kind: 'from',
          to: v528,
          tok: v468
          });
        const v575 = true;
        const v576 = await txn1.getOutput('MemberAPI_joinWhitelist', 'v575', ctc5, v575);
        
        const v848 = v549;
        const v850 = v572;
        const v851 = v503;
        const v852 = stdlib.lt(v549, stdlib.checkedBigNumberify('./index.rsh:67:25:decimal', stdlib.UInt_max, '5'));
        if (v852) {
          sim_r.isHalt = false;
          }
        else {
          const v853 = v572[stdlib.checkedBigNumberify('./index.rsh:116:32:application', stdlib.UInt_max, '0')];
          const v854 = v853[stdlib.checkedBigNumberify('./index.rsh:116:32:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v446,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v446,
            tok: v468
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v468
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc4, ctc2, ctc4, ctc7, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v529], secs: v531, time: v530, didSend: v255, from: v528 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v533 = v502[stdlib.checkedBigNumberify('./index.rsh:86:22:application', stdlib.UInt_max, '0')];
  const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:86:22:application', stdlib.UInt_max, '0')];
  const v535 = stdlib.ge(v534, v470);
  stdlib.assert(v535, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
    msg: 'NFT needs to move into escrow.',
    who: 'MemberAPI_joinWhitelist'
    });
  const v537 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v528), null);
  let v538;
  switch (v537[0]) {
    case 'None': {
      const v539 = v537[1];
      v538 = false;
      
      break;
      }
    case 'Some': {
      const v540 = v537[1];
      v538 = true;
      
      break;
      }
    }
  const v541 = v538 ? false : true;
  stdlib.assert(v541, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:87:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
    msg: 'You already are a member of our WL.',
    who: 'MemberAPI_joinWhitelist'
    });
  const v543 = stdlib.lt(v495, v471);
  stdlib.assert(v543, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
    msg: 'The whitelist does not accept any more members.',
    who: 'MemberAPI_joinWhitelist'
    });
  const v546 = stdlib.eq(v503, stdlib.checkedBigNumberify('./index.rsh:92:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v546, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:92:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
    msg: 'There should be no balance',
    who: 'MemberAPI_joinWhitelist'
    });
  await stdlib.mapSet(map0, v528, null);
  const v549 = stdlib.add(v495, stdlib.checkedBigNumberify('./index.rsh:96:44:decimal', stdlib.UInt_max, '1'));
  const v550 = stdlib.gt(v549, v471);
  if (v550) {
    await stdlib.mapSet(map0, v528, undefined /* Nothing */);
    const v552 = false;
    const v553 = await txn1.getOutput('MemberAPI_joinWhitelist', 'v552', ctc5, v552);
    if (v255) {
      stdlib.protect(ctc0, await interact.out(v529, v553), {
        at: './index.rsh:70:7:application',
        fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:7:function exp)', 'at ./index.rsh:101:21:application call to "returnFunc" (defined at: ./index.rsh:85:20:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
        msg: 'out',
        who: 'MemberAPI_joinWhitelist'
        });
      }
    else {
      }
    
    const v833 = v549;
    const v835 = v502;
    const v836 = v503;
    const v837 = stdlib.lt(v549, stdlib.checkedBigNumberify('./index.rsh:67:25:decimal', stdlib.UInt_max, '5'));
    if (v837) {
      return;
      }
    else {
      ;
      const v840 = stdlib.sub(v534, v534);
      const v841 = v533[stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '1')];
      const v842 = v533[stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '2')];
      const v843 = [v840, v841, v842];
      const v844 = stdlib.Array_set(v502, stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '0'), v843);
      ;
      const v845 = v844[stdlib.checkedBigNumberify('./index.rsh:118:16:application', stdlib.UInt_max, '0')];
      const v846 = v845[stdlib.checkedBigNumberify('./index.rsh:118:16:application', stdlib.UInt_max, '0')];
      const v847 = stdlib.eq(v846, stdlib.checkedBigNumberify('./index.rsh:118:25:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v847, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'We should not have any remaining ASA balance',
        who: 'MemberAPI_joinWhitelist'
        });
      return;
      }}
  else {
    const v566 = stdlib.sub(v534, v470);
    const v569 = v533[stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '1')];
    const v570 = v533[stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '2')];
    const v571 = [v566, v569, v570];
    const v572 = stdlib.Array_set(v502, stdlib.checkedBigNumberify('./index.rsh:105:49:application', stdlib.UInt_max, '0'), v571);
    ;
    const v575 = true;
    const v576 = await txn1.getOutput('MemberAPI_joinWhitelist', 'v575', ctc5, v575);
    if (v255) {
      stdlib.protect(ctc0, await interact.out(v529, v576), {
        at: './index.rsh:70:7:application',
        fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:7:function exp)', 'at ./index.rsh:109:21:application call to "returnFunc" (defined at: ./index.rsh:85:20:function exp)', 'at ./index.rsh:85:20:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)'],
        msg: 'out',
        who: 'MemberAPI_joinWhitelist'
        });
      }
    else {
      }
    
    const v848 = v549;
    const v850 = v572;
    const v851 = v503;
    const v852 = stdlib.lt(v549, stdlib.checkedBigNumberify('./index.rsh:67:25:decimal', stdlib.UInt_max, '5'));
    if (v852) {
      return;
      }
    else {
      const v853 = v572[stdlib.checkedBigNumberify('./index.rsh:116:32:application', stdlib.UInt_max, '0')];
      const v854 = v853[stdlib.checkedBigNumberify('./index.rsh:116:32:application', stdlib.UInt_max, '0')];
      ;
      const v855 = stdlib.sub(v854, v854);
      const v856 = v853[stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '1')];
      const v857 = v853[stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '2')];
      const v858 = [v855, v856, v857];
      const v859 = stdlib.Array_set(v572, stdlib.checkedBigNumberify('./index.rsh:116:48:application', stdlib.UInt_max, '0'), v858);
      ;
      const v860 = v859[stdlib.checkedBigNumberify('./index.rsh:118:16:application', stdlib.UInt_max, '0')];
      const v861 = v860[stdlib.checkedBigNumberify('./index.rsh:118:16:application', stdlib.UInt_max, '0')];
      const v862 = stdlib.eq(v861, stdlib.checkedBigNumberify('./index.rsh:118:25:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v862, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'We should not have any remaining ASA balance',
        who: 'MemberAPI_joinWhitelist'
        });
      return;
      }}
  
  
  };
export async function MemberAPI_joinWhitelist(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for MemberAPI_joinWhitelist expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for MemberAPI_joinWhitelist expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _MemberAPI_joinWhitelist5(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`MemberAPI_joinWhitelist()byte`],
    pure: [`Whitelist_ASA()uint64`, `Whitelist_ASAAmount()uint64`, `Whitelist_airdropAmount()uint64`, `Whitelist_lastMember()address`, `Whitelist_maxMembers()uint64`, `Whitelist_membersCnt()uint64`],
    sigs: [`MemberAPI_joinWhitelist()byte`, `Whitelist_ASA()uint64`, `Whitelist_ASAAmount()uint64`, `Whitelist_airdropAmount()uint64`, `Whitelist_lastMember()address`, `Whitelist_maxMembers()uint64`, `Whitelist_membersCnt()uint64`]
    },
  appApproval: `BiARAAEFBAIInfT47Af429GGCqf90KoLnYSk1Qmpnea1BMLIpvYEICgwOKCNBiYDAQABAQAiNQAxGEEElipkSSJbNQEhBVs1AjEZIxJBAAgxACgoZkIEZDYaABdJQQDSIjUEIzUGSSEGDEAAeUkhBwxAADlJIQgMQAAZIQgSRDQBJBJEKGQpZFBJNQNXYAg1B0IENyEHEkQ0ASQSRChkKWRQSTUDVzAINQdCBB5JIQkMQAAZIQkSRDQBJBJEKGQpZFBJNQNXIAg1B0ID/iEGEkQ0ASQSRChkKWRQSTUDV0AgNQdCA+VJIQoMQAAoSSELDEAAGSELEkQ0ASQSRChkKWRQSTUDVygINQdCA74hChJEKkIAOoGNna6gARJENAEkEkQoZClkUEk1A1c4CDUHQgOZNhoCFzUENhoDNhoBF0khBAxAAZpJJQxAARwlEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/IQxbNf4hDVs1/SEOWzX8IQ9bNftXQCA1+oFgWzX5V2gRNfiBeVs190k1BTX2gATU4BgtNPZQsDT4VwARSTX1IltJNfQ0/A9EMQCIAzNJNfIiVUAABiI180IABiM180IAADTzFEQ0+TT7DEQ09yISRDEAKClmNPkjCEk18jT7DUEAKzEAKChmgAkAAAAAAAACKACwKDUHNP80/jT9NPw0+zT6NPIyBjT4NPdCAa+xIrIBNPyyEiWyEDEAshQ0/rIRs4AJAAAAAAAAAj8BsCk1BzT/NP40/TT8NPs0+jTyMgY09DT8CRY09VcICFA09VcQAVA090IBZSEEEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEMWzX+IQ1bNf1XQBE1/IAEQbFATbA0/FcAETX7NP00/ogCaTT/MQASRDT/NP40/TQDIQ5bNAMhD1sxACIyBjT7Ils0/QgWNPtXCAhQNPtXEAFQIkIA7UkjDEAArkgjNAESRDQESSISTDQCEhFEKGRJNQNJVwARNf9XESA1/kk1BUlKIls1/SEFWzX8gRBbNfuBGFs1+oAEqBg8qDT9FlA0/BZQNPsWUDT6FlCwNP9XABE1+SEFrzT5VwgIUDT5VxABUDX4IRCIAauxIrIBIrISJbIQMgqyFDT9shGzNP4xABJENP40/RZQNPwWUDT7FlA0+hZQNPhQKEsBVwBRZ0ghBDUBMgY1AkIBC0ghEIgBZCI0ARJENARJIhJMNAISEUSABF8Nq/qwgRGvNf80/zEAUChLAVcAMWdIIzUBMgY1AkIA0jX/Nf41/TX8Nfs1+jX5Nfg19zX2NPwkDEEAOTT2NPcWUDT4FlA0+RZQNPoWUDT7UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/AmdIJDUBMgY1AkIAfjT+VwARSTX1Ils19LEisgE0/7III7IQNPayB7OxIrIBNPSyEiWyEDT2shQ097IRszT0SQkWNPVXCAhQNPVXEAFQVwARIlsiEkSxIrIBIrISJbIQMgmyFTIKshQ097IRs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 2,
  stateSize: 129,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v468",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v470",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v529",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v552",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v575",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "MemberAPI_joinWhitelist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Whitelist_ASA",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Whitelist_ASAAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Whitelist_airdropAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Whitelist_lastMember",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Whitelist_maxMembers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Whitelist_membersCnt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v468",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v470",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v529",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002d0438038062002d04833981016040819052620000269162000287565b6000805543600355620000386200013b565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000af3415600d62000111565b620000b962000172565b6020808301518252338282015260016000819055439055604051620000e191839101620002f2565b604051602081830303815290604052600290805190602001906200010792919062000194565b5050505062000393565b81620001375760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016200016d62000223565b905290565b60405180604001604052806200018762000223565b8152600060209091015290565b828054620001a29062000356565b90600052602060002090601f016020900481019282620001c6576000855562000211565b82601f10620001e157805160ff191683800117855562000211565b8280016001018555821562000211579182015b8281111562000211578251825591602001919060010190620001f4565b506200021f92915062000270565b5090565b60405180602001604052806001905b62000259604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620002325790505090565b5b808211156200021f576000815560010162000271565b6000604082840312156200029a57600080fd5b604080519081016001600160401b0381118282101715620002cb57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002e657600080fd5b60208201529392505050565b815160808201908260005b600181101562000339578251805183526020808201518185015260409182015115159184019190915290920191606090910190600101620002fd565b505050602092909201516001600160a01b03166060919091015290565b600181811c908216806200036b57607f821691505b602082108114156200038d57634e487b7160e01b600052602260045260246000fd5b50919050565b61296180620003a36000396000f3fe6080604052600436106100d55760003560e01c80637eea518c11610079578063a98bf22311610056578063a98bf223146101f4578063ab53f2c614610207578063da61bf401461022a578063f17b292e1461023f57005b80637eea518c146101b757806383230757146101ca5780639ab025bf146101df57005b80631e93b0f1116100b25780631e93b0f1146101335780633bc5b7bf1461014857806348277cf814610175578063544299e41461018a57005b80630637d9ae146100de578063123f6200146101065780631d351bab1461011e57005b366100dc57005b005b3480156100ea57600080fd5b506100f3610252565b6040519081526020015b60405180910390f35b61010e61048e565b60405190151581526020016100fd565b34801561012a57600080fd5b506100f36104c0565b34801561013f57600080fd5b506003546100f3565b34801561015457600080fd5b50610168610163366004612220565b6106f9565b6040516100fd9190612253565b34801561018157600080fd5b506100f3610725565b34801561019657600080fd5b5061019f61095e565b6040516001600160a01b0390911681526020016100fd565b6100dc6101c53660046122b2565b610b97565b3480156101d657600080fd5b506001546100f3565b3480156101eb57600080fd5b5061019f610bc2565b6100dc6102023660046122b2565b610dfb565b34801561021357600080fd5b5061021c610e22565b6040516100fd9291906122fa565b34801561023657600080fd5b506100f3610ebf565b6100dc61024d366004612334565b6110f8565b60006001600054141561030f5760006002805461026e90612346565b80601f016020809104026020016040519081016040528092919081815260200182805461029a90612346565b80156102e75780601f106102bc576101008083540402835291602001916102e7565b820191906000526020600020905b8154815290600101906020018083116102ca57829003601f168201915b50505050508060200190518101906102ff91906124c6565b905061030d6000600b61111f565b505b600260005414156103ca5760006002805461032990612346565b80601f016020809104026020016040519081016040528092919081815260200182805461035590612346565b80156103a25780601f10610377576101008083540402835291602001916103a2565b820191906000526020600020905b81548152906001019060200180831161038557829003601f168201915b50505050508060200190518101906103ba9190612506565b90506103c86000600b61111f565b505b6005600054141561047f576000600280546103e490612346565b80601f016020809104026020016040519081016040528092919081815260200182805461041090612346565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b50505050508060200190518101906104759190612598565b6080015192915050565b61048b6000600b61111f565b90565b6000610498611f6f565b60208082015160009081905260408051928301905281526104b98282611145565b5192915050565b60006001600054141561057d576000600280546104dc90612346565b80601f016020809104026020016040519081016040528092919081815260200182805461050890612346565b80156105555780601f1061052a57610100808354040283529160200191610555565b820191906000526020600020905b81548152906001019060200180831161053857829003601f168201915b505050505080602001905181019061056d91906124c6565b905061057b6000600c61111f565b505b600260005414156106385760006002805461059790612346565b80601f01602080910402602001604051908101604052809291908181526020018280546105c390612346565b80156106105780601f106105e557610100808354040283529160200191610610565b820191906000526020600020905b8154815290600101906020018083116105f357829003601f168201915b50505050508060200190518101906106289190612506565b90506106366000600c61111f565b505b600560005414156106ed5760006002805461065290612346565b80601f016020809104026020016040519081016040528092919081815260200182805461067e90612346565b80156106cb5780601f106106a0576101008083540402835291602001916106cb565b820191906000526020600020905b8154815290600101906020018083116106ae57829003601f168201915b50505050508060200190518101906106e39190612598565b60c0015192915050565b61048b6000600c61111f565b604080516060810182526000808252602082018190529181019190915261071f826115b3565b92915050565b6000600160005414156107e25760006002805461074190612346565b80601f016020809104026020016040519081016040528092919081815260200182805461076d90612346565b80156107ba5780601f1061078f576101008083540402835291602001916107ba565b820191906000526020600020905b81548152906001019060200180831161079d57829003601f168201915b50505050508060200190518101906107d291906124c6565b90506107e06000600861111f565b505b6002600054141561089d576000600280546107fc90612346565b80601f016020809104026020016040519081016040528092919081815260200182805461082890612346565b80156108755780601f1061084a57610100808354040283529160200191610875565b820191906000526020600020905b81548152906001019060200180831161085857829003601f168201915b505050505080602001905181019061088d9190612506565b905061089b6000600861111f565b505b60056000541415610952576000600280546108b790612346565b80601f01602080910402602001604051908101604052809291908181526020018280546108e390612346565b80156109305780601f1061090557610100808354040283529160200191610930565b820191906000526020600020905b81548152906001019060200180831161091357829003601f168201915b50505050508060200190518101906109489190612598565b6040015192915050565b61048b6000600861111f565b600060016000541415610a1b5760006002805461097a90612346565b80601f01602080910402602001604051908101604052809291908181526020018280546109a690612346565b80156109f35780601f106109c8576101008083540402835291602001916109f3565b820191906000526020600020905b8154815290600101906020018083116109d657829003601f168201915b5050505050806020019051810190610a0b91906124c6565b9050610a196000600a61111f565b505b60026000541415610ad657600060028054610a3590612346565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6190612346565b8015610aae5780601f10610a8357610100808354040283529160200191610aae565b820191906000526020600020905b815481529060010190602001808311610a9157829003601f168201915b5050505050806020019051810190610ac69190612506565b9050610ad46000600a61111f565b505b60056000541415610b8b57600060028054610af090612346565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1c90612346565b8015610b695780601f10610b3e57610100808354040283529160200191610b69565b820191906000526020600020905b815481529060010190602001808311610b4c57829003601f168201915b5050505050806020019051810190610b819190612598565b60a0015192915050565b61048b6000600a61111f565b604080516020810190915260008152610bbe610bb83684900384018461262e565b8261168c565b5050565b600060016000541415610c7f57600060028054610bde90612346565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0a90612346565b8015610c575780601f10610c2c57610100808354040283529160200191610c57565b820191906000526020600020905b815481529060010190602001808311610c3a57829003601f168201915b5050505050806020019051810190610c6f91906124c6565b9050610c7d6000600761111f565b505b60026000541415610d3a57600060028054610c9990612346565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc590612346565b8015610d125780601f10610ce757610100808354040283529160200191610d12565b820191906000526020600020905b815481529060010190602001808311610cf557829003601f168201915b5050505050806020019051810190610d2a9190612506565b9050610d386000600761111f565b505b60056000541415610def57600060028054610d5490612346565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8090612346565b8015610dcd5780601f10610da257610100808354040283529160200191610dcd565b820191906000526020600020905b815481529060010190602001808311610db057829003601f168201915b5050505050806020019051810190610de59190612598565b6020015192915050565b61048b6000600761111f565b604080516020810190915260008152610bbe610e1c3684900384018461265a565b82611145565b600060606000546002808054610e3790612346565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6390612346565b8015610eb05780601f10610e8557610100808354040283529160200191610eb0565b820191906000526020600020905b815481529060010190602001808311610e9357829003601f168201915b50505050509050915091509091565b600060016000541415610f7c57600060028054610edb90612346565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0790612346565b8015610f545780601f10610f2957610100808354040283529160200191610f54565b820191906000526020600020905b815481529060010190602001808311610f3757829003601f168201915b5050505050806020019051810190610f6c91906124c6565b9050610f7a6000600961111f565b505b6002600054141561103757600060028054610f9690612346565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc290612346565b801561100f5780601f10610fe45761010080835404028352916020019161100f565b820191906000526020600020905b815481529060010190602001808311610ff257829003601f168201915b50505050508060200190518101906110279190612506565b90506110356000600961111f565b505b600560005414156110ec5760006002805461105190612346565b80601f016020809104026020016040519081016040528092919081815260200182805461107d90612346565b80156110ca5780601f1061109f576101008083540402835291602001916110ca565b820191906000526020600020905b8154815290600101906020018083116110ad57829003601f168201915b50505050508060200190518101906110e29190612598565b6060015192915050565b61048b6000600961111f565b604080516020810190915260008152610bbe611119368490038401846126b4565b826118e3565b81610bbe5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611155600560005414601d61111f565b815161117090158061116957508251600154145b601e61111f565b60008080556002805461118290612346565b80601f01602080910402602001604051908101604052809291908181526020018280546111ae90612346565b80156111fb5780601f106111d0576101008083540402835291602001916111fb565b820191906000526020600020905b8154815290600101906020018083116111de57829003601f168201915b50505050508060200190518101906112139190612598565b905061124b60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b6040805133815285516020808301919091528601515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a161129f3415601861111f565b606082015160e083015151516112b8911115601961111f565b60006112c3336115b3565b5160018111156112d5576112d561223d565b14156112e4576000815261130c565b60016112ef336115b3565b5160018111156113015761130161223d565b141561130c57600181525b80516113279061131d576001611320565b60005b601a61111f565b61133c82608001518360c0015110601b61111f565b61134f600083610100015114601c61111f565b336000908152600460205260409020805462ff00ff1916600190811790915560c083015161137d919061277a565b602082018190526080830151101561147457336000908152600460209081526040808320805462ffffff19169055519182527f39a7c57b1ca5dedb5df8ac378acc17764c8d2102b6928a4d8000aeab60906c6c910160405180910390a1600083526113e6611f9e565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855182015260808088015186519091015260a080880151865195169401939093528482015182850180519190915280514393019290925260e086015182519091015261010085015190519091015261146e81611b25565b506115ad565b606082015160e0830151515161148a9190612792565b604082810180519290925260e0840180515160209081015184518201529051518201519251921515929091019190915282015160608301516114ce91903390611ce4565b604051600181527f66808dc713fe0d4a254df11552ceaaef05fbe4d84e70fbb69347259fe0f6e1e99060200160405180910390a16001835261150e611f9e565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015260608087015185519091015260808087015185519091015260a0808701518551941693019290925283810151818401805191909152514391015260e0840151908301516115899190600090611cfd565b602082018051604001919091526101008401519051606001526115ab81611b25565b505b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156115ff576115ff61223d565b141561167c576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156116405761164061223d565b60018111156116515761165161223d565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b61169c600260005414601561111f565b81516116b79015806116b057508251600154145b601661111f565b6000808055600280546116c990612346565b80601f01602080910402602001604051908101604052809291908181526020018280546116f590612346565b80156117425780601f1061171757610100808354040283529160200191611742565b820191906000526020600020905b81548152906001019060200180831161172557829003601f168201915b505050505080602001905181019061175a9190612506565b905061178360408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9509181900360600190a16117d63415601261111f565b604082015160a083015151516117ec919061277a565b81515260a08201805151602090810151835182015290515160409081015183519015159082015290830151908301516118329161182b91339190611d71565b601361111f565b815161184a906001600160a01b03163314601461111f565b611852611f9e565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015260808085015183519091015281513360a091820152818301805160009081905290514393019290925284015183516118c49290611cfd565b602082018051604001919091525160006060909101526115ab81611b25565b6118f3600160005414601061111f565b815161190e90158061190757508251600154145b601161111f565b60008080556002805461192090612346565b80601f016020809104026020016040519081016040528092919081815260200182805461194c90612346565b80156119995780601f1061196e57610100808354040283529160200191611999565b820191906000526020600020905b81548152906001019060200180831161197c57829003601f168201915b50505050508060200190518101906119b191906124c6565b90506119bb611fe4565b6040805133815285516020808301919091528087015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517fb424b94421bd2b5b83c52c3b6abbe24cd62a002ac40f462f195d0ceaef109a989181900360c00190a18051600090819052825151602090810151835190910152825151604090810151835190151591015282518251611a5f9290611cfd565b6020820152611a703415600e61111f565b6020820151611a8b906001600160a01b03163314600f61111f565b611a93612014565b6020808401516001600160a01b039081168352868201805151909116838301528051820151604080850191909152815181015160608086019190915291519091015160808401528382015160a084015260026000554360015551611af9918391016127e7565b60405160208183030381529060405260029080519060200190611b1d92919061205c565b505050505050565b60408051608081018252600060208201818152928201819052606082015290815260208201515160051115611c0b57611b5c6120e0565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015190860152865160a0908101519094169385019390935281860180515160c0860152805182015160e086015251909201516101008401526005600055436001559051611be791839101612841565b604051602081830303815290604052600290805190602001906115ad92919061205c565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611c4d573d6000803e3d6000fd5b506020820151604001515151611c639080612792565b815152602082810180516040908101515183015184518401528151810151518101518451901515908201528451928301519251915101515151611ca7929190611ce4565b611cce6000611cc484602001516040015160008560000151611cfd565b515114601761111f565b60008080556001819055610bbe9060029061214d565b611cef838383611d89565b611cf857600080fd5b505050565b611d0561218a565b60005b6001811015611d5157848160018110611d2357611d2361274e565b6020020151828260018110611d3a57611d3a61274e565b602002015280611d49816128d7565b915050611d08565b5081818460018110611d6557611d6561274e565b60200201529392505050565b6000611d7f83853085611e5a565b90505b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611de8916128f2565b60006040518083038185875af1925050503d8060008114611e25576040519150601f19603f3d011682016040523d82523d6000602084013e611e2a565b606091505b5091509150611e3b82826002611f34565b5080806020019051810190611e50919061290e565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611ec1916128f2565b60006040518083038185875af1925050503d8060008114611efe576040519150601f19603f3d011682016040523d82523d6000602084013e611f03565b606091505b5091509150611f1482826001611f34565b5080806020019051810190611f29919061290e565b979650505050505050565b60608315611f43575081611d82565b825115611f535782518084602001fd5b60405163100960cb60e01b81526004810183905260240161113c565b604051806040016040528060008152602001611f9960405180602001604052806000151581525090565b905290565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290815260208101611f996121d5565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611f9961218a565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611f9961218a565b82805461206890612346565b90600052602060002090601f01602090048101928261208a57600085556120d0565b82601f106120a357805160ff19168380011785556120d0565b828001600101855582156120d0579182015b828111156120d05782518255916020019190600101906120b5565b506120dc9291506121f6565b5090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200161214061218a565b8152602001600081525090565b50805461215990612346565b6000825580601f10612169575050565b601f01602090049060005260206000209081019061218791906121f6565b50565b60405180602001604052806001905b6121bf604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816121995790505090565b6040518060800160405280600081526020016000815260200161214061218a565b5b808211156120dc57600081556001016121f7565b6001600160a01b038116811461218757600080fd5b60006020828403121561223257600080fd5b8135611d828161220b565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061227857634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b6000604082840312156122ac57600080fd5b50919050565b6000604082840312156122c457600080fd5b611d82838361229a565b60005b838110156122e95781810151838201526020016122d1565b838111156115ad5750506000910152565b828152604060208201526000825180604084015261231f8160608501602087016122ce565b601f01601f1916919091016060019392505050565b600060a082840312156122ac57600080fd5b600181811c9082168061235a57607f821691505b602082108114156122ac57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156123b4576123b461237b565b60405290565b6040516060810167ffffffffffffffff811182821017156123b4576123b461237b565b6040805190810167ffffffffffffffff811182821017156123b4576123b461237b565b604051610120810167ffffffffffffffff811182821017156123b4576123b461237b565b801515811461218757600080fd5b600082601f83011261244357600080fd5b61244b612391565b8060608085018681111561245e57600080fd5b855b818110156124af578281890312156124785760008081fd5b6124806123ba565b815181526020808301518183015260408084015161249d81612424565b90830152908652909401938201612460565b50919695505050505050565b80516116878161220b565b6000608082840312156124d857600080fd5b6124e06123dd565b6124ea8484612432565b815260608301516124fa8161220b565b60208201529392505050565b6000610100828403121561251957600080fd5b60405160c0810181811067ffffffffffffffff8211171561253c5761253c61237b565b604052825161254a8161220b565b8152602083015161255a8161220b565b8060208301525060408301516040820152606083015160608201526080830151608082015261258c8460a08501612432565b60a08201529392505050565b600061016082840312156125ab57600080fd5b6125b3612400565b6125bc836124bb565b81526125ca602084016124bb565b60208201526040830151604082015260608301516060820152608083015160808201526125f960a084016124bb565b60a082015260c083015160c08201526126158460e08501612432565b60e0820152610140929092015161010083015250919050565b60006040828403121561264057600080fd5b6126486123dd565b8235815260208301356124fa81612424565b6000818303604081121561266d57600080fd5b6126756123dd565b833581526020601f198301121561268b57600080fd5b612693612391565b915060208401356126a381612424565b825260208101919091529392505050565b600081830360a08112156126c757600080fd5b6126cf6123dd565b833581526080601f19830112156126e557600080fd5b60405191506080820182811067ffffffffffffffff8211171561270a5761270a61237b565b604052602084013561271b8161220b565b80835250604084013560208301526060840135604083015260808401356060830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561278d5761278d612764565b500190565b6000828210156127a4576127a4612764565b500390565b8060005b60018110156115ad5781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016127ad565b60006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015161283a60a08401826127a9565b5092915050565b81516001600160a01b0316815260208083015161016083019161286e908401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a08301516128a760a08401826001600160a01b03169052565b5060c083015160c083015260e08301516128c460e08401826127a9565b5061010083015161014083015292915050565b60006000198214156128eb576128eb612764565b5060010190565b600082516129048184602087016122ce565b9190910192915050565b60006020828403121561292057600080fd5b8151611d828161242456fea2646970667358221220298e76cf8df6844e0adc13c651743141bdf5d4df3361c4dd2697f1408cb79c8464736f6c634300080c0033`,
  BytecodeLen: 11524,
  Which: `oD`,
  version: 7,
  views: {
    Whitelist: {
      ASA: `Whitelist_ASA`,
      ASAAmount: `Whitelist_ASAAmount`,
      airdropAmount: `Whitelist_airdropAmount`,
      lastMember: `Whitelist_lastMember`,
      maxMembers: `Whitelist_maxMembers`,
      membersCnt: `Whitelist_membersCnt`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:59:38:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "MemberAPI_joinWhitelist": MemberAPI_joinWhitelist
  };
export const _APIs = {
  MemberAPI: {
    joinWhitelist: MemberAPI_joinWhitelist
    }
  };
