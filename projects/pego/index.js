const PG_TOKEN_CONTRACT = '0x7bb8bB3e4F3f8C40D4ab3bA07622453c8d8CC949';
// const MINT_CLUB_BOND_CONTRACT = '0x8BBac0C7583Cc146244a18863E708bFFbbF19975';

async function tvl(_, _1, _2, { api }) {
  const collateralBalance = await api.call({
    abi: 'erc20:balanceOf',
    target: PG_TOKEN_CONTRACT,
   // params: [MINT_CLUB_BOND_CONTRACT],
  });

  api.add(PG_TOKEN_CONTRACT, collateralBalance)
}

module.exports = {
  timetravel: true,
  misrepresentedTokens: false,
  methodology: 'counts the number of PG tokens in the PEGO contract.',
  start: 1000235,
  bsc: {
    tvl,
  }
}; 
