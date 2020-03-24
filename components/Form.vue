<template>
  <b-form @submit="onSubmit">
    <b-form-group label="Votre nom">
      <b-form-input
        id="nom"
        v-model="$v.form.nom.$model"
        type="text"
        name="nom"
        :state="validateState('nom')"
      />
      <b-form-invalid-feedback>
        Ce champ est obligatoire et doit faire au moins 2 caractères.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Votre prénom">
      <b-form-input
        id="prenom"
        v-model="$v.form.prenom.$model"
        type="text"
        name="prenom"
        :state="validateState('prenom')"
      />
      <b-form-invalid-feedback>
        Ce champ est obligatoire et doit faire au moins 2 caractères.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Votre email">
      <b-form-input
        id="email"
        v-model="$v.form.email.$model"
        type="email"
        name="email"
        :state="validateState('email')"
      />
      <b-form-invalid-feedback>
        Ce n'est pas un email valide.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Votre localisation actuelle">
      <Places type="city" @change="setCity($event.suggestion)"/>
      <b-form-invalid-feedback :state="validatePosition()">
        Merci de vous localiser
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Ville">
      <b-form-input id="pays" v-model="form.position.ville" name="ville" type="text" readonly />
    </b-form-group>
    <b-form-group label="Pays">
      <b-form-input id="pays" v-model="form.position.pays" name="pays" type="text" readonly />
    </b-form-group>
    <b-form-group :label="titleHelps">
      <b-form-checkbox-group
        v-model="$v.form.helpFor.selected.$model"
        :options="form.helpFor.options"
        value-field="data"
        text-field="name"
        stacked
      >
        <b-form-invalid-feedback :state="validateStateHelpFor('selected')">
          Au moins un besoin doit être coché
        </b-form-invalid-feedback>
      </b-form-checkbox-group>
    </b-form-group>
    <br>
    <div class="button-go">
      <b-button v-if="!requestSend" type="submit" :variant="typeForm === 'need' ? 'primary' : 'success'">
        S'inscrire
      </b-button>
      <div v-else class="good-send">
        Bien reçu !!
      </div>
    </div>
  </b-form>
</template>

<script>
  import axios from 'axios'
  import { required, minLength, email, requiredIf } from 'vuelidate/lib/validators'
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
            options: availableHelpers()
          }
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

      getGeoloc () {
        this.pendingGeoloc = true

        navigator.geolocation.getCurrentPosition((position) => {
          this.pendingGeoloc = false
          this.form.position.latitude = position.coords.latitude
          this.form.position.longitude = position.coords.longitude
        }, () => { this.geoloc = false })
      },

      setCity (suggestion) {
        this.form.position.latitude = suggestion.latlng.lat
        this.form.position.longitude = suggestion.latlng.lng
        this.form.position.ville = suggestion.name
        this.form.position.pays = suggestion.country
      },

      onSubmit (event) {
        event.preventDefault()

        this.$v.form.$touch()

        if (this.$v.form.$anyError) {
          return
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
          nombre_hebergement: this.form.helpFor.selected.includes('hebergement') ? 1 : 0,
          approvisionnement: this.form.helpFor.selected.includes('approvisionnement'),
          garde_enfants: this.form.helpFor.selected.includes('enfants'),
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
  .button-go {
    text-align: center;
  }

  legend {
    font-weight: bold;
  }

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
</style>
