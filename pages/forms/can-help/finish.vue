<template>
  <div class="can-help-done">
    <div class="cadre">
      <h2>Merci pour votre participation.</h2>
      <br>
      <p>
        Si une personne ayant les besoins que vous proposez est proche de vous, elle pourra vous contacter directement par e-mail.
      </p>
      <p>
        En vous souhaitant une très bonne journée.
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
