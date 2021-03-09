export const state = () => ({
  coins: [
    {
      id: 0,
      logo: 'swx.png',
      name: 'SWX',
      amount: 0,
      fullName: 'Swapex',
      fullAmount: 0,
      rate: 124.0,
      ratePercent: 14.2
    },
    {
      id: 1,
      logo: 'btc.png',
      name: 'BTC',
      amount: 0,
      fullName: 'Bitcoin',
      fullAmount: 0,
      rate: 54284.73,
      ratePercent: 1.7
    },
    {
      id: 2,
      logo: 'eth.png',
      name: 'ETH',
      amount: 0,
      fullName: 'Ethereum',
      fullAmount: 0,
      rate: 1793.28,
      ratePercent: -8.40
    },
    {
      id: 3,
      logo: 'xmr.png',
      name: 'XMR',
      amount: 0,
      fullName: 'Monero',
      fullAmount: 0,
      rate: 212.01,
      ratePercent: 0.24
    },
    {
      id: 4,
      logo: 'ltc.png',
      name: 'LTC',
      amount: 0,
      fullName: 'Litecoin',
      fullAmount: 0,
      rate: 202.19,
      ratePercent: -0.9
    },
    {
      id: 5,
      logo: 'usdt.png',
      name: 'USDT',
      amount: 0,
      fullName: 'Tether OMNI',
      fullAmount: 0,
      rate: 1.01,
      ratePercent: 0.17
    }
  ]
});

export const REMOVE_COIN = 'REMOVE_COIN';

export const mutations = {
  [REMOVE_COIN](state, item) {
    state.coins = state.coins.filter(i => i !== item);
  }
};
