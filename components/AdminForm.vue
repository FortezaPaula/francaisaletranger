<template>
  <b-form @submit="onSubmit">
    <b-form-group label="Nom">
      <b-form-input
        id="nom"
        v-model="needer.nom"
        type="text"
        name="nom"
        :state="validateState('nom')"
      />
      <b-form-invalid-feedback>
        Ce champ est obligatoire et doit faire au moins 2 caractères.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Prénom">
      <b-form-input
        id="prenom"
        v-model="needer.prenom"
        type="text"
        name="prenom"
        :state="validateState('prenom')"
      />
      <b-form-invalid-feedback>
        Ce champ est obligatoire et doit faire au moins 2 caractères.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="E-mail">
      <b-form-input
        id="email"
        v-model="needer.email"
        type="email"
        name="email"
        :state="validateState('email')"
      />
      <b-form-invalid-feedback>
        Cette adresse e-mail est invalide.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Localisation actuelle">
      <div v-if="needer.gps_coordinates && needer.gps_coordinates.lat && needer.gps_coordinates.lng" class="position">
        Latitude: {{ needer.gps_coordinates.lat }}
        <br>
        Longitude: {{ needer.gps_coordinates.lng }}
        <br>
        <a
          :href="`https://www.google.com/maps/search/${needer.gps_coordinates.lat}+${needer.gps_coordinates.lng}`"
          target="_blank"
        >
          Voir
        </a>
      </div>
    </b-form-group>

    <!-- TODO: cocher les bonnes cases -->
    <!-- b-form-group label="Besoins">
      <b-form-checkbox-group
        v-model="$v.form.helpFor.selected"
        :options="form.helpFor.options"
        value-field="data"
        text-field="name"
        stacked
      >
        <b-form-invalid-feedback :state="validateStateHelpFor('selected')">
          Au moins un besoin doit être coché
        </b-form-invalid-feedback>
      </b-form-checkbox-group>
    </b-form-group-->
  </b-form>
</template>

<script>
  import axios from 'axios'
  import countries from 'static/contries'
  import { required, minLength, email } from 'vuelidate/lib/validators'
  import availableHelpers from '../helpers/availableHelpers'

  export default {
    name: 'AdminForm',
    props: {
      needer: {
        type: Object,
        default: () => {}
      },
      updateUrl: {
        type: String,
        default: '/'
      }
    },
    data () {
      return {
        countries,
        requestSend: false,
        form: {
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
        }
        /*,
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
        */
      }
    },
    mounted () {
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
          autres: this.form.helpFor.selected.includes('autres')
        }
        axios.put(this.updateUrl, sendedData).then((response) => {
          if (response.status === 200) {
            this.requestSend = true
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  legend {
    font-weight: bold;
  }
</style>
