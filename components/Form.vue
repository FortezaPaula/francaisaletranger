<template>
  <b-form @submit="onSubmit">
    <b-form-group label="Votre nom" class="personal-data-input">
      <b-form-input
        id="nom"
        v-model="$v.form.nom.$model"
        type="text"
        name="nom"
        :state="validateState('nom')"
      />
      <b-form-invalid-feedback>
        Saisissez votre nom (2 caractères minimum).
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Votre prénom" class="personal-data-input">
      <b-form-input
        id="prenom"
        v-model="$v.form.prenom.$model"
        type="text"
        name="prenom"
        :state="validateState('prenom')"
      />
      <b-form-invalid-feedback>
        Saisissez votre prénom (2 caractères minimum).
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Votre email" class="personal-data-input">
      <b-form-input
        id="email"
        v-model="$v.form.email.$model"
        type="email"
        name="email"
        :state="validateState('email')"
      />
      <b-form-text>Utilisé pour vous mettre en relation.</b-form-text>
      <b-form-invalid-feedback>
        Saisissez un email valide.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Votre localisation actuelle" class="personal-data-input">
      <Places type="city" @change="setCity($event.suggestion)"/>
      <b-form-text>Utilisé pour trouver des personnes proches de vous.</b-form-text>
      <b-form-invalid-feedback :state="validatePosition()">
        Saisissez votre ville et de choisissez une localisation dans le menu déroulant.
      </b-form-invalid-feedback>
    </b-form-group>
    <div v-if="localised">
      <p>
        <strong>Ville</strong>&nbsp;: {{form.position.ville}}
      </p>
      <p>
        <strong>Pays</strong>&nbsp;: {{form.position.pays}}
      </p>
    </div>
    <br>
    <b-form-group :label="titleHelps">
      <b-form-checkbox-group
        v-model="$v.form.helpFor.selected.$model"
        :options="form.helpFor.options"
        value-field="data"
        text-field="name"
        stacked
      >
        <div v-if="form.helpFor.selected.includes('hebergement')" class="hebergement">
          Logement pour :
          <b-form-select
            :options="[
              {text: '1 personne', value: 1},
              {text: '2 personnes', value: 2},
              {text: '3 personnes', value: 3},
              {text: '4 personnes', value: 4},
              {text: '5 personnes', value: 5},
              {text: '6 personnes', value: 6}]"
            v-model="form.helpFor.hebergement_number"
            style="width: 30%"></b-form-select>
        </div>
        <b-form-invalid-feedback :state="validateStateHelpFor('selected')">
          Sélectionnez un ou plusieurs besoins.
        </b-form-invalid-feedback>
      </b-form-checkbox-group>
    </b-form-group>
    <b-form-group>
      <b-form-checkbox
        id="cgu"
        v-model="$v.form.cgu.$model"
        type="checkbox"
        name="cgu"
        class="cgu"
        :state="validateState('cgu')"
      >
        J'ai pris connaissance et j'accepte les <a href="/conditions-d-utilisation" target="_blank">CGU</a>.
      </b-form-checkbox>
      <b-form-text>Il est notamment important de suivre les recommandations sanitaires à tout moment.</b-form-text>

      <b-form-invalid-feedback :state="validateState('cgu')">
        Veuillez lire et accepter les conditions générales d'utilisation.
      </b-form-invalid-feedback>
    </b-form-group>
    <br>
    <div class="button-go">
      <b-button v-if="!requestSend" type="submit">
        S'inscrire
      </b-button>
      <div v-else class="good-send">
        Bien reçu !!
      </div>
    </div>
    <div class="alert-info droits">
      <b>Vous pourrez revenir sur votre demande à tout moment en utilisant cet appareil.</b>
      Les données seront supprimées automatiquement après la crise sanitaire liée au COVID-19.
      Vous disposez d'un droit d'accès, de rectification, d’effacement et de portabilité de vos données ainsi que
      d’un droit d'opposition et d'un droit de limitation du traitement des données vous concernant.
    </div>
  </b-form>
