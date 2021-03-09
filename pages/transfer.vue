<template lang="pug">
.transfer
  HeadPage(title="Перевод")
</template>

<script>
export default {
  data() {
    return {
      selectTransfer: ['EUR', 'USD', 'RUB'],
      selectReceive: ['BTC', 'ETH', 'LTC'],
      editingCard: false,
      savedCard: false,
      inputTransfer: null,
      inputReceive: null
    };
  },
  computed: {
    isValidAction() {
      return !this.editingCard && this.savedCard;
    }
  },
  methods: {
    editCardHandler(value) {
      this.editingCard = value;
    },
    savedCardHandler(value) {
      this.savedCard = value;
    },
    selectHandler(e) {
      console.log('Select: ', e);
    }
  }
};
</script>

<style lang="scss">
.buy {
  padding: 0 12px;

  &__header {
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    background-color: #2e2e2e;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;

    &-text {
      font-weight: 500;
      text-transform: uppercase;
      color: #b8b8b8;
      margin: 0 auto;
    }

    &-close {
      font-size: 24px;
      color: #b8b8b8;
      margin-left: -12px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin-top: 88px;

    &-operation {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: 30% auto;
      color: #dadada;

      &-title {
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
        }

        img {
          width: 24px;
          height: 24px;
        }
      }

      &-input {
        width: 100%;
        grid-column: 1;
        font-size: 56px;
        color: #dadada;
        background: none;
        border: none;
        outline: none;
      }

      &-select {
        margin-left: auto;
      }
    }

    &-payment {
      display: flex;
      align-items: center;
      margin: 32px 0;

      &-choice {
        width: 140px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: #dadada;
        padding: 16px;

        img {
          width: 100%;
        }
      }

      &-line {
        height: 1px;
        flex-grow: 1;
        background-color: #404040;
        margin: 0 12px;
      }

      &-lock {
        padding: 12px;
        border-radius: 12px;
        background-color: #dadada;
      }
    }

    &-card {
      margin: 32px auto;
    }

    &-button {
      width: 180px;
      margin: 0 auto;
    }
  }
}
</style>
