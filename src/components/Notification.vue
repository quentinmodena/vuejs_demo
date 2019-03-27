<template>
    <md-snackbar md-position="center" :md-active.sync="showSnackbar" md-persistent>
      <span>{{notification.text}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
  </md-snackbar>
  
</template>

<script>
export default {
	props: ['notification'],
	data: function () {
		return { timer: 3000, showSnackbar: true}
	},
	mounted: function () {
		setTimeout(() => { this.showSnackbar = false }, this.timer);
	}
}
</script>