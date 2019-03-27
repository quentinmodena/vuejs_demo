<template>
  <div v-if="loaded">
    <md-card>
      <btn-retour/></btn-retour>
      <md-button v-on:click="save" class="md-raised btn-save">
        <md-icon>save</md-icon>
        Sauvegarder
      </md-button>
      <div class="bloc-fiche md-layout md-gutter">
        <div class="md-layout-item md-size-25">
          <md-field>
            <label>Nom</label>
            <md-input v-model="infos.nom"></md-input>
          </md-field>
          <md-field>
            <label>Prenom</label>
            <md-input v-model="infos.prenom"></md-input>
          </md-field>
          <md-field>
            <label>Email</label>
            <md-input v-model="infos.email"></md-input>
          </md-field>
        </div>
      </div>
    </md-card>
  </div>
</template>

<script>
import BoutonRetour from '@/components/BoutonRetour'
import NotificationStore from '@/components/NotificationStore'

export default {
  name: 'UsersFiche',
  components: {
    'btn-retour': BoutonRetour,
  },
  data () {
    return {
      infos: {},
      loaded: false
    }
  },
  beforeMount () {
    if(this.$route.params.id != 'new')
    {
      this.axios.get(process.env.ROOT_API + 'users/' + this.$route.params.id)
        .then(response => {
          this.infos = response.data; 
          console.log(this.infos);
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loaded = true);
    }
    else
      this.loaded = true
  },
  methods: {
    save: function () {
      if(this.$route.params.id != 'new')
      {
        this.axios.put(process.env.ROOT_API + 'users/'+this.$route.params.id, this.infos)
        .then(response => {
          console.log(response); 
          NotificationStore.addNotification({
            text: "Sauvegarde effectuée avec succès",
            type: "success"
          })
        })
        .catch(error => {
          console.log(error)
        })
      }
      else
      {
        this.axios.post(process.env.ROOT_API + 'users', this.infos)
        .then(response => {
          console.log(response); 
          NotificationStore.addNotification({
            text: "Sauvegarde effectuée avec succès",
            type: "success"
          })
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>
  .bloc-fiche{
    padding-top:50px;
  }
  .btn-save{
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .bloc-fiche .md-layout-item{
    margin-left: 20px;
  }
</style>