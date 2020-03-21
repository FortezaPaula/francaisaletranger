<template>
  <footer class="admin-footer">
    <div class="container">
      Made with love by <nuxt-link to="https://beta.gouv.fr/" target="_blank">beta.gouv.fr</nuxt-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'AdminFooter',
    data () {
      return {}
    },
    created () {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .admin-footer {
    height: $admin-footer-height;
    border-top: 1px solid #ddd;
    padding: 1rem 0;
    background-color: #eee;
    text-align: center;
  }
</style>
