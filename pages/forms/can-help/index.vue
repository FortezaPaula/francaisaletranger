<template>
  <div class="form-can-help cadre">
    <BackToHome/>
    <h2>{{ $t('can-help') }}</h2>
    <p>
      Face à la crise du Covid-19 et aux mesures d’urgence prises par les gouvernements à travers le monde, la
      solidarité
      entre ressortissants à l’étranger n’a jamais été aussi importante.
    </p>
    <p>
      Si vous êtes en mesure de proposer un soutien moral ou matériel à des Français à proximité de votre résidence
      actuelle, nous avons besoin de vous.
    </p>
    <p>
      Toute mise en relation doit se faire en <strong>respectant les consignes sanitaires et de confinement</strong>
      du pays dans lequel vous vous trouvez actuellement. Si
      vous
      proposez une aide pour les courses ou la garde d’enfants, il ne sert à rien de prendre des risques inutiles :
      <strong>engagez-vous seulement si vous êtes en bonne santé et avez moins de 60 ans</strong>.
      Vous pouvez vérifiez si vous ne faites pas partie des publics à risque sur le site du
      <a href="https://solidarites-sante.gouv.fr/actualites/actualites-du-ministere/article/coronavirus-qui-sont-les-personnes-fragiles" target="_blank">ministère de la santé</a>.

      <p><nuxt-link to="/comment-ca-marche">En savoir plus sur le fonctionnement de la plateforme.</nuxt-link></p>
    </p>
    <Form
      class="form"
      post-u-r-l="/api/can-help"
      type-form="can"
      title-helps="Je peux aider pour :"
      after-u-r-l="/forms/can-help/finish"
    />
  </div>
</template>

<script>
  import Form from '@/components/Form'
  import BackToHome from '@/components/BackToHome'

  export default {
    name: 'CanHelp',

    components: { BackToHome, Form },

    beforeMount () {
      if (localStorage.myInfos_can) {
        this.$router.push({ path: '/can-help/dashboard' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-can-help {
    max-width: 700px;
    margin: auto auto 30px;

    p {
      margin-bottom: 10px;
    }

    .form {
      margin: 40px 0;
    }
  }
</style>
