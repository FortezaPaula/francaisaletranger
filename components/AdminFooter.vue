<template>
  <footer class="admin-footer">
    <div class="container">
      Made with love by <a href="https://beta.gouv.fr/" target="_blank">beta.gouv.fr</a>
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
    background-color: #eff1f5;
    text-align: center;
  }
</style>
