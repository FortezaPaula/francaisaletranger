<template>
  <div class="header">
    <img src="~/assets/logo.png" class="logo" alt="Logo République Française">
    Français à l'étranger
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

  .logo {
    width: 100px;
    margin: auto;
  }
</style>
