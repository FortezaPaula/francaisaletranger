<template>
  <b-container>
    <h2>Authentification administrateur</h2>
    <div class="login-form">
      <b-form-group label="Votre identifiant / email">
        <b-form-input
          id="login"
          v-model="$v.login.$model"
          type="text"
          name="login"
          placeholder="Identifiant / email"
        />
      </b-form-group>
      <b-form-group label="Mot de passe">
        <b-form-input
          id="mdp"
          v-model="$v.mdp.$model"
          type="password"
          name="mdp"
          placeholder="Mot de passe"
        />
      </b-form-group>
      <b-form-group align="center">
        <div v-if="errorForm" class="text-danger">
          Mauvais identifiant ou mot de passe
          <br>
          <br>
        </div>
        <b-button @click="onSubmit">
          Envoyer
        </b-button>
      </b-form-group>
    </div>
  </b-container>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  import axios from 'axios'
  import Cookies from 'universal-cookie'

  export default {
    name: 'Login',

    data () {
      return {
        login: '',
        mdp: '',
        errorForm: false
      }
    },

    created () {
    },

    validations: {
      login: {
        required
      },
      mdp: {
        required
      }
    },

    methods: {
      validateState (name) {
        const { $dirty, $error } = this.$v[name]
        return $dirty ? !$error : null
      },
      onSubmit (event) {
        event.preventDefault()

        this.$v.$touch()

        if (this.$v.$anyError) {
          return
        }

        axios.post('/api/login', {
          email: this.login,
          password: this.mdp
        }).then((response) => {
          const cookies = new Cookies()
          cookies.set('access_token', response.data.id)
          cookies.set('user_id', response.data.userId)

          this.$router.push({ path: '/admin' })
        }).catch((error) => {
          if (error.response.status === 401) {
            this.errorForm = true
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-form {
    max-width: 400px;
    margin: 20px auto auto;
  }
</style>
