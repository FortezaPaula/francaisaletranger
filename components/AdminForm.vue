<template>
  <b-form>
    <b-form-group label="Nom">
      <b-form-input
        id="nom"
        v-model="needer.nom"
        type="text"
        name="nom"
      />
      <b-form-invalid-feedback>
        Ce champ est obligatoire et doit faire au moins 2 caractères.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Prénom">
      <b-form-input
        id="prenom"
        v-model="needer.prenom"
        type="text"
        name="prenom"
      />
      <b-form-invalid-feedback>
        Ce champ est obligatoire et doit faire au moins 2 caractères.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="E-mail">
      <b-form-input
        id="email"
        v-model="needer.email"
        type="email"
        name="email"
      />
      <b-form-invalid-feedback>
        Cette adresse e-mail est invalide.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Localisation">
      <div v-if="needer.gps_coordinates && needer.gps_coordinates.lat && needer.gps_coordinates.lng" class="position">
        Latitude: {{ needer.gps_coordinates.lat }}
        <br>
        Longitude: {{ needer.gps_coordinates.lng }}
        <br>
        <a
          :href="`https://www.google.com/maps/search/${needer.gps_coordinates.lat}+${needer.gps_coordinates.lng}`"
          target="_blank"
        >
          Voir
        </a>
      </div>
    </b-form-group>
    <b-form-group label="Besoins">
      <b-form-checkbox-group
        v-model="form.helpFor.selected"
        :options="form.helpFor.options"
        value-field="data"
        text-field="name"
        stacked
        disabled
      />
    </b-form-group>
  </b-form>
</template>

<script>
  import availableHelpers from '../helpers/availableHelpers'

  export default {
    name: 'AdminForm',
    props: {
      needer: {
        type: Object,
        default: () => {
        }
      },
      updateUrl: {
        type: String,
        default: '/'
      }
    },
    data () {
      return {
        requestSend: false,
        form: {
          nom: undefined,
          prenom: undefined,
          email: undefined,
          position: {
            pays: '',
            ville: '',
            latitude: null,
            longitude: null
          },
          helpFor: {
            selected: [],
            options: availableHelpers()
          }
        }
      }
    },
    beforeMount () {
      if (this.needer.nombre_hebergement > 0) {
        this.form.helpFor.selected.push('hebergement')
      }

      if (this.needer.approvisionnement) {
        this.form.helpFor.selected.push('approvisionnement')
      }

      if (this.needer.autres) {
        this.form.helpFor.selected.push('autres')
      }

      if (this.needer.conseils) {
        this.form.helpFor.selected.push('conseils')
      }
    }
  }
</script>

<style lang="scss">
  legend {
    font-weight: bold;
  }
</style>
