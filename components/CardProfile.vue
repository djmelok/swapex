<template lang="pug">
.card-profile
  .card-profile__balance
    .card-profile__balance-title Баланс
    .card-profile__balance-date Сегодня, 8 Марта
    ProfileBalance
  .card-profile__interactive
    button.card-profile__interactive-append(type="button")
      | + Добавить актив
    button.card-profile__interactive-hiding(type="button", :class="getClassIcon", @click="TOGGLE_DATA")
      i.card-profile__interactive-hiding-icon.far.fa-eye
      i.card-profile__interactive-hiding-icon.far.fa-eye-slash
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    getClassIcon() {
      return {
        'card-profile__interactive-hiding--hide': !this.$store.state.isShowData
      };
    }
  },
  methods: {
    ...mapActions(['TOGGLE_DATA'])
  }
};
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

    &-append {
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 6px;
      border: 1px solid #dadada;
      color: #dadada;
      padding: 8px;
    }

    &-hiding {
      $hiding: &;

      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #dadada;
      font-size: 24px;

      &--hide {
        #{$hiding}-icon {
          &:first-child {
            display: none;
          }

          &:last-child {
            display: block;
          }
        }
      }

      &-icon {
        &:last-child {
          display: none;
        }
      }
    }
  }
}
</style>
