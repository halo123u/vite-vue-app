<template>
  <div>
    <div v-for="{username} in users">
      {{username}}
    </div>
  </div>
</template>

<script setup>
const { users } = defineProps(['users']);
</script>