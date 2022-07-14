"reach 0.1";

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const Deployer = Participant("Deployer", {
    getInfo: Fun([], Tuple(Token, UInt, UInt)),
    log: Fun(true, Null),
  });

  const MemberApi = API("MemberAPI", {
    joinWhitelist: Fun([], Bool),
  });

  const vWL = View("Whitelist", {
    ASA: Token,
    ASAAmount: UInt,
    airdropAmount: UInt,
    maxMembers: UInt,
    membersCnt: UInt,
    lastMember: Address,
  });

  init();

  Deployer.publish();

  Deployer.only(() => {
    const [ASA, ASAAmount, maxMembers] = declassify(interact.getInfo());

    check(ASAAmount > 0, "No negative amounts allowed.");
    check(
      maxMembers > 0 && maxMembers <= ASAAmount,
      "We can't have more members than tokens to distribute!"
    );

    const airdropAmount = ASAAmount / maxMembers;
    check(airdropAmount > 0, "We do not want to be airdropping some debt!");
  });

  commit();

  // Deployoer should transfer the ASA amount to the contract
  Deployer.publish(ASA, ASAAmount, airdropAmount, maxMembers);
  commit();

  Deployer.pay([0, [ASAAmount, ASA]]);

  {
    vWL.ASA.set(ASA);
    vWL.ASAAmount.set(ASAAmount);
    vWL.maxMembers.set(maxMembers);
    vWL.airdropAmount.set(airdropAmount);
  }

  // We will store all members in a set - members should be unique
  const Members = new Set();

  const [membersCnt] = parallelReduce([0])
    .define(() => {
      vWL.membersCnt.set(membersCnt);
      vWL.lastMember.set(this);
    })
    .invariant(balance() == 0)
    .invariant(balance(ASA) >= 0)
    .invariant(membersCnt <= maxMembers)
    .while(membersCnt < 5)
    .api(
      // API EXPR
      MemberApi.joinWhitelist,
      // API ASSUME EXPR
      () => {
        check(balance(ASA) >= airdropAmount, "NFT needs to move into escrow.");
        check(!Members.member(this), "You already are a member of our WL.");
        check(
          membersCnt < maxMembers,
          "The whitelist does not accept any more members."
        );
      },
      // PAY EXPR
      () => {
        return 0;
      },
      // API CONSENSUS EXPR
      (returnFunc) => {
        check(balance(ASA) >= airdropAmount, "NFT needs to move into escrow.");
        check(!Members.member(this), "You already are a member of our WL.");
        check(
          membersCnt < maxMembers,
          "The whitelist does not accept any more members."
        );
        check(balance() == 0, "There should be no balance");

        Members.insert(this);

        const newMembersCnt = membersCnt + 1;

        if (newMembersCnt > maxMembers) {
          Members.remove(this);

          returnFunc(false);

          return [newMembersCnt];
        } else {
          transfer([0, [airdropAmount, ASA]]).to(this);

          Deployer.interact.log("We have a new member!");

          returnFunc(true);

          return [newMembersCnt];
        }
      }
    );

  transfer([balance(), [balance(ASA), ASA]]).to(Deployer);

  check(balance(ASA) == 0, "We should not have any remaining ASA balance");

  commit();
  exit();
});
