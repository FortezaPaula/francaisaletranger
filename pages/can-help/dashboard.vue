<template>
  <div class="dashboard">
    <div ref="infoBanner" class="alert alert-info" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="deleteInfoBanner">
        <span aria-hidden="true">&times;</span>
      </button>
      {{ $t('info-banner-user-information') }}
    </div>
    <h3>Tableau de bord</h3>
    <div>
      Nom : {{ form.nom }}
    </div>
    <div>
      Prénom : {{ form.prenom }}
    </div>
    <div>
      Email : {{ form.email }}
    </div>
    <div>
      <b-form @submit="onSubmit">
        <b-form-group label="Je peux aider pour :">
          <b-form-checkbox-group
            v-model="$v.form.helpFor.selected.$model"
            :options="form.helpFor.options"
            value-field="data"
            text-field="name"
            stacked
          />
        </b-form-group>
        <br>
        <div class="button-go">
          <b-button type="submit" variant="primary">
            Mettre à jour mes capacités d'aide
          </b-button>
          <b-button @click="displayModal()" variant="danger">
            Supprimer ma proposition d'aide
          </b-button>

          <b-modal
            hide-footer
            ref="delete-help-proposal-modal"
            title="Je supprime ma proposition d'aide :"
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
  import availableHelpers from '../../helpers/availableHelpers'

  export default {
    name: 'Dashboard',
    data () {
      return {
        requestSend: false,
        serverMiddlewareUrl: '/api/can-help',
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
        helpFor: {
          selected: {}
        }
      }
    },

    beforeMount () {
      if (!localStorage.myInfos_can) {
        this.$router.push({ path: '/forms/can-help' })
      } else {
        this.form = JSON.parse(localStorage.myInfos_can)
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
          nombre_hebergement: this.form.helpFor.selected.includes('hebergement') ? 1 : 0,
          approvisionnement: this.form.helpFor.selected.includes('approvisionnement'),
          garde_enfants: this.form.helpFor.selected.includes('enfants'),
          autres: this.form.helpFor.selected.includes('autres')
        }

        axios.put(this.serverMiddlewareUrl, sendedData).then((response) => {
          if (response.status === 200) {
            localStorage.setItem('myInfos_can', JSON.stringify(this.form))
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
            localStorage.removeItem('myInfos_can')
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

  .dashboard {
    padding: 10px;
  }
</style>
