<template lang="pug">
.layout-footer
  nuxt-link.layout-footer__link(to="/")
    i.fas.fa-shopping-cart
    | Купить
  nuxt-link.layout-footer__link(to="/")
    i.fas.fa-sync-alt
    | Обменять
  nuxt-link.layout-footer__link(to="/")
    i.fas.fa-money-bill-alt
    | Продать
  nuxt-link.layout-footer__link(to="/")
    i.far.fa-window-restore
    | Проверить
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
  z-index: 1;

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #999;

    i {
      color: #dadada;
    }
  }
}
</style>
