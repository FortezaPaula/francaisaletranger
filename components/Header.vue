<template>
  <div class="header">
    <nuxt-link to="/">
      <h1>
        <img src="~/static/logo.jpg" class="logo" alt="Solidarité des français de l'étranger">
      </h1>
      <h2>
        Plateforme d'entraide contre l'épidémie du COVID-19
      </h2>
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

  h1, h2 {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  .logo {
    height: calc(#{$header-height} - 2.5rem);
    margin: auto;
    display: block;
  }
</style>
