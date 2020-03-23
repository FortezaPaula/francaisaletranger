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
      <tr v-for="(needHelp) in needHelpListConso" :key="needHelp.id">
        <td>{{ needHelp.nom }}</td>
        <td>{{ needHelp.prenom }}</td>
        <td>{{ needHelp.score === undefined ? 'Chargement ...' : needHelp.score }}</td>
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

    computed: {
      needHelpListConso () {
        return this.needHelpList.filter(needHelp => needHelp.score > 0 || needHelp.score === undefined)
      }
    },

    mounted () {
      axios.get('/api/need-help', {
        params: {
          access_token: accessToken(),
          filter: {
            where: {
              helper_id: null
            },
            limit: 50
          }
        }
      }).then((response) => {
        this.needHelpList = response.data.map((needHelp) => {
          return { ...needHelp, score: undefined }
        })

        this.needHelpListScore = response.data.map((needHelp) => {
          return needHelp.id.toString()
        })

        this.needHelpListScore.reduce(async (previousPromise, nextID) => {
          await previousPromise
          return this.matchPotentiel(nextID)
        }, Promise.resolve())
      })
    },

    methods: {
      async matchPotentiel (needHelpID) {
        const response = await axios.get('/api/matching/', {
          params: {
            id: needHelpID,
            maxDistance: 10000,
            access_token: accessToken()
          }
        })

        this.needHelpList.find(needHelp => needHelp.id === parseInt(needHelpID)).score = response.data.length

        return response.data.length
      }
    }
  }
</script>

<style lang="scss">
</style>
