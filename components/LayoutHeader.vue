<template lang="pug">
.layout-header
  nuxt-link.layout-header__logo(to="/") Swapex
  ProfileBalance.layout-header__balance(:class="getDisplayClass")
  button.layout-header__button(type="button")
    i.fab.fa-telegram
  button.layout-header__button(type="button")
    i.fas.fa-bars
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  computed: {
    getDisplayClass() {
      return {
        'layout-header__balance--display': this.scrollY > 140
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style lang="scss">
.layout-header {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #141414;
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  &__logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-right: auto;
  }

  &__balance {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    pointer-events: none;
    opacity: 0;

    &--display {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &__button {
    color: #fff;
    font-size: 24px;

    & + & {
      margin-left: 12px;
    }
  }
}
</style>
