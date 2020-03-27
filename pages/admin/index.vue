<template>
  <div>
    <h1>Demandes d'aide</h1>
    <div class="cadre">
      <h3>Demandes d'aides qui n'ont pas encore été traitées</h3>
      <p>Il s'agit des demandes qui ont la meilleure correspondance avec des personnes qui proposent leur aide.
        Toutes les demandes ne sont pas affichées.
        Merci de revenir sur cette page une fois que ces demandes ont été traitées.</p>
      <div class="waiting" v-if="waiting">Veuillez patienter...</div>
      <div v-if="!waiting && needHelpList.length === 0">Aucune correspondance trouvée.</div>
      <table cellpadding="10px" v-if="!waiting" >
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th colspan="2">
            Nombre de personnes pouvant aider
          </th>
        </tr>
        <tr v-for="(needHelp) in needHelpList" :key="needHelp.id">
          <td>{{ needHelp.nom }}</td>
          <td>{{ needHelp.prenom }}</td>
          <td>{{ needHelp.score}}</td>
          <td>
            <nuxt-link :to="'/admin/need-helps/'+needHelp.id">
              Voir la demande
            </nuxt-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import accessToken from '../../helpers/accessToken'

  export default {
    layout: 'admin',

    data () {
      return {
        needHelpList: [],
        needHelpListScore: [],
        waiting: true
      }
    },

    mounted () {
      axios.get('/api/need-help/allWithMatching', {
        params: {
          access_token: accessToken(),
          maxDistance: 10000
        }
      }).then((response) => {
        this.needHelpList = response.data
        this.waiting = false
      })
    }
  }
</script>

<style>
  .waiting {
    padding: 2em;
    font-style: oblique;
    max-width: 300px;
  }
</style>
