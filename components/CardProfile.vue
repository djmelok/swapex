<template lang="pug">
.card-profile
  .card-profile__balance
    .card-profile__balance-title Баланс
    .card-profile__balance-date Сегодня, 22 Февр.
    ProfileBalance
  .card-profile__interactive
    button.card-profile__interactive-add(type="button")
      | + Добавить актив
    button.card-profile__interactive-hide(type="button", @click="TOGGLE_DATA")
      i.far.fa-eye
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['TOGGLE_DATA'])
  }
}
</script>

<style lang="scss">
.card-profile {
  width: 100%;
  height: 128px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  background: linear-gradient(45deg, #1e1e1e, #252525);
  color: #fff;

  &__balance,
  &__interactive {
    display: flex;
    flex-direction: column;
  }

  &__balance {
    &-title {
      color: #dadada;
      font-weight: 500;
    }

    &-date {
      color: #999;
      font-size: 12px;
    }
  }

  &__interactive {
    justify-content: space-between;
    align-items: flex-end;

    &-add {
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 6px;
      border: 1px solid #dadada;
      color: #dadada;
      padding: 8px;
    }

    &-hide {
      width: max-content;
      color: #dadada;
      font-size: 24px;
    }
  }
}
</style>
