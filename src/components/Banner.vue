<template>
  <div class="banner">
    {{ msg }}
  </div>
</template>

<script setup>
defineProps({
  msg: String
})

const date = new Date().getDay();
console.log(date);

</script>

<style scoped>
  .banner {
    background-color: pink;
    color: blue;
  }
</style>