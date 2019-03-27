<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Vue.js</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <md-list>
          <router-link :to="{ name: 'Users' }">
            <md-list-item>
              <md-icon>contacts</md-icon>
              <span class="md-list-item-text">Users</span>
            </md-list-item>
          </router-link>

          <router-link :to="{ name: 'HelloWorld' }">
            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>
          </router-link>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <slot></slot>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 200px;
  }
</style>
