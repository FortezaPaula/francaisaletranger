<template>
  <div class="form-need-help">
    <h3>{{ $t('need-help') }}</h3>
    <p>
      Vous êtes Français à l’étranger et chercher une solution de logement ? Vous avez besoin de conseils et d’un appui
      pour vos démarches pratiques ? Actuellement en confinement à l’étranger, vous avez besoin d’aide pour vous
      réapprovisionner en eau, nourriture, médicaments ?
    </p>
    <p>
      Remplissez le formulaire ci-dessous pour vous enregistrer en tant que personne ayant besoin d'aide. Si quelqu'un
      proche de votre localisation peut vous apporter l’aide dont vous avez besoin, nous vous mettrons en relation par
      e-mail pour que vous puissiez échanger et régler les détails logistiques.
    </p>
    <Form
      class="form"
      post-u-r-l="/api/need-help"
      type-form="need"
      title-helps="J'ai besoin d’aide pour :"
      after-u-r-l="/need-help/dashboard"
    />
  </div>
</template>

<script>
  import Form from '@/components/Form'

  export default {
    name: 'NeedHelp',

    components: { Form },

    beforeMount () {
      if (localStorage.myInfos_need) {
        this.$router.push({ path: '/need-help/dashboard' })
      }
    }
  }
</script>

<style lang="scss">
  .form-need-help {
    padding: 10px;
    max-width: 900px;
    margin: auto;

    .form {
      max-width: 500px;
      margin: 20px auto auto;
    }
  }
</style>
