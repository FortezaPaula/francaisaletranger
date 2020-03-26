<template>
  <div class="cadre">
    <h2>Tableau de bord</h2>
    <div ref="infoBanner" class="alert alert-info" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="deleteInfoBanner">
        <span aria-hidden="true">&times;</span>
      </button>
      {{ $t('info-banner-user-information') }}
    </div>
    <div>
      <strong>Nom :</strong> {{ form.nom }}
    </div>
    <div>
      <strong>Prénom :</strong> {{ form.prenom }}
    </div>
    <div>
      <strong>Email :</strong> {{ form.email }}
    </div>
    <div>
      <b-form @submit="onSubmit">
        <b-form-group :label=labelCheckBoxHelp>
          <b-form-checkbox-group
            v-model="$v.form.helpFor.selected.$model"
            :options="form.helpFor.options"
            value-field="data"
            text-field="name"
            stacked
          />
          <div v-if="form.helpFor.selected.includes('hebergement')">
            <br>
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
        </b-form-group>
        <br>
        <div class="button-go">
          <b-button type="submit" variant="primary">
            Mettre à jour mes {{typeHelpDemand}}s d'aide
          </b-button>
          <b-button @click="displayModal()" variant="danger">
            Supprimer ma {{typeHelpDemand}} d'aide
          </b-button>

          <b-modal
            hide-footer
            ref="delete-help-proposal-modal"
            :title="confirmMessage"
          >
            <b-button
              @click="deleteHelper()"
              block
              class="mt-3"
              variant="primary">
              Supprimer définitivement
            </b-button>
            <b-button
              @click="hideModal()"
              block
              class="mt-2"
              variant="danger">
              Annuler
            </b-button>
          </b-modal>

          <div v-if="requestSend" class="good-send">
            Bien reçu !
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import availableHelpers from '../helpers/availableHelpers'

  export default {
    name: 'Dashboard',
    props: {
      serverMiddlewareUrl: {
        type: String,
        default: ''
      },
      typeForm: {
        type: String,
        default: ''
      },
      typeHelp: {
        type: String,
        default: ''
      },
      typeHelpDemand: {
        type: String,
        default: ''
      },
      labelCheckBoxHelp: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
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
            hebergement_number: 1,
            options: availableHelpers()
          }
        },
        confirmMessage: ''
      }
    },
    validations: {
      form: {
        helpFor: {
          selected: {}
        }
      }
    },

    beforeMount () {
      if (!localStorage.getItem('myInfos_' + this.typeForm)) {
        this.$router.push({ path: '/forms/' + this.typeForm + '-help' })
      } else {
        this.form = JSON.parse(localStorage.getItem('myInfos_' + this.typeForm))
        this.confirmMessage = 'Je supprime ma ' + this.typeHelpDemand + ' d\'aide :'
      }
    },

    mounted () {
      this.$refs.infoBanner.style.display = 'block'
    },

    methods: {
      availableHelpers,
      deleteInfoBanner () {
        this.$refs.infoBanner.style.display = 'none'
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
          id: this.form.id,
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
          garde_enfants: this.form.helpFor.selected.includes('enfants'),
          autres: this.form.helpFor.selected.includes('autres')
        }

        axios.put(this.serverMiddlewareUrl, sendedData).then((response) => {
          if (response.status === 200) {
            localStorage.setItem('myInfos_' + this.typeForm, JSON.stringify(this.form))
            this.requestSend = true
          }
        })
      },
      displayModal () {
        this.$refs['delete-help-proposal-modal'].show()
      },
      hideModal () {
        this.$refs['delete-help-proposal-modal'].hide()
      },
      deleteHelper () {
        axios.delete(this.serverMiddlewareUrl + '/' + this.form.id).then((response) => {
          if (response.status === 200) {
            localStorage.removeItem('myInfos_' + this.typeForm)
            this.hideModal()
            this.$router.push({ path: '/' })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .alert {
    display: none;
  }
</style>
