<template>
  <div class="container">
    <div
      v-if="props.inputType === 'file' && !props.fileName"
      class="choose-file"
    >
      <span class="choose-file__placeholder"> Choose File* </span>
    </div>
    <div
      v-if="props.inputType === 'file' && props.fileName"
      class="choose-file"
    >
      <span class="choose-file__placeholder fileName">
        {{ props.fileName }}</span
      >
    </div>
    <input
      @input="changeInputValue($event.target.value)"
      :type="props.inputType"
      class="gt-input"
      :placeholder="props.placeholder"
      :class="{ error: errorMasage }"
      accept=".mp3"
      :inputmode="props.isNumber ? 'numeric' : ''"
      :pattern="props.isNumber ? '[0-9]*' : ''"
    />
    <div v-if="props.showErrorMessage" class="error-container">
      <span v-if="validation" class="error-message">{{ errorMasage }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, nextTick } from "vue";

const errorMasage = ref(null);

const props = defineProps({
  placeholder: String,
  validation: Object,
  showErrorMessage: {
    type: Boolean,
    default: true,
  },
  inputType: {
    type: String,
    default: "text",
  },
  isNumber: {
    type: Boolean,
  },
  fileName: {
    type: String,
  },
});

const emits = defineEmits(["update:modelValue"]);

const changeInputValue = (v) => {
  emits("update:modelValue", v);
  nextTick(() => {
    if (props.validation?.length) {
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
.gt-input[type="file"] {
  text-indent: -999em;
  outline: none;
  width: 100%;
  height: 62px;
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
    font-size: 16px;
    padding-left: 20px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 14px;
    height: 48px !important;
  }
  @media screen and (max-width: 550px) {
    height: 38px !important;
    padding-left: 14px;
    font-size: 12px;
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
.error-container {
  height: 20px;
  margin-bottom: 28px;
  @media screen and (max-width: 1250px) {
    margin-bottom: 8px;
  }
}
.choose-file {
  position: relative;
  &__placeholder {
    position: absolute;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #797979;
    left: 22px;
    top: 15px;
    @media screen and (max-width: 1250px) {
      font-size: 16px;
      top: 13px;
    }
    @media screen and (max-width: 550px) {
      font-size: 12px;
      line-height: 150%;
      left: 16px;
    }
  }
}
.fileName {
  color: $silver;
}
</style>