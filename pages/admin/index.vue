<template>
  <div>
    <h1>Hello.</h1>
    <h3>Les demandes d'aides qui n'ont pas encore été traitées</h3>
    <table cellpadding="10px">
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th colspan="2">
          Nombre de personne pouvant aider
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
</template>

<script>
  import axios from 'axios'
  import accessToken from '../../helpers/accessToken'

  export default {
    layout: 'admin',

    data () {
      return {
        needHelpList: [],
        needHelpListScore: []
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
      })
    }
  }
</script>
