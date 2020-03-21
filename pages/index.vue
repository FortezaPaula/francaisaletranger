<template>
  <b-container>
    <b-row align-v="center">
      <h1 class="title">
        {{ $t('app-title') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('baseline') }}
      </h2>
    </b-row>
    <b-row align-v="center" class="help-buttons">
      <b-col>
        <nuxt-link to="/forms/need-help">
          <b-button>{{ $t('need-help') }}</b-button>
        </nuxt-link>
      </b-col>
      <b-col>
        <nuxt-link to="/forms/can-help">
          <b-button>{{ $t('can-help') }}</b-button>
        </nuxt-link>
      </b-col>
    </b-row>
    <b-row align-v="center" class="help-buttons">
      <b-col cols="6">
        <nuxt-link to="/need-help/dashboard" v-if="needHelp">
          <div class="already-help">
            J'ai déjà une demande
          </div>
        </nuxt-link>
      </b-col>
      <b-col cols="6">
        <nuxt-link to="/forms/can-help" v-if="canHelp">
          <div class="already-help">
            Je mets à jour mes capacités d'aide
          </div>
        </nuxt-link>
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

    beforeMount () {
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
  .row {
    margin: 0;
  }

  .help-buttons {
    text-align: center;

    .already-help {
      margin-top: 20px;
    }
  }

  .title {
    display: block;
    font-weight: 300;
    font-size: 3rem;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 1.5rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
