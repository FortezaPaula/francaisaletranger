<template>
  <div class="form-can-help">
    <h3>{{ $t('can-help') }}</h3>
    <p>
      Les gouvernements du monde entier ont annoncé des mesures fortes pour ralentir la propagation du Covid-19 et
      participer à la lutte au niveau mondiale contre cet ennemi invisible. Ces dispositifs d’urgence ont cependant
      créer des situations préoccupantes pour des milliers de Français à l’étranger ne pouvant regagner le territoire
      national. Ces derniers ont besoin d’aide et de relai sur place pour trouver une solution d’hébergement, avoir des
      conseils dans leur démarche ou pour des besoins divers en période de confinement (réapprovisionnement, garde
      d’enfants).
    </p>
    <p>
      C’est pour ces raisons que la solidarité entre ressortissants à l’étranger n’a jamais été aussi importante. Si
      vous êtes en mesure de proposer un soutien moral ou matériel à des Français à proximité de votre résidence
      actuelle, nous avons besoin de vous.
    </p>
    <p>
      Toute mise en relation doit se faire en respectant les consignes sanitaires et de confinement du pays dans lequel
      vous vous trouvez actuellement. Si vous proposez une aide pour les courses ou la garde d’enfants, il ne sert à
      rien de prendre des risques inutiles : engagez-vous seulement si vous êtes en bonne santé et avez moins de 60 ans.
      Vous pouvez vérifiez si vous ne faites pas partie des publics à risque sur le site du ministère de la santé.
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

  export default {
    name: 'CanHelp',

    components: { Form }
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
