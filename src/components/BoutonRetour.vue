<template>
  <md-button class="md-raised btn-retour" @click="$router.go(-1)">
    <md-icon>arrow_back</md-icon>
    Go back
  </md-button>
</template>

<script>
  export default {
    name: 'BoutonRetour'
  }
</script>

<style scoped>
  .btn-retour{
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>