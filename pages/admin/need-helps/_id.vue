<template>
  <div class="admin-need-help">
    <h1>Demandes d’aide</h1>
    <div v-if="showNeederLoader">
      Chargement…
    </div>
    <div v-else class="row">
      <div class="col-md-4">
        <div class="admin-need-help__card">
          <AdminForm :needer="needer"/>
        </div>
      </div>
      <div class="col-md-8" v-if="needer.helper_id === null">
        <div>
          Nombre d'aidants potentiels :
          <span style="font-weight: bold; font-size:1.2rem" class="text-success">{{ helpers.length }}</span>
          <ul>
            <li>dans les <b>{{ maxDistance / 1000 }} km</b> autour de la personne</li>
          </ul>
        </div>
        <table cellpadding="10px">
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Distance (km)</th>
            <th>Nb critères exacts</th>
          </tr>
          <tr
            v-for="(helper, index) in helpers"
            :key="helper.id"
            class="classement-helper"
            :class="{'alert-success' : index === 0}"
          >
            <td>{{ helper.prenom }}</td>
            <td>{{ helper.nom }}</td>
            <td>{{ Math.round(helper.distanceInMeters) / 1000 }}</td>
            <td>{{ helper.scoring }}</td>
            <td>
              <b-button @click="sendMailMatching(needer.id, helper.id)" style="cursor: default">
                Envoyer mail
              </b-button>
            </td>
            <td v-if="index === 0">
              <b>Meilleur choix</b>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-8" v-else>
        <h3 class="text-danger">Cette demande d'aide a déjà eu un aidant d'affecté.</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import accessToken from '@/helpers/accessToken'
  import AdminForm from '@/components/AdminForm'

  export default {
    layout: 'admin',
    components: { AdminForm },
    data () {
      return {
        maxDistance: 10000,
        needer: {},
        showNeederLoader: true,
        helpers: []
      }
    },
    mounted () {
      this.showNeederLoader = true
      this.fetchNeeder()
    },
    methods: {
      fetchNeeder () {
        axios.get(`/api/need-help/${this.$route.params.id}`, {
          params: {
            access_token: accessToken()
          }
        }).then((response) => {
          this.needer = response.data
          this.showNeederLoader = false

          if (this.needer.helper_id === null) {
            axios.get('/api/matching/', {
              params: {
                id: this.$route.params.id,
                maxDistance: this.maxDistance,
                access_token: accessToken()
              }
            }).then((response) => {
              this.helpers = response.data.sort(function (a, b) {
                return a.distanceInMeters - b.distanceInMeters && b.scoring - a.scoring
              })
            })
          }
        }).catch(function (error) {
          self.showNeederLoader = false
          console.log(error)
        })
      },
      sendMailMatching (neederId, helperId) {
        axios.post('/api/send-matching/', {
          access_token: accessToken(),
          needHelp_id: neederId,
          helper_id: helperId
        }).then(() => {
          alert('Un email vient d\'être envoyé pour la mise en relation')
        })
      }
    }
  }
</script>

<style lang="scss">
  .admin-need-help__card {
    padding: 1rem;
    background-color: #eff1f5;
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  .admin-need-help {
    .best-choice {
      background-color: orange;
    }
  }
</style>
