<template>
  <div class="dashboard">
    <div ref="infoBanner" class="alert alert-info" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="deleteInfoBanner">
        <span aria-hidden="true">&times;</span>
      </button>
      Merci de garder le même appareil pour consulter ce site. C'est votre appareil qui permet de vous
      identifier automatiquement.
    </div>
    <h3>Tableau de bord</h3>
    <div>
      Nom : {{ myInfos.nom }}
    </div>
    <div>
      Prénom : {{ myInfos.prenom }}
    </div>
    <div>
      Email : {{ myInfos.email }}
    </div>
    <div>
      Mes besoins :
      {{ myInfos.helpFor.selected.map((help) => {
        return availableHelpers().find((helper) => {return helper.data === help}).name
      }) }}
    </div>
  </div>
</template>

<script>
  import availableHelpers from '@/helpers/availableHelpers'

  export default {
    name: 'Dashboard',

    data () {
      return {
        myInfos: {
          helpFor: {
            selected: []
          }
        }
      }
    },

    beforeMount () {
      if (!localStorage.myInfos) {
        this.$router.push({ path: '/forms/need-help' })
      } else {
        this.myInfos = JSON.parse(localStorage.myInfos)
      }
    },

    mounted () {
      this.$refs.infoBanner.style.display = 'block'
    },

    methods: {
      availableHelpers,
      deleteInfoBanner () {
        this.$refs.infoBanner.style.display = 'none'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .alert {
    display: none;
  }

  .dashboard {
    padding: 10px;
  }
</style>
