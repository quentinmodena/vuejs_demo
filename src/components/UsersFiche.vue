<template>
  <div>
    <md-card>
      <btn-retour/>
      <h1 class="md-title">Fiche</h1>
    </md-card>
  </div>
</template>

<script>
import BoutonRetour from '@/components/BoutonRetour'

export default {
  name: 'UsersFiche',
  components: {
    'btn-retour': BoutonRetour
  }
}
</script>