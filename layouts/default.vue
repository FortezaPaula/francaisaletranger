<template>
  <div class="layout-default">
    <Header />
    <nuxt class="main-container" />
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'

  export default {
    components: { Footer, Header }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    min-height: calc(100vh - #{$header-height} - #{$footer-height});
  }
</style>
