<template>
  <div />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'city'
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Saisir votre ville ici'
    }
  },
  data () {
    return { instance: null }
  },
  mounted () {
    const places = require('places.js')
    // make sure Vue does not know about the input
    // this way it can properly unmount
    this.input = document.createElement('input')
    this.input.placeholder = this.placeholder
    this.$el.appendChild(this.input)

    this.instance = places({
      appId: this.$env.ALGOLIA_APP_ID,
      apiKey: this.$env.ALGOLIA_API_KEY,
      type: this.type,
      container: this.input
    })

    this.instance.on('change', e => this.$emit('change', e))
  },
  beforeDestroy () {
    this.instance.removeAllListeners('change')
    this.instance.destroy()
  }
}

</script>
