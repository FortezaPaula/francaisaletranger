<template>
  <div class="header">
    <nuxt-link to="/">
      <img src="~/static/logo.jpg" class="logo" alt="Logo français de l'étranger">
      <h5>
        Plateforme d'entraide contre l'épidémie du COVID-19
      </h5>
    </nuxt-link>
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
    text-align: center;
    height: $header-height;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .logo {
    height: calc(#{$header-height} - 2.5rem);
    margin: auto;
    display: block;
  }
</style>
