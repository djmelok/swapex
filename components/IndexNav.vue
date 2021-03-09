<template lang="pug">
nav.index-nav
  nuxt-link.index-nav__link(to="/buy")
    i.index-nav__link-icon.fas.fa-shopping-cart
    span.index-nav__link-text Купить
  nuxt-link.index-nav__link(to="#")
    i.index-nav__link-icon.fas.fa-sync-alt
    span.index-nav__link-text Обменять
  nuxt-link.index-nav__link(to="##")
    i.index-nav__link-icon.fas.fa-money-bill-alt
    span.index-nav__link-text Продать
  nuxt-link.index-nav__link(to="###")
    i.index-nav__link-icon.far.fa-window-restore
    span.index-nav__link-text Проверить
</template>

<style lang="scss">
.index-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  padding: 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #999;

    &-icon {
      font-size: 16px;
    }

    &-text {
      margin-top: 4px;
      font-size: 12px;
    }

    &.nuxt-link-exact-active {
      color: #f8880f;
    }
  }
}
</style>
