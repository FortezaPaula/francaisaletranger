<template>
  <div class="can-help-done">
    <div class="cadre">
      <h2>{{title}}</h2>
      <br>
        <slot/>
      <br/>
      <BackToHome/>
    </div>
  </div>
</template>

<style>
  .can-help-done {
    max-width: 700px;
    margin: auto;
  }
</style>

<script>
  import BackToHome from '@/components/BackToHome'

  export default {
    components: { BackToHome },
    props: {
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    },
    data () {
      return {}
    },
    created () {},
    methods: {}
  }

</script>
