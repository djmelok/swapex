<template lang="pug">
div
  LayoutHeader
  nuxt.page
  LayoutFooter
  LayoutSidebar
</template>

<script>
export default {
  beforeDestroy() {
    document.documentElement.removeAttribute('style')
    window.removeEventListener('resize', this.resizeHandler)
  },
  mounted() {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler() {
      if (window.innerHeight === this.oldHeight) return
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      this.oldHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #141414;
}

.page {
  margin: 80px 0 90px 0;
  padding: 12px;
}
</style>
