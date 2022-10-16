<template>
  <div class="test">
    <Banner :msg="testMessage" />
    <UserList :users="users" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'; 
import Banner from './components/Banner.vue';
import UserList from './components/UserList.vue';
import type { User } from './helpers';
import { toUpperCase, generateUsers } from './helpers';
const testMessage = ref(toUpperCase('Hello world'));
const users = ref<User []>(generateUsers(5));
</script>

<style scoped>
  .test {
    background-color: black;
    color: white;
  }
</style>