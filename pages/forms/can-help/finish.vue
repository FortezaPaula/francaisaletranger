<template>
  <div class="can-help-done">
    <h2>Merci pour votre participation.</h2>
    <br>
    <p>
      Si une personne ayant les besoins que vous proposez est proche de vous, elle pourra vous contacter directement par e-mail.
    </p>
    <p>
      En vous souhaitant une très bonne journée.
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
