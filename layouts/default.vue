<template lang="pug">
nuxt
</template>

<script>
export default {
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  mounted() {
    this.resizeHandler();
  },
  methods: {
    resizeHandler() {
      if (window.innerHeight === this.oldHeight) return;
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      this.oldHeight = window.innerHeight;
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #141414;
}
</style>
