<template>
  <div class="form-can-help">
    <Form post-u-r-l="/forms/can-help" typeForm="can" title-helps="Je peux aider pour :" after-u-r-l="/forms/can-help/finish" />
  </div>
</template>

<script>
  import Form from '@/components/Form'

  export default {
    name: 'CanHelp',

    components: { Form },

    middleware: 'can-help'
  }
</script>

<style scoped>
  .form-can-help {
    max-width: 400px;
    margin: auto;
    padding: 10px;
  }
</style>
