<template>
  <div class="test">
    <Banner :msg="testMessage" />
  </div>
</template>
<script setup>
import { ref } from 'vue'; 
import Banner from './components/Banner.vue';
import { toUpperCase } from './helpers';
const testMessage = ref(toUpperCase('Hello world'));
</script>

<style scoped>
  .test {
    background-color: black;
    color: white;
  }
</style>