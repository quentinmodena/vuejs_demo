<template>
  <div id="app">
    <material>
      <router-view/>
    </material>

    <notifications></notifications>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Notifications from '@/components/Notifications'
import NotificationStore from '@/components/NotificationStore'

export default {
  name: 'App',
  components: {
    'material': Navigation,
    'notifications': Notifications
  },
  data(){
    return {
      showAlert: false
    }
  },
  methods: {
    alert: function() {
      this.showAlert = true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.md-table-cell {
  text-align: left;
}
</style>
