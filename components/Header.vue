<template>
  <div class="header">
    <nuxt-link to="/">
      <img src="~/static/logo.jpg" class="logo" alt="Logo République Française">
    </nuxt-link>
    <span class="title">
      {{ $t('app-title') }}
      </span>
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

  .logo {
    width: 180px;
    margin: auto;
  }
</style>
