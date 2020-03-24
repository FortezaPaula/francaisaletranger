<template>
  <!-- container for places.js -->
  <div />
</template>

<script>
import places from 'places.js'

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
    // make sure Vue does not know about the input
    // this way it can properly unmount
    this.input = document.createElement('input')
    this.input.placeholder = this.placeholder
    this.$el.appendChild(this.input)

    this.instance = places({
      apiKey: 'bddd2983234f29a9d15b09df4ba4a87c',
      appId: 'pl18UY28VFMH',
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
