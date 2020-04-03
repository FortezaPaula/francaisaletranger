<template>
  <div class="footer">
    <b-row align-v="center">
      <b-col>
        <nuxt-link to="/comment-ca-marche">
          Comment ça marche ?
        </nuxt-link>
      </b-col>
      <b-col>
        <nuxt-link to="/mentions-legales">
          Mentions legales
        </nuxt-link>
      </b-col>
      <b-col>
        <nuxt-link to="/conditions-d-utilisation">
          Conditions d'utilisation
        </nuxt-link>
      </b-col>
      <b-col cols="2">
        <nuxt-link to="/faq">
          FAQ
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    min-height: $footer-height;
    text-align: center;
    background-color: #373a3c;
    color: white;

    a {
      color: white;
    }
  }

  .row {
    display: flex;
    align-items: center;
    width: 100%;

    .col, .col-1, .col-2 {
      padding: 0;
    }

  }

  svg {
    height: 1.5rem;
    vertical-align: bottom;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
