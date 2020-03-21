<template>
  <div class="layout-admin">
    <admin-header />
    <div class="container">
      <div class="layout-admin__content">
        <nuxt />
      </div>
    </div>
    <admin-footer />
  </div>
</template>

<script>
  import AdminFooter from '../components/AdminFooter'
  import AdminHeader from '../components/AdminHeader'

  export default {
    components: { AdminFooter, AdminHeader }
  }
</script>

<style lang="scss">
  .layout-admin__content {
    padding: 1rem 0;
    min-height: calc(100vh - #{$admin-header-height} - #{$admin-footer-height});
  }
</style>
