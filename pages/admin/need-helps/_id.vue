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
        <p>Afficher les offres correspondantes.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import AdminForm from '@/components/AdminForm'

  export default {
    layout: 'admin',
    components: { AdminForm },
    data () {
      return {
        needer: {},
        showNeederLoader: false
      }
    },
    mounted () {
      this.showNeederLoader = true
      this.fetchNeeder()
    },
    methods: {
      fetchNeeder () {
        const self = this
        axios.get(`${this.$env.VUE_APP_API_URL}/NeedHelps/${this.$route.params.id}`, {})
          .then(function (response) {
            self.needer = response.data
            self.showNeederLoader = false
          }).catch(function (error) {
            self.showNeederLoader = false
            console.log(error)
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
</style>
