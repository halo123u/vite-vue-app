<template>
  <div class="test">
    <Banner :msg="testMessage" />
  </div>
</template>
<script setup>
import { ref } from 'vue'; 
import Banner from './components/Banner.vue';
const testMessage = ref('Hello world');
</script>

<style scoped>
  .test {
    background-color: black;
    color: white;
  }
</style>