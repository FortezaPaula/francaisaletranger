<template>
  <div class="admin-need-helps">
    <h1>Demandes d’aide</h1>
    <vue-bootstrap4-table
      :rows="rows"
      :columns="columns"
      :config="config"
      @on-change-query="onChangeQuery"
      :show-loader="showLoader"
      :total-rows="total_rows">
    </vue-bootstrap4-table>
  </div>
</template>

<script>
  import axios from 'axios'
  import VueBootstrap4Table from 'vue-bootstrap4-table'

  export default {
    layout: 'admin',
    data () {
      return {
        rows: [],
        columns: [
          {
            label: '#',
            name: 'id',
            filter: {
              type: 'simple'
            },
            sort: true,
            uniqueId: true
          },
          {
            label: 'Nom',
            name: 'nom',
            filter: {
              type: 'simple'
            },
            sort: true
          },
          {
            label: 'Prénom',
            name: 'prenom',
            filter: {
              type: 'simple'
            },
            sort: true
          },
          {
            label: 'E-mail',
            name: 'email',
            filter: {
              type: 'simple'
            },
            sort: true
          }
        ],
        config: {
          server_mode: true,
          loaderText: 'Chargement…'
        },
        queryParams: {
          sort: [],
          filters: [],
          global_search: '',
          per_page: 10,
          page: 1
        },
        total_rows: 0,
        showLoader: true
      }
    },
    methods: {
      onChangeQuery (queryParams) {
        this.queryParams = queryParams
        this.showLoader = true
        this.fetchData()
      },
      fetchData () {
        const self = this
        const filter = {}
        filter.limit = this.queryParams.per_page
        filter.offset = (this.queryParams.page - 1) * this.queryParams.per_page
        if (this.queryParams.sort && this.queryParams.sort.length > 0) {
          console.log(this.queryParams.sort)
          filter.order = `${this.queryParams.sort[0].name} ${this.queryParams.sort[0].order === 'asc' ? 'ASC' : 'DESC'}`
        }
        axios.get(`${process.env.VUE_APP_API_URL}/NeedHelps`, {
          params: {
            filter
          }
        }).then(function (response) {
          self.rows = response.data
          self.total_rows = parseInt(response.headers['x-total-count'])
          self.showLoader = false
        }).catch(function (error) {
          self.showLoader = false
          console.log(error)
        })
      }

    },
    components: {
      VueBootstrap4Table
    },
    mounted () {
      this.fetchData()
    }
  }
</script>

<style lang="scss">
</style>
