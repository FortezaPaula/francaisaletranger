<template>
  <div class="admin-need-help">
    <h1>Demande d’aide</h1>
    <div v-if="showNeederLoader">
      Chargement…
    </div>
    <div v-else class="row">
      <div class="col-md-4">
        <div class="admin-need-help__card">
          <AdminForm :needer="needer" />
        </div>
      </div>
      <div class="col-md-8">
        <div>
          Nombre d'aidant potentiel :
          <span style="font-weight: bold; font-size:1.2rem" class="text-success">{{ helpers.length }}</span>
          <ul>
            <!--            <li>qui répondent <b>exactement</b> à tous les critères de besoin</li>-->
            <li>dans les <b>{{ maxDistance / 1000 }} kms</b> autour de la personne</li>
          </ul>
        </div>
        <table cellpadding="10px">
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Distance (km)</th>
            <th>Nb critère exact</th>
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
        showNeederLoader: false,
        helpers: []
      }
    },
    mounted () {
      this.showNeederLoader = true
      this.fetchNeeder()
    },
    methods: {
      fetchNeeder () {
        const self = this
        axios.get(`/api/need-help/${this.$route.params.id}`, {
          params: {
            access_token: accessToken()
          }
        }).then(function (response) {
          self.needer = response.data
          self.showNeederLoader = false
        }).catch(function (error) {
          self.showNeederLoader = false
          console.log(error)
        })

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
      },
      sendMailMatching (neederId, helperId) {
        axios.post('/api/send-matching/', {
          params: {
            needHelp_id: neederId,
            helper_id: helperId,
            access_token: accessToken()
          }
        }).then(() => {
          alert('Un email vient d\'être envoyé pour la mise en relation');
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
