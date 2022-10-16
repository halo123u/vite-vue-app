<template>
  <div class="banner">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String
})

const date = new Date().getDay();
console.log(date);

defineExpose(props)
</script>

<style scoped>
  .banner {
    background-color: pink;
    color: blue;
  }
</style>