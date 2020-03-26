<template>
  <div class="can-help-done">
    <div class="cadre">
      <h2>Merci, nous avons bien reçu votre demande.</h2>
      <br>
      <p>
        Un contact par mail sera établi dès qu'une personne à proximité se déclare disponible pour vous aider.
      </p>
      <br/>
      <BackToHome/>
    </div>
  </div>
</template>

<script>
  import BackToHome from '../../../components/BackToHome'
  export default {
    name: 'Finish',
    components: { BackToHome }
  }
</script>

<style scoped>
  .can-help-done {
    max-width: 700px;
    margin: auto;
  }
</style>
