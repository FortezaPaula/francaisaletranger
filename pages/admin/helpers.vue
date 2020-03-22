<template>
  <div class="admin-helpers">
    <h1>Offres d’aide</h1>
    <div v-if="hasHelpers" class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">E-mail</th>
            <th scope="col">Localisation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="helper in helpers" :key="helper.id">
            <th scope="row">{{ helper.id }}</th>
            <td>{{ helper.nom }}</td>
            <td>{{ helper.prenom }}</td>
            <td>{{ helper.email }}</td>
            <td>{{ formatPosition(helper.position) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { helpersService } from '@/services'

  export default {
    layout: 'admin',
    data () {
      return {
        hasHelpers: false,
        helpers: []
      }
    },
    methods: {
      async fetchHelpers () {
        this.helpers = await helpersService.get()
        this.hasHelpers = this.helpers && this.helpers.length > 0
      },
      formatPosition (position) {
        if (position.latitude && position.longitude) {
          return `${position.latitude}, ${position.longitude}`
        }
        return ''
      }
    },
    mounted () {
      this.fetchHelpers()
    }
  }
</script>

<style lang="scss">
</style>
