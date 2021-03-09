<template lang="pug">
.index-content.content
  CardProfile
  SwipeList(:items="coins", item-key="id", @swipeout:click="clickItem")
    template(v-slot="{ item }")
      CardCoin(
        :logo="item.logo",
        :name="item.name",
        :amount="item.amount",
        :fullName="item.fullName",
        :fullAmount="item.fullAmount",
        :rate="item.rate",
        :ratePercent="item.ratePercent"
      )
    template(v-slot:left="{ item }")
      .swipeout-action(@click="receiveCoin(item)")
        img.swipeout-action__img(src="~/assets/images/icons/arrow_line_down_left_light.png")
      .swipeout-action(@click="transferCoin(item)")
        img.swipeout-action__img(src="~/assets/images/icons/arrow_line_up_right_light.png")
    template(v-slot:right="{ item }")
      .swipeout-action(@click="REMOVE_COIN(item)")
        i.fas.fa-minus
</template>

<script>
import { SwipeList } from 'vue-swipe-actions';
import 'vue-swipe-actions/dist/vue-swipe-actions.css';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    SwipeList
  },
  computed: {
    ...mapState({
      coins: state => state.crypto.coins
    })
  },
  methods: {
    ...mapMutations({ REMOVE_COIN: 'crypto/REMOVE_COIN' }),
    receiveCoin(e) {
      console.log(e, 'receive coin');
    },
    transferCoin(e) {
      console.log(e, 'transfer coin');
    },
    clickItem(e) {
      this.$router.push(`/coin/${e.name}`);
    }
  }
};
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

    &__img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
