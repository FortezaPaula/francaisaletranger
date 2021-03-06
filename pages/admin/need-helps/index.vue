<template>
  <div class="admin-need-helps">
    <h1>Demandes d’aide</h1>
    <vue-bootstrap4-table
      :rows="rows"
      :columns="columns"
      :config="config"
      :show-loader="showLoader"
      :total-rows="total_rows"
      @on-change-query="onChangeQuery"
    >
      <template slot="sort-asc-icon">
        <i class="admin-need-helps__sorting-icon fas fa-sort-up"/>
      </template>
      <template slot="sort-desc-icon">
        <i class="admin-need-helps__sorting-icon fas fa-sort-down"/>
      </template>
      <template slot="no-sort-icon">
        <i class="admin-need-helps__sorting-icon fas fa-sort"/>
      </template>
      <template slot="empty-results">
        Aucun résultat
      </template>
      <template slot="refresh-button-text">
        <i class="fas fa-sync-alt"/> Rafraîchir
      </template>
      <template slot="reset-button-text">
        <i class="fas fa-broom"/> Réinitialiser
      </template>
      <template slot="approvisionnement" slot-scope="props">
        {{ props.cell_value ? '🍽' : '' }}
      </template>
      <template slot="conseils" slot-scope="props">
        {{ props.cell_value ? '🗣' : '' }}
      </template>
      <template slot="autres" slot-scope="props">
        {{ props.cell_value ? '🤝' : '' }}
      </template>
      <template slot="helper_id" slot-scope="props">
        {{ props.cell_value ? 'Oui' : 'Non' }}
      </template>
      <template slot="links" slot-scope="props">
        <nuxt-link :to="{ path: `/admin/need-helps/${props.row.id}` }" class="btn btn-primary">
          <i class="fas fa-user-friends"/>
        </nuxt-link>
      </template>
    </vue-bootstrap4-table>
  </div>
</template>

<script>
  import axios from 'axios'
  import accessToken from '@/helpers/accessToken'

  export default {
    layout: 'admin',
    data () {
      return {
        rows: [],
        columns: [
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
            label: '🗣',
            name: 'conseils',
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
          },
          {
            label: 'Déjà aidé ?',
            name: 'helper_id',
            column_text_alignment: 'text-left',
            row_text_alignment: 'text-left',
            sort: true
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
    mounted () {
      this.fetchNeeder()
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
            condition[fields[index]] = { ilike: `%${this.queryParams.global_search}%` }
            conditions.push(condition)
          }
          filter.where = { or: conditions }
        } else if (this.queryParams.filters && this.queryParams.filters.length > 0) {
          const conditions = []
          for (let index = 0; index < this.queryParams.filters.length; index++) {
            const filter = this.queryParams.filters[index]
            if (['nom', 'prenom', 'email'].includes(filter.name)) {
              const condition = {}
              condition[filter.name] = { ilike: `%${filter.text}%` }
              conditions.push(condition)
            }
            if (['nombre_hebergement'].includes(filter.name)) {
              const condition = {}
              condition[filter.name] = { gte: filter.text }
              conditions.push(condition)
            }
            if (['approvisionnement', 'conseils', 'autres'].includes(filter.name)) {
              const condition = {}
              condition[filter.name] = true
              conditions.push(condition)
            }
          }
          filter.where = { and: conditions }
        }
        axios.get('/api/need-help', {
          params: {
            filter,
            access_token: accessToken()
          }
        }).then(function (response) {
          self.rows = response.data
          self.total_rows = parseInt(response.headers['x-total-count'])
          self.showLoader = false
        }).catch(function (error) {
          self.showLoader = false
        })
      }
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
