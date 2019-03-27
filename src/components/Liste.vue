<template>
  <div v-if="loaded">
    <md-table v-model="infos" md-card>
      <md-table-toolbar>
        <h1 class="md-title">{{name}}</h1>
        <router-link :to="{ name: 'UsersFiche', params: { id: 'new' }}">
          <md-button class="md-raised btn-save">
            <md-icon>add</md-icon>
            Ajouter
          </md-button>
        </router-link>
      </md-table-toolbar>



      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell>
          <router-link :to="{ name: 'UsersFiche', params: { id: item.id }}">
            <md-icon>edit</md-icon>
          </router-link>
        </md-table-cell>
        <md-table-cell v-for="(value, index) in item" :key="index" :md-label="index" :md-sort-by="index">
          {{ value }}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'Liste',
    props: ['url', 'name'],
    data () {
      return {
        infos: [],
        loaded: false
      }
    },
    beforeMount () {
      this.axios.get(process.env.ROOT_API + this.url)
        .then(response => {
          this.infos = response.data; 
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loaded = true)
    }
  }
</script>