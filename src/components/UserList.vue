<template>
  <div class="user-list">
    <div class="user-item" v-for="{username, id} in users" :key="id" >
      {{username}}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '../helpers';
const props = defineProps<{
  users: User []
}>();
const { users } = props;


defineExpose(props)
</script>
<style scoped>
  .user-item {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>