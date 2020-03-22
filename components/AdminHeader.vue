<template>
  <header class="admin-header">
    <div class="container admin-header__container clearfix">
      <div class="admin-header__logo">
        <nuxt-link to="/admin" class="admin-header__logo-link">
          <img src="~/assets/logo.png" alt="République Française" class="admin-header__logo-image">
        </nuxt-link>
        <div class="admin-header__baseline">
          {{ $t('app-title') }}
        </div>
      </div>
      <nav role="navigation" class="admin-header__navigation">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <nuxt-link to="/admin" class="nav-link admin-header__nav-link">
              Accueil
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/admin/need-helps" class="nav-link admin-header__nav-link">
              Demandes d’aide
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/admin/helpers" class="nav-link admin-header__nav-link">
              Offres d’aide
            </nuxt-link>
          </li>
        </ul>
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
  .admin-header__container {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
  .admin-header__navigation {
    float: right;
    padding: .5rem 0;
    .nav-item {
      margin-left: .5rem;
    }
  }
  .admin-header__nav-link {
    background-color: white;
  }
  .admin-header__logo {
    float: left;
  }
  .admin-header__logo-link {
    display: inline-block;
    text-decoration: none;
    color: black;
    &:hover {
      background-color: white;
    }
  }
  .admin-header__logo-image {
    width: 6.25rem;
  }
  .admin-header__baseline {
    display: inline-block;
    margin: 0 .5rem;
  }
</style>
