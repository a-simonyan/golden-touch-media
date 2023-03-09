<template>
  <div class="conatainer">
    <div class="container__header">
      <div
        class="container__header--link"
        :class="{ 'selected-title': linkUpload }"
        @click="linkUpload = true"
      >
        Link
      </div>
      <div
        class="container__header--upload"
        :class="{ 'selected-title': !linkUpload }"
        @click="linkUpload = false"
      >
        Upload File
      </div>
    </div>
    <div class="container__header--content">
      <div v-if="linkUpload" class="container__header--content-inputs">
        <gt-input
          v-for="(input, index) in linkInputs"
          :key="index"
          :placeholder="input.placeholder"
          v-model="input.model"
        />
      </div>
      <div v-else class="container__header--content-inputs">
        <gt-input
          v-for="(input, index) in uploadInputs"
          :key="index"
          :isMusicInput="input.id === 1"
          :placeholder="input.placeholder"
          style="z-index: 999"
        />
        <img src="@/assets/icons/link-icon.svg" alt="link" class="link-icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, defineEmits } from "vue";
import gtInput from "../home/gt-input.vue";

const linkUpload = ref(true);
const linkInputs = ref([
  {
    id: 1,
    placeholder: "Link to the song*",
    model: "",
  },
  {
    id: 2,
    placeholder: "Artist / Band",
    model: "",
  },
]);
const uploadInputs = ref([
  {
    id: 1,
    placeholder: "Upload File*",
  },
  {
    id: 2,
    placeholder: "Artist / Band",
  },
]);

const emits = defineEmits(["updatePrice"]);
const { proxy } = getCurrentInstance();

onMounted(() => {
  proxy.emitter.on("submitModal", () => {
    emits("updatePrice", {
      price: 10000,
      data: linkUpload.value ? linkInputs.value : uploadInputs.value,
    });
  });
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    @media screen and (max-width: 750px) {
      gap: 50px;
    }
    @media screen and (max-width: 550px) {
      gap: 40px;
    }
    &--link {
      transition: all 400ms;
      height: 40px;
      width: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      color: #797979;
      cursor: pointer;
      @media screen and (max-width: 1250px) {
        font-size: 18px;
      }
      @media screen and (max-width: 550px) {
        font-size: 16px;
      }
    }
    &--upload {
      transition: all 400ms;
      height: 40px;
      width: 130px;
      color: $gold;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      color: #797979;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media screen and (max-width: 1250px) {
        font-size: 18px;
      }
      @media screen and (max-width: 550px) {
        font-size: 16px;
      }
    }
    &--content {
      margin: 40px 0 0;
      @media screen and (max-width: 1250px) {
        margin: 30px 0;
      }
      @media screen and (max-width: 550px) {
        margin: 20px 0;
      }
      &-inputs {
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 999;
      }
    }
  }
}

.selected-title {
  color: $gold;
  border-bottom: 2px solid $gold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  @media screen and (max-width: 1250px) {
    font-size: 18px;
  }
  @media screen and (max-width: 550px) {
    font-size: 16;
  }
}
.link-icon {
  width: 20px;
  height: 20px;
  top: 18px;
  position: absolute;
  right: 25px;
  cursor: pointer;
  @media screen and (max-width: 1250px) {
    width: 12px;
    height: 14px;
  }
  @media screen and (max-width: 550px) {
    top: 12px;
    right: 12px;
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