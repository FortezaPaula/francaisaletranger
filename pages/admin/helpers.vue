<template>
  <div class="admin-helps">
    <h1>Offres d’aide</h1>
    <AdminHelperList />
  </div>
</template>

<script>
  import AdminHelperList from '../../components/AdminHelperList'

  export default {
    layout: 'admin',
    components: {
      AdminHelperList
    }
  }
</script>

<style lang="scss">
</style>
