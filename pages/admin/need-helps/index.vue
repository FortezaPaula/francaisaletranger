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
      <template slot="sort-asc-icon">
        <i class="admin-need-helps__sorting-icon fas fa-sort-up"></i>
      </template>
      <template slot="sort-desc-icon">
        <i class="admin-need-helps__sorting-icon fas fa-sort-down"></i>
      </template>
      <template slot="no-sort-icon">
        <i class="admin-need-helps__sorting-icon fas fa-sort"></i>
      </template>
      <template slot="empty-results">
        Aucun résultat
      </template>
      <template slot="refresh-button-text">
        <i class="fas fa-sync-alt"></i> Rafraîchir
      </template>
      <template slot="reset-button-text">
        <i class="fas fa-broom"></i> Réinitialiser
      </template>
      <template slot="approvisionnement" slot-scope="props">
        {{ props.cell_value ? '🍽' : '' }}
      </template>
      <template slot="autres" slot-scope="props">
        {{ props.cell_value ? '🤝' : '' }}
      </template>
      <template slot="links" slot-scope="props">
        <nuxt-link :to="{ path: `/admin/need-helps/${props.row.id}` }" class="btn btn-primary">
          <i class="fas fa-user-friends"></i>
        </nuxt-link>
      </template>
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
            column_text_alignment: 'text-right',
            row_text_alignment: 'text-right',
            uniqueId: true
          },
          {
            label: 'Nom',
            name: 'nom',
            filter: {
              type: 'simple'
            },
            column_text_alignment: 'text-left',
            row_text_alignment: 'text-left',
            sort: true
          },
          {
            label: 'Prénom',
            name: 'prenom',
            filter: {
              type: 'simple'
            },
            column_text_alignment: 'text-left',
            row_text_alignment: 'text-left',
            sort: true
          },
          {
            label: 'E-mail',
            name: 'email',
            filter: {
              type: 'simple'
            },
            column_text_alignment: 'text-left',
            row_text_alignment: 'text-left',
            sort: true
          },
          {
            label: '🛏',
            name: 'nombre_hebergement',
            filter: {
              type: 'simple'
            },
            column_text_alignment: 'text-left',
            row_text_alignment: 'text-left',
            sort: true
          },
          {
            label: '🍽',
            name: 'approvisionnement',
            filter: {
              type: 'simple'
            },
            column_text_alignment: 'text-left',
            row_text_alignment: 'text-left',
            sort: true
          },
          {
            label: '🤝',
            name: 'autres',
            filter: {
              type: 'simple'
            },
            column_text_alignment: 'text-left',
            row_text_alignment: 'text-left',
            sort: true
          },
          {
            label: '',
            name: 'links',
            column_text_alignment: 'text-right',
            row_text_alignment: 'text-right'
          }
        ],
        config: {
          server_mode: true,
          loaderText: 'Chargement…',
          per_page: 20,
          highlight_row_hover_color: '#ffa',
          global_search: {
            placeholder: '',
            per_page_options: [10, 20, 50]
          }
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
        this.fetchNeeder()
      },
      fetchNeeder () {
        const self = this
        const filter = {}
        filter.limit = this.queryParams.per_page
        filter.offset = (this.queryParams.page - 1) * this.queryParams.per_page
        if (this.queryParams.sort && this.queryParams.sort.length > 0) {
          filter.order = `${this.queryParams.sort[0].name} ${this.queryParams.sort[0].order === 'asc' ? 'ASC' : 'DESC'}`
        }
        if (this.queryParams.global_search && this.queryParams.global_search.length > 0) {
          const conditions = []
          const fields = ['nom', 'prenom', 'email']
          for (let index = 0; index < fields.length; index++) {
            const condition = {}
            condition[fields[index]] = { like: `%${this.queryParams.global_search}%`, options: 'i' }
            conditions.push(condition)
          }
          filter.where = { or: conditions }
        } else if (this.queryParams.filters && this.queryParams.filters.length > 0) {
          const conditions = []
          for (let index = 0; index < this.queryParams.filters.length; index++) {
            const filter = this.queryParams.filters[index]
            if (['id'].includes(filter.name)) {
              conditions.push({ id: filter.text })
            }
            if (['nom', 'prenom', 'email'].includes(filter.name)) {
              const condition = {}
              condition[filter.name] = { like: `%${filter.text}%`, options: 'i' }
              conditions.push(condition)
            }
            if (['nombre_hebergement'].includes(filter.name)) {
              const condition = {}
              condition[filter.name] = { gte: filter.text }
              conditions.push(condition)
            }
            if (['approvisionnement', 'autres'].includes(filter.name)) {
              const condition = {}
              condition[filter.name] = true
              conditions.push(condition)
            }
          }
          filter.where = { and: conditions }
        }
        axios.get(`${this.$env.VUE_APP_API_URL}/NeedHelps`, {
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
      this.fetchNeeder()
    }
  }
</script>

<style lang="scss">
  .admin-need-helps__sorting-icon {
    margin-left: 1rem;
  }
  .card-header {
    display: none;
  }
  .vbt-table-tools th {
    border-top: none;
    padding: 0;
  }
  .vbt-column-header {
    &:hover {
      background-color: #ffa;
    }
  }
  .vbt-header-row {
    display: block;
    > .col-md-4 {
      max-width: 100%;
    }
    > .col-md-8 {
      display: none;
    }
    .btn-group {
      float: right;
    }
  }
  .vbt-global-search {
    display: block;
  }
  .vbt-table-wrapper tbody .table-active .form-group {
    margin-bottom: 0;
  }
</style>
