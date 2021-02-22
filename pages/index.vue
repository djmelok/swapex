<template lang="pug">
.index
  CardProfile.index__profile
  SwipeList(ref="list", :disabled="!enabled", :items="coins", item-key="id", @swipeout:click="itemClick")
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
    template(v-slot:left="{ item, close }")
      .swipeout-action.red
        i.fas.fa-trash
      .swipeout-action.purple(@click="close")
        i.fas.fa-close
    template(v-slot:right="{ item }")
      .swipeout-action(@click="remove(item)")
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
      enabled: true,
      coins: [
        {
          id: 0,
          logo: 'btc.png',
          shortName: 'BTC',
          shortAmount: 0,
          fullName: 'Bitcoin',
          fullAmount: 0,
          rate: 54000,
          ratePercent: 1.7
        },
        {
          id: 1,
          logo: 'eth.png',
          shortName: 'ETH',
          shortAmount: 0,
          fullName: 'Ethereum',
          fullAmount: 0,
          rate: 1793.28,
          ratePercent: -8.40
        },
        {
          id: 2,
          logo: 'xmr.png',
          shortName: 'XMR',
          shortAmount: 0,
          fullName: 'Monero',
          fullAmount: 0,
          rate: 112.01,
          ratePercent: 0.22
        }
      ]
    }
  },
  methods: {
    revealFirstRight() {
      this.$refs.list.revealRight(0)
    },
    revealFirstLeft() {
      this.$refs.list.revealLeft(0)
    },
    closeFirst() {
      this.$refs.list.closeActions(0)
    },
    closeAll() {
      this.$refs.list.closeActions()
    },
    remove(item) {
      this.coins = this.coins.filter(i => i !== item)
    },
    itemClick(e) {
      console.log(e, 'item click')
    },
    fbClick(e) {
      console.log(e, 'First Button Click')
    },
    sbClick(e) {
      console.log(e, 'Second Button Click')
    }
  }
}
</script>

<style lang="scss">
.swipeout-list-item {
  margin-top: 12px;
}

.swipeout-left,
.swipeout-right {
  display: flex;
  align-items: center;
}

.swipeout-left {
  .swipeout-action {
    margin-left: 0;
  }
}

.swipeout-right {
  .swipeout-action {
    margin-right: 0;
  }
}

.swipeout-action {
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
</style>
