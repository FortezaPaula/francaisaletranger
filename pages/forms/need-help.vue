<template>
  <div class="form-need-help">
    <Form post-u-r-l="/forms/need-help" title-helps="J'ai besoin :" after-u-r-l="/need-help/dashboard" />
  </div>
</template>

<script>
  import Form from '@/components/Form'

  export default {
    name: 'NeedHelp',

    components: { Form },

    middleware: 'need-help',

    beforeMount () {
      if (localStorage.myInfos) {
        this.$router.push({ path: '/need-help/dashboard' })
      }
    }
  }
</script>

<style lang="scss">
  .form-need-help {
    max-width: 400px;
    margin: auto;
    padding: 10px;
  }
</style>
