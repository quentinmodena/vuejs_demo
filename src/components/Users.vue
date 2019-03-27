<template>
  <div>
    <liste sort="name" name="Utilisateurs" url="users"></liste>
  </div>
</template>

<script>
import Liste from '@/components/Liste'

export default {
  name: 'Users',
  components: {
    'liste': Liste
  }
}
</script>