<template>
  <div class="user-container">
    <img :src="teamMember.img" alt="">
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  defineProps({
    teamMember:Object
  })
</script>

<style lang="scss" scoped>
.user-container {
  width: 265px;
  height: 380px;
  background: red;
}
</style>