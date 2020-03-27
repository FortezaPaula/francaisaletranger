<template>
  <b-container class="mentions-legales">
    <BackToHome />
    <div class="cadre">
      <p>
        Ce service est mis à disposition par le Ministère de l’Europe et des Affaires étrangères ; il vise à mettre en
        relation des Françaises et Français situés hors des frontières afin qu’ils puissent s’entraider dans le contexte
        de crise sanitaire liée au COVID-19.
      </p>
      <br>
      <h5>Editeur</h5>
      <p>
        Ministère de l'Europe et des Affaires étrangères
      </p>
      <br>
      <h5>Directeur de la publication</h5>
      <p>
        Henri Verdier, ambassadeur de France pour le numérique.
      </p>
      <br>
      <h5>Hébergeur</h5>
      <p>
        Salesforce.com France SAS
        <br>
        3 Avenue Octave Gréard - 75007 Paris
        <br>
        Tél: +33 1 72 10 94 00
      </p>
    </div>
  </b-container>
</template>

<script>
  import BackToHome from '../components/BackToHome'

  export default {
    name: 'MentionsLegales',
    components: { BackToHome }
  }
</script>

<style scoped>
  .mentions-legales {
    max-width: 1000px;
    margin: auto;
  }
</style>
