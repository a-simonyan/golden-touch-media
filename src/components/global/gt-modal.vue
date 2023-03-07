<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="props.modelValue" class="modal__background">
        <div
          :style="{ maxWidth: `${props.width}px` }"
          v-if="props.modelValue"
          class="modal__container"
        >
          <div class="modal__container--content">
            <slot name="modalContent"></slot>
          </div>
          <div class="modal__container--actions">
            <button
              @click="closeModal"
              class="modal__container--actions-close-btn"
            >
              Close
            </button>
            <button
              @click="closeModal"
              class="modal__container--actions-confirm-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  modelValue: Boolean,
  width: {
    type: Number,
    default: 680,
  },
});

const emits = defineEmits(["update:modelValue"]);

const closeModal = () => {
  emits("update:modelValue", false);
  const body = document.getElementsByTagName("body")[0];
  body.style.overflowY = "auto";
};
</script>


<style scoped lang="scss">
.modal {
  &__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(16, 16, 16, 0.85);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  &__container {
    width: 100%;
    background: #212121;
    box-shadow: -3px 4px 40px rgba(0, 0, 0, 0.27);
    z-index: 10000;
    padding: 32px 46px;
    @media screen and (max-width: 1750px) {
      padding: 26px 20px;
    }
    @media screen and (max-width: 550px) {
      padding: 30px 16px;
    }

    &--actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
      &-close-btn {
        cursor: pointer;
        color: #707070;
        width: 144px;
        height: 43px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        background: #212121;
        border: none !important;
        @media screen and (max-width: 1750px) {
          width: 137px;
          height: 40px;
          font-size: 16px;
          line-height: 150%;
        }
        @media screen and (max-width: 1250px) {
          font-size: 14px;
          line-height: 150%;
        }
      }
      &-confirm-btn {
        cursor: pointer;
        width: 144px;
        height: 43px;
        color: #171717;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        background: #d8be69;
        border: none;
        @media screen and (max-width: 1750px) {
          width: 137px;
          height: 40px;
          font-size: 16px;
          line-height: 150%;
        }
        @media screen and (max-width: 1250px) {
          font-size: 14px;
          line-height: 150%;
        }
        @media screen and (max-width: 550px) {
          width: 130px;
          height: 37px;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
