<template>
  <div class="back-to-home">
    <nuxt-link to="/">
      Retour à l'accueil
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'BackToHome'
  }
</script>

<style scoped>
  .back-to-home {
    margin-bottom: 10px;
    font-size: 0.8rem;
  }
</style>
