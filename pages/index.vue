<template lang="pug">
.index
  CardProfile.index__profile
  SwipeList(:items="coins", item-key="id", @swipeout:click="clickItem")
    template(v-slot="{ item }")
      CardCoin.index__coin(
        :logo="item.logo",
        :shortName="item.shortName",
        :shortAmount="item.shortAmount",
        :fullName="item.fullName",
        :fullAmount="item.fullAmount",
        :rate="item.rate",
        :ratePercent="item.ratePercent"
      )
    template(v-slot:left="{ item }")
      .swipeout-action(@click="receiveCoin(item)")
        i.fas.fa-arrow-down
      .swipeout-action(@click="sendCoin(item)")
        i.fas.fa-arrow-up
    template(v-slot:right="{ item }")
      .swipeout-action(@click="removeCoin(item)")
        i.fas.fa-minus
</template>

<script>
import { SwipeList } from 'vue-swipe-actions'
import 'vue-swipe-actions/dist/vue-swipe-actions.css'

export default {
  components: {
    SwipeList
  },
  data() {
    return {
      coins: [
        {
          id: 0,
          logo: 'swapex.png',
          shortName: 'SWX',
          shortAmount: 0,
          fullName: 'Swapex',
          fullAmount: 0,
          rate: 124.0,
          ratePercent: 14.2
        },
        {
          id: 1,
          logo: 'btc.png',
          shortName: 'BTC',
          shortAmount: 0,
          fullName: 'Bitcoin',
          fullAmount: 0,
          rate: 54284.73,
          ratePercent: 1.7
        },
        {
          id: 2,
          logo: 'eth.png',
          shortName: 'ETH',
          shortAmount: 0,
          fullName: 'Ethereum',
          fullAmount: 0,
          rate: 1793.28,
          ratePercent: -8.40
        },
        {
          id: 3,
          logo: 'xmr.png',
          shortName: 'XMR',
          shortAmount: 0,
          fullName: 'Monero',
          fullAmount: 0,
          rate: 212.01,
          ratePercent: 0.24
        },
        {
          id: 4,
          logo: 'ltc.png',
          shortName: 'LTC',
          shortAmount: 0,
          fullName: 'Litecoin',
          fullAmount: 0,
          rate: 202.19,
          ratePercent: -0.9
        },
        {
          id: 5,
          logo: 'usdt.png',
          shortName: 'USDT',
          shortAmount: 0,
          fullName: 'Tether OMNI',
          fullAmount: 0,
          rate: 1.01,
          ratePercent: 0.17
        }
      ]
    }
  },
  methods: {
    removeCoin(item) {
      this.coins = this.coins.filter(i => i !== item)
    },
    receiveCoin(e) {
      console.log(e, 'receive coin')
    },
    sendCoin(e) {
      console.log(e, 'send coin')
    },
    clickItem(e) {
      console.log(e, 'click item')
    }
  }
}
</script>

<style lang="scss">
.swipeout {
  $self: &;

  &-list-item {
    margin-top: 12px;
  }

  &-left,
  &-right {
    display: flex;
    align-items: center;
  }

  &-left #{$self}-action {
    margin-left: 0;
  }

  &-right #{$self}-action {
    margin-right: 0;
  }

  &-action {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #999;
    margin: 12px;
    color: #fff;
  }
}
</style>
