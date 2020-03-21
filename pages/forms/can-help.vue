<template>
  <div class="form-can-help">
    <Form postURL="/forms/can-help" titleHelps="Je peux aider pour :" />
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
