<template>
  <div class="container">
    <div>
      <h1 class="title">
        Français à l'étranger
      </h1>
      <h2 class="subtitle">
        Plateforme de mise en relation des français bloqués à l&#39;étranger
      </h2>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    min-height: calc(100vh - #{$header-height} - #{$footer-height});
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 3rem;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 1.5rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
