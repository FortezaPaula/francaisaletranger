<template>
  <header class="admin-header">
    <div class="container">
      <nav role="navigation" class="admin-header__navigation">
        <nuxt-link :to="{ route: 'admin' }" class="admin-header__logo-link">
          <img src="~/assets/logo.png" alt="République Française" class="admin-header__logo-image" />
          {{ $t('app-title') }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AdminHeader',
    data () {
      return {}
    },
    created () {},
    methods: {}
  }
</script>

<style lang="scss">
  .admin-header {
    border-bottom: 1px solid #ddd;
    background-color: #eee;
    height: $admin-header-height;
  }
  .admin-header__navigation {
    padding: 1rem 0;
  }
  .admin-header__logo-link {
    text-decoration: none;
    color: black;
  }
  .admin-header__logo-image {
    width: 100px;
  }
</style>
