<template lang="pug">
.coin.content
  HeadPage(:title="getCurrentCoin.fullName")
  .coin__info
    .coin__info-head
      img.coin__info-head-icon(:src="require(`~/assets/images/crypto/png/${getCurrentCoin.name.toLowerCase()}.png`)")
      .coin__info-head-text
        span.coin__info-head-text-name {{ getCurrentCoin.name }}
        .coin__info-head-text-field
          span.coin__info-head-text-field-code {{ shortCode }}
          i.far.fa-copy.coin__info-head-text-field-icon
    .coin__info-balance
      .coin__info-balance-crypto 0
      .coin__info-balance-dollars $ 0
  .coin__links
    nuxt-link.coin__links-link(to="/")
      img.coin__links-link-icon(src="~/assets/images/icons/arrow_line_down_left_light.png")
      span.coin__links-link-text Получить
    nuxt-link.coin__links-link(to="/")
      i.fas.fa-shopping-cart.coin__links-link-icon
      span.coin__links-link-text Купить
    nuxt-link.coin__links-link(to="/")
      img.coin__links-link-icon(src="~/assets/images/icons/arrow_line_up_right_light.png")
      span.coin__links-link-text Отправить
</template>

<script>
export default {
  validate({ params, store }) {
    if (store.state.crypto.coins.find(coin => coin.name === params.name)) {
      return true;
    } else return false;
  },
  data() {
    return {
      code: 'O7K5lgl0wXU4U7Wf89r3r48fBM6fIhpnEgoakcbfBy6kQ8evqJGxUbGBsXa5MQ2uiSbKSi0bs9N0ba1FJMA3dJJVKtF817v'
    };
  },
  computed: {
    getCurrentCoin() {
      const name = this.$route.params.name;
      return this.$store.state.crypto.coins.find(coin => coin.name === name);
    },
    shortCode() {
      const length = this.code.length;
      return `${this.code.slice(0, 6)}.....${this.code.slice(length - 6, length)}`;
    }
  }
};
</script>

<style lang="scss">
.coin {
  $self: &;

  width: 100%;
  display: flex;
  flex-direction: column;
  color: #dadada;

  &__info {
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, #1e1e1e, #252525);
    border-radius: 12px;
    padding: 16px;
    flex-grow: 1;

    &-head {
      display: flex;

      &-icon {
        width: 56px;
        height: 56px;
      }

      &-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 1;
        margin-left: 16px;

        &-name {
          text-transform: uppercase;
          font-weight: 500;
        }

        &-field {
          display: flex;
          align-items: center;
          color: #b8b8b8;

          &-code {
            max-width: calc(100% - 80px);
            text-overflow: ellipsis;
            overflow: hidden;
            font-weight: 500;
          }

          &-icon {
            width: 16px;
            height: 16px;
            margin-left: 16px;
          }
        }
      }
    }

    &-balance {
      flex-grow: 1;
      padding: 18px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-crypto {
        font-size: 48px;
        font-weight: 300;
      }

      &-dollars {
        margin-top: 6px;
        font-size: 14px;
        color: #b8b8b8;
      }
    }
  }

  &__links {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    margin: 16px 0;

    &-link {
      width: 30%;
      padding: 12px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 12px;
      border: 2px solid #dadada;
      font-size: 16px;
      color: #dadada;

      &-icon {
        width: 22px !important;
        height: 22px;
        margin-bottom: 4px;
        color: #dadada;
      }
    }
  }
}
</style>