</template>

<script>
  import axios from 'axios'
  import { required, minLength, email, requiredIf, sameAs } from 'vuelidate/lib/validators'
  import availableHelpers from '../helpers/availableHelpers'
  import Places from '@/components/Places'

  export default {
    name: 'Form',
    components: { Places },
    props: {
      postURL: {
        type: String,
        default: '/'
      },
      typeForm: {
        type: String,
        default: 'need'
      },
      afterURL: {
        type: String,
        default: null
      },
      titleHelps: {
        type: String,
        default: 'Mes besoins'
      }
    },

    data () {
      return {
        geoloc: false,
        pendingGeoloc: false,
        requestSend: false,
        localised: false,
        form: {
          id: undefined,
          nom: undefined,
          prenom: undefined,
          email: undefined,
          position: {
            pays: '',
            ville: '',
            latitude: null,
            longitude: null
          },
          helpFor: {
            selected: [],
            hebergement_number: 1,
            options: availableHelpers()
          },
          cgu: false
        }
      }
    },
    validations: {
      form: {
        nom: {
          required,
          minLength: minLength(2)
        },
        prenom: {
          required,
          minLength: minLength(2)
        },
        email: {
          required,
          email
        },
        helpFor: {
          selected: {
            required,
            minLength: minLength(1)
          }
        },
        position: {
          latitude: {
            required: requiredIf(function () {
              return this.geoloc
            })
          },
          pays: {
            required: requiredIf(function () {
              return !this.geoloc
            })
          }
        },
        cgu: {
          sameAs: sameAs(() => true)
        }
      }
    },

    mounted () {
      if ('geolocation' in navigator) {
        this.geoloc = true
      }
    },

    methods: {
      validateState (name) {
        const { $dirty, $error } = this.$v.form[name]
        return $dirty ? !$error : null
      },

      validateStateHelpFor (name) {
        const { $dirty, $error } = this.$v.form.helpFor[name]
        return $dirty ? !$error : null
      },

      validatePosition () {
        const { $dirty, $error } = this.$v.form.position.latitude
        return $dirty ? !$error : null
      },

      setCity (suggestion) {
        this.form.position.latitude = suggestion.latlng.lat
        this.form.position.longitude = suggestion.latlng.lng
        this.form.position.ville = suggestion.name
        this.form.position.pays = suggestion.country
        this.localised = true
      },

      onSubmit (event) {
        event.preventDefault()

        this.$v.form.$touch()

        if (this.$v.form.$anyError) {
          return
        }

        if (!this.form.helpFor.selected.includes('hebergement')) {
          this.form.helpFor.hebergement_number = 0
        }

        const sendedData = {
          nom: this.form.nom,
          prenom: this.form.prenom,
          email: this.form.email,
          position: this.form.position,
          gps_coordinates: {
            lat: this.form.position.latitude,
            lng: this.form.position.longitude
          },
          nombre_hebergement: this.form.helpFor.hebergement_number,
          approvisionnement: this.form.helpFor.selected.includes('approvisionnement'),
          conseils: this.form.helpFor.selected.includes('conseils'),
          autres: this.form.helpFor.selected.includes('autres')
        }

        axios.post(this.postURL, sendedData).then((response) => {
          if (response.status === 200) {
            this.form.id = response.data.id
            localStorage.setItem('myInfos_' + this.typeForm, JSON.stringify(this.form))

            if (this.afterURL !== null) {
              this.$router.push({
                path: this.afterURL
              })
            } else {
              this.requestSend = true
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss">

  .good-send {
    color: green;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .geoloc {
    display: flex;
    justify-content: center;

    .position {
      text-align: center;
    }
  }

  .personal-data-input {
    max-width: 400px;
  }

  .cgu {
    margin-top: 2em;
  }

</style>
