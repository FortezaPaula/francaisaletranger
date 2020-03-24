<template>
  <div class="header">
    <nuxt-link to="/">
      <img src="~/static/logo.jpg" class="logo" alt="Logo République Française">
      {{ $t('app-title') }}
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
    height: $header-height
  }

  a {
    text-decoration: none;
    color: black;
  }

  .logo {
    width: 100px;
    margin: auto;
  }
</style>
