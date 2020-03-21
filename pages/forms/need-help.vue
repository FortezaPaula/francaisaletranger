<template>
  <div class="form-need-help">
    <Form postURL="/forms/need-help" titleHelps="J'ai besoin :" />
  </div>
</template>

<script>
  import Form from '@/components/Form'

  export default {
    name: 'NeedHelp',

    components: { Form },

    middleware: 'need-help'
  }
</script>

<style lang="scss">
  .form-need-help {
    max-width: 400px;
    margin: auto;
    padding: 10px;
  }
</style>
