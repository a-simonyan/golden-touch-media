<template>
  <div class="container">

    <input
      @input="changeInputValue($event.target.value)"
      type="text"
      class="gt-input"
      :placeholder="props.placeholder"
      :class="{ error: errorMasage }"
    />
    <span v-if="validation" class="error-message">{{ errorMasage }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, nextTick } from "vue";

const errorMasage = ref(null);

const props = defineProps({
  placeholder: String,
  validation: Object,
});

const emits = defineEmits(["update:modelValue"]);

const changeInputValue = (v) => {
  emits("update:modelValue", v);
  nextTick(() => {
    if (props.validation.length) {
      errorMasage.value = props.validation[0].$message;
    } else {
      errorMasage.value = null;
    }
  });
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
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
  border-radius: 0 !important;

  @media screen and (max-width: 1750px) {
    height: 56px !important;
    padding-left: 20px;
  }
  @media screen and (max-width: 1250px) {
    height: 48px !important;
  }
  @media screen and (max-width: 550px) {
    height: 38px !important;
    padding-left: 14px;
  }
}
.error {
  border: 1px solid #c2041b !important;
  backdrop-filter: blur(25px) !important;
}
.error-message {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #c2041b;
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
  @media screen and (max-width: 1750px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 16px;
  }
  @media screen and (max-width: 550px) {
    font-size: 12px;
    line-height: 150%;
  }
}
</style>