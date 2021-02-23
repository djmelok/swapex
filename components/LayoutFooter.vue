<template lang="pug">
.layout-footer
  nuxt-link.layout-footer__link(to="/")
    i.layout-footer__link-icon.fas.fa-shopping-cart
    span.layout-footer__link-text Купить
  nuxt-link.layout-footer__link(to="/")
    i.layout-footer__link-icon.fas.fa-sync-alt
    span.layout-footer__link-text Обменять
  nuxt-link.layout-footer__link(to="/")
    i.layout-footer__link-icon.fas.fa-money-bill-alt
    span.layout-footer__link-text Продать
  nuxt-link.layout-footer__link(to="/")
    i.layout-footer__link-icon.far.fa-window-restore
    span.layout-footer__link-text Проверить
</template>

<style lang="scss">
.layout-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  padding: 24px;
  position: fixed;
  bottom: 0;
  z-index: 2;

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-icon {
      color: #dadada;
      font-size: 16px;
    }

    &-text {
      margin-top: 4px;
      color: #999;
      font-size: 12px;
    }
  }
}
</style>
