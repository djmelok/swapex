<template lang="pug">
.buy
  .buy__header
    .buy__header-text Купить
    nuxt-link.buy__header-close(to="/")
      i.fas.fa-times
  .buy__content
    .buy__content-operation
      .buy__content-operation-title
        img.buy__content-operation-title-img(src="~/assets/images/icons/arrow_line_up_right.png")
        span.buy__content-operation-title-text Отдать
      input.buy__content-operation-input(v-model.number="inputSend", inputmode="decimal", type="number", value="", placeholder="0.00")
      BaseSelect.buy__content-operation-select(:options="selectSend", @input="selectHandler")
    .buy__content-payment
      button.buy__content-payment-choice(type="button")
        img(src="~/assets/images/icons/visa-master-dark.png")
      .buy__content-payment-line
      button.buy__content-payment-lock(type="button")
        i.fas.fa-lock
    .buy__content-operation
      .buy__content-operation-title
        img.buy__content-operation-title-img(src="~/assets/images/icons/arrow_line_down_left.png")
        span.buy__content-operation-title-text Получить
      input.buy__content-operation-input(v-model.number="inputReceive", inputmode="decimal", type="number", value="", placeholder="0.00")
      BaseSelect.buy__content-operation-select(:options="selectReceive", @input="selectHandler")
    CreditForm.buy__content-card(@editCardHandler="editCardHandler", @savedCardHandler="savedCardHandler")
    button.buy__content-button.primary-button(v-if="isValidAction", type="button") Купить
</template>

<script>
export default {
  data() {
    return {
      selectSend: ['EUR', 'USD', 'RUB'],
      selectReceive: ['BTC', 'ETH', 'LTC'],
      editingCard: false,
      savedCard: false,
      inputSend: null,
      inputReceive: null
    }
  },
  computed: {
    isValidAction() {
      return !this.editingCard && this.savedCard
    }
  },
  methods: {
    editCardHandler(value) {
      this.editingCard = value
    },
    savedCardHandler(value) {
      this.savedCard = value
    },
    selectHandler(e) {
      console.log('Select: ', e)
    }
  }
}
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
          filter: invert(1) contrast(0.5);
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
