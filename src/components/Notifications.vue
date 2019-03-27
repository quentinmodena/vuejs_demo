<template>
  <div class="notifications">
    <notification v-for="(notification, index) in notifications" :notification="notification" @close-notification="removeNotification" :key="index">
    </notification>
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import NotificationStore from '@/components/NotificationStore'

export default {
  components: {
    notification: Notification
  },
  data () {
    return {
      notifications: NotificationStore.state
    }
  },
  methods: {
    removeNotification: function (notification) {
      NotificationStore.removeNotification(notification)
    }
  }
}
</script>