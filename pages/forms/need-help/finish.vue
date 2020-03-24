<template>
  <div class="can-help-done">
    <h2>Merci, nous avons bien reçu votre demande.</h2>
    <br>
    <p>
      Un contact par mail sera établi dès qu'une personne à proximité se déclare disponible pour vous aider.
    </p>
    <nuxt-link to="/">
      <b-button variant="primary">
        {{ $t('finish-back-to-home-page') }}
      </b-button>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'Finish'
  }
</script>

<style scoped>
  .can-help-done {
    max-width: 700px;
    margin: auto;
    padding: 10px;
  }
</style>
