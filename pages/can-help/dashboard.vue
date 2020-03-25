<template>
  <div class="form-can-help">
    <BackToHome />
    <Dashboard
      server-middleware-url="/api/can-help"
      type-form="can"
      type-help="proposition"
      type-help-demand="proposition"
      labelCheckBoxHelp="Je peux aider pour :"
    />
  </div>
</template>

<script>
  import Dashboard from '@/components/Dashboard'
  import BackToHome from '@/components/BackToHome'

  export default {

    components: { BackToHome, Dashboard }
  }
</script>

<style lang="scss" scoped>
  .form-can-help {
    padding: 10px;
    max-width: 900px;
    margin: auto;

    .form {
      max-width: 500px;
      margin: 20px auto auto;
    }
  }
</style>
