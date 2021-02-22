<template lang="pug">
div
  LayoutHeader
  nuxt.page
  LayoutFooter
</template>

<style lang="scss">
.page {
  margin-top: 80px;
  margin-bottom: 90px;
  padding: 12px;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #141414;
}

html,
button {
  font-size: 18px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  text-decoration: none;
}
</style>
