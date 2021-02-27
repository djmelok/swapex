<template lang="pug">
.buy
  .buy__header
    .buy__header-text Купить
    nuxt-link.buy__header-close(to="/")
      i.fas.fa-times
  .buy__content
    .buy__content-operation
      .buy__content-operation-title
        i.fas.fa-lock
        span Отдать
      .buy__content-operation-count 0.00
      BaseSelect.buy__content-operation-select(:options="selectOptions", @input="selectHandler")
    .buy__content-payment
      button.buy__content-payment-choice(type="button") VISA
      .buy__content-payment-line
      button.buy__content-payment-lock(type="button")
        i.fas.fa-lock
    .buy__content-operation
      .buy__content-operation-title
        i.fas.fa-lock
        span Получить
      .buy__content-operation-count 0.00
      BaseSelect.buy__content-operation-select(:options="selectOptions", @input="selectHandler")
    .buy__content-card
    CreditForm
</template>

<script>
export default {
  data() {
    return {
      selectOptions: ['BTC', 'ETH', 'LTC']
    }
  },
  methods: {
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
    z-index: 1;

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
    margin-top: 88px;

    &-operation {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: 30% auto;
      color: #dadada;

      &-title {
        font-size: 14px;

        span {
          margin-left: 8px;
        }
      }

      &-count {
        font-size: 42px;
        grid-column: 1;
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
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: #dadada;
        padding: 12px;
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
  }
}
</style>
