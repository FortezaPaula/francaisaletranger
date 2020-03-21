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
        <nuxt-link to="/need-help/dashboard">
          <div class="already-help">
            J'ai déjà une demande
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {}
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
