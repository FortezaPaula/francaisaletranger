<template>
  <b-container class="home-page">
    <b-row class="help-buttons">
      <b-col md="6" sm="12" class="alert-info">
        <h2 style="min-height: 70px;">Je suis Français à l’étranger et j’ai besoin d’aide </h2>
        <br>
        <p class="info-help">
          Vous n’avez pas encore de solution de retour en France et vous cherchez un hébergement ? Vous avez besoin de
          conseils pour vos démarches pratiques ? En confinement, vous avez besoin d’aide pour vous réapprovisionner en
          eau, nourriture, médicaments ?
        </p>
        <br>
        <nuxt-link to="/forms/need-help">
          <b-button variant="primary">
            {{ $t('need-help') }}
          </b-button>
        </nuxt-link>
        <nuxt-link v-if="needHelp" to="/need-help/dashboard">
          <br>
          <br>
          <div class="already-help">
            {{ $t('need-help-already-exists') }}
          </div>
        </nuxt-link>
      </b-col>
      <b-col md="6" sm="12" class="alert-success">
        <h2 style="min-height: 70px;">Je suis résident à l’étranger et je peux proposer mon aide</h2>
        <br>
        <p class="info-help">
          Vous pouvez apporter des conseils ou une solution d’hébergement à un ressortissant à proximité de chez vous ?
          Vous pouvez proposer de l’aide pour faire des courses dans votre quartier ou pour un réapprovisionnement en
          produits de première nécessité ?
        </p>
        <br>
        <nuxt-link to="/forms/can-help">
          <b-button variant="danger">
            {{ $t('can-help') }}
          </b-button>
        </nuxt-link>
        <nuxt-link v-if="canHelp" to="/can-help/dashboard">
          <br>
          <br>
          <div class="already-help">
            {{ $t('can-help-update') }}
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col style="text-align: center">
        <nuxt-link to="/comment-ca-marche">
          <b-button variant="outline-secondary">
            Comment ça marche ?
          </b-button>
        </nuxt-link>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <p style="padding: 20px;">
        Depuis le début de la crise du Covid-19, des milliers de Français se retrouvent bloqués à l’étranger et doivent
        faire face à des problématiques multiples : hébergement, barrière linguistique, réapprovisionnement, etc. Pour
        répondre à ces enjeux, la solidarité s’organise à travers le monde afin de trouver des solutions sur place en
        s’appuyant sur le réseau dense des Français résidant à l'étranger. En mettant en contact les concitoyens à
        proximité, le site solidarite-Fde.beta.gouv.fr permet de favoriser cette entraide dans tous les pays concernés.
      </p>
    </b-row>
    <b-row>
      <b-col style="text-align: center">
        Retrouvez les informations officielles en direct sur le site du
        <a
          href="https://www.diplomatie.gouv.fr/fr/le-ministere-et-son-reseau/actualites-du-ministere/informations-coronavirus-covid-19/"
          target="_blank"
        >
          Ministère des Affaires étrangères
        </a>
        et dans notre
        <nuxt-link to="/faq">
          FAQ
        </nuxt-link>
        <br>
        <br>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data () {
      return {
        canHelp: false,
        needHelp: false
      }
    },

    mounted () {
      if (localStorage.myInfos_can) {
        this.canHelp = true
      }
      if (localStorage.myInfos_need) {
        this.needHelp = true
      }
    }
  }
</script>

<style lang="scss">
  .home-page {
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
    font-size: 1.1rem;

    h2 {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &.container {
      padding: 0 !important;
    }

    .alert-info {
      color: white;
      background-color: #004aad;
    }

    .alert-success {
      color: white;
      background-color: #dc3c37;
    }

    button {
      border-radius: 0;
    }
  }

  .row {
    margin: 0;
  }

  .help-buttons {
    text-align: center;

    a {
      color: white;
    }

    button {
      background-color: transparent;
      border: white 1px solid;
      font-weight: bold;
    }
  }

  .info-help {
    margin-bottom: 20px;
  }

  .subtitle {
    font-weight: 600;
    font-size: 1.6rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .alert-info, .alert-success {
    color: black;
    padding: 15px !important;
  }

  @media all and (max-width: 576px) {
    .col-sm-12 {
      padding: 0;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 1.3rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
