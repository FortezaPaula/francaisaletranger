<template>
  <b-container class="comment-ca-marche">
    <div class="cadre">
      <BackToHome />
      <h3 class="subtitle">
        Qu’est-ce que la plateforme solidarite-fde.fr ?
      </h3>
      <p>
        La plateforme solidarite-fde.fr est une initiative visant à renforcer les liens de solidarité pour les
        Français à l’étranger. En réaction à la crise du COVID-19, les gouvernements ont pris des mesures fortes à travers
        le monde pour ralentir la propagation du virus. Des milliers de Français de l’étranger doivent faire face dans
        leur pays de résidence à de nombreux obstacles sur place pour se réapprovisionner ou avoir de l’information. En
        mettant en contact les concitoyens à proximité, le site solidarite-fde.fr permet de faciliter le
        renforcement des liens de solidarité qui émergent dans tous les pays concernés
      </p>
      <h3 class="subtitle">
        Qui peut proposer de l’aide ?
      </h3>
      <p>
        Tout le monde peut proposer son aide sur la plateforme à condition que les engagements pris respectent les
        consignes sanitaires et les conditions de confinement appliquées sur place. Pour tout service nécessitant un
        contact direct, seules les personnes en bonne santé et de moins de 60 ans doivent se porter volontaires afin de
        ne pas prendre de risques inutiles.
      </p>
      <h3 class="subtitle">
        Qui peut bénéficier de l’aide ?
      </h3>
      <p>
        La plupart des Français de passage à l’étranger ayant pu regagner leur lieu de résidence en France depuis le
        début de la crise, cette plateforme s’adresse en priorité aux Français résidant à l’étranger. Mais bien-sûr,
        tous les citoyens à l’étranger ayant besoin d’aide en cette période de crise sanitaire sur place peuvent
        s’inscrire sur la plateforme.
      </p>
      <h3 class="subtitle">
        Comment aider ?
      </h3>
      <p>
        Avant tout, il est nécessaire de respecter les consignes sanitaires et les mesures de confinement du pays dans
        lequel vous vous trouvez. Pour des échanges de conseils pratiques en ligne, aucune restriction particulière n’a
        besoin d’être appliquée. En revanche, pour tout service requérant un déplacement ou un contact direct, veuillez
        vérifier que vous ne faites pas partie des personnes à risques comme défini par le
        <a
          href="https://solidarites-sante.gouv.fr/actualites/actualites-du-ministere/article/coronavirus-qui-sont-les-personnes-fragiles"
          target="_blank"
        >
          ministère de la santé.
        </a>
      </p>
    </div>
  </b-container>
</template>

<script>
  import BackToHome from '../components/BackToHome'

  export default {
    name: 'CommentCaMarche',
    components: { BackToHome }
  }
</script>

<style scoped>
  .comment-ca-marche {
    max-width: 1000px;
  }
</style>
