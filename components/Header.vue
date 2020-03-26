<template>
  <div class="header">
    <nuxt-link to="/">
      <img src="~/static/logo.jpg" class="logo" alt="Logo République Française">
      <img src="~/static/marianne_simple_simple.svg" class="logo-mobile">
    </nuxt-link>
    <div class="title">
      <nuxt-link to="/">{{ $t('app-title') }}</a></nuxt-link>
      <br />
      <h5>
        Plateforme d'entraide contre l'épidémie du Covid-19
      </h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    height: $header-height;
  }

  .title {
    font-size: 1.5rem;
    margin-left: 10px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media all and (max-width: 576px) {
    .logo-mobile {
      width: 100px;
      margin: auto;
      display: block;
    }

    .logo {
      display: none
    }
  }

  @media all and (min-width: 577px) {
    .logo {
      width: 170px;
      margin: auto;
      display: block;
    }

    .logo-mobile {
      display: none;
    }
  }
</style>
