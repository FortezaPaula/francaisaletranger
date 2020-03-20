<template>
  <div class="form-need-help">
    <b-form @submit="onSubmit">
      <b-form-group label="Votre nom">
        <b-form-input id="nom" v-model="form.nom" type="text" name="nom" placeholder="Votre nom" />
      </b-form-group>
      <b-form-group label="Votre prénom">
        <b-form-input id="prenom" v-model="form.prenom" type="text" name="prenom" placeholder="Votre prenom" />
      </b-form-group>
      <b-form-group label="Votre email">
        <b-form-input id="email" v-model="form.email" type="email" name="email" placeholder="Votre email" />
      </b-form-group>
      <b-form-group label="Localisation actuelle">
        <div v-if="geoloc" class="geoloc">
          <b-button
            v-if="form.position.latitude === null && form.position.longitude === null && !pendingGeoloc"
            @click="getGeoloc"
          >
            Localisez-moi
          </b-button>
          <div v-if="pendingGeoloc">
            Localisation en cours ...
          </div>
          <div v-if="form.position.latitude && form.position.longitude" class="position">
            <b>Position récupérée</b>
            <br>
            {{ form.position.latitude }}
            <br>
            {{ form.position.longitude }}
            <br>
            <a
              :href="`https://www.google.com/maps/search/${form.position.latitude}+${form.position.longitude}`"
              target="_blank"
            >
              Vérifier
            </a>
          </div>
        </div>
        <div v-else>
          <b-form-group label="Pays">
            <b-form-select id="pays" v-model="form.position.pays" name="pays" :options="countries" />
          </b-form-group>
          <b-form-group label="Ville">
            <b-form-input id="pays" v-model="form.position.ville" name="ville" type="text" />
          </b-form-group>
        </div>
      </b-form-group>
      <b-form-group label="Mes besoins : ">
        <b-form-checkbox-group
          v-model="form.helpFor.selected"
          :options="form.helpFor.options"
          value-field="data"
          text-field="name"
          stacked
        />
      </b-form-group>
      <br>
      <!--      <div class="button-go">-->
      <!--        <b-button type="submit" variant="primary">-->
      <!--          S'inscire-->
      <!--        </b-button>-->
      <!--      </div>-->
    </b-form>
  </div>
</template>

<script>
  import countries from 'static/contries'

  export default {
    name: 'NeedHelp',

    data () {
      return {
        countries,
        geoloc: false,
        pendingGeoloc: false,
        form: {
          nom: '',
          prenom: '',
          email: '',
          position: {
            pays: '',
            ville: '',
            latitude: null,
            longitude: null
          },
          helpFor: {
            selected: [],
            options: [
              { name: 'Hébergement', data: 'hebergement' },
              { name: 'Garde d\'enfant', data: 'enfants' },
              { name: 'Approvisionnement (alimentaire, hygiène)', data: 'approvisionnement' },
              { name: 'Autre (accompagnement, soutien, etc.) ', data: 'autre' }
            ]
          }
        }
      }
    },

    mounted () {
      if ('geolocation' in navigator) {
        this.geoloc = true
      }
    },

    methods: {
      getGeoloc () {
        this.pendingGeoloc = true

        navigator.geolocation.getCurrentPosition((position) => {
          this.pendingGeoloc = false
          this.form.position.latitude = position.coords.latitude
          this.form.position.longitude = position.coords.longitude
        })
      },

      onSubmit (event) {
        event.preventDefault()
        console.log(this.form)
      }
    }
  }
</script>

<style lang="scss">
  .form-need-help {
    max-width: 400px;
    margin: auto;
    padding: 10px;
  }

  .button-go {
    text-align: center;
  }

  legend {
    font-weight: bold;
  }

  .geoloc {
    display: flex;
    justify-content: center;

    .position {
      text-align: center;
    }
  }
</style>
