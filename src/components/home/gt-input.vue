<template>
  <input type="text" class="gt-input" />
</template>

<script setup>
</script>

<style lang="scss" scoped>
.gt-input {
  height: 62px;
  background: rgba(31, 31, 31, 0.65);
  border: 1px solid rgba(168, 168, 168, 0.99);
  color: $silver;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  padding-left: 34px;
  width: 100%;
}
.gt-input:focus {
  outline: none;
}
::placeholder {
  color: #5f5f5f;
  opacity: 1;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
}
</style>