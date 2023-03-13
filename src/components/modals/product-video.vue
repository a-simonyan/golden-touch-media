<template>
  <div class="conatainer">
    <div class="container__header--content">
      <div>
        <gt-input
          :showErrorMessage="false"
          placeholder="Product Name*"
          v-model="prodVideo.prodName"
        />
        <span class="container__header--content-explanation"
          >Fill in the name of the product, service, brand, etc. for which it is
          to be advertised.</span
        >
      </div>
      <gt-input placeholder="Company Name" v-model="prodVideo.compName" />
    </div>
  </div>
</template>
  
  <script setup>
import gtInput from "../home/gt-input.vue";
import {ref, onMounted, getCurrentInstance, defineEmits } from "vue";
const prodVideo = ref({
  prodName: '',
  compName: ''
})
const emits = defineEmits(["updatePrice"]);
const { proxy } = getCurrentInstance();
onMounted(() => {
  proxy.emitter.on("submitModal", () => {
    emits("updatePrice", {price : 30000, data: prodVideo});
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
    gap: 8px;
    &--link {
      height: 40px;
      width: 85px;
      color: $gold;
      border-bottom: 2px solid $gold;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
    }
    &--upload {
      height: 40px;
      width: 130px;
      color: $gold;
      border-bottom: 2px solid $gold;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
    }
    &--content {
      margin: 40px 0 0;
      display: flex;
      flex-direction: column;
      gap: 40px;
      @media screen and (max-width: 1250px) {
        gap: 20px;
        margin: 20px 0 0;
      }
      @media screen and (max-width: 550px) {
        gap: 15px;
        margin: 15px 0 0;
      }
      &-explanation {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #575757;
        margin-top: 4px;
        @media screen and (max-width: 1750px) {
          font-size: 13px;
        }
        @media screen and (max-width: 1250px) {
          font-size: 11px;
          line-height: 150%;
        }
        @media screen and (max-width: 550px) {
          font-size: 10px;
          line-height: 129%;
        }
      }
      input {
        width: 100%;
        height: 55px;
        background: rgba(31, 31, 31, 0.65);
        border: 1px solid rgba(168, 168, 168, 0.99);
        padding-left: 24px;
        border-radius: 0 !important;
        color: #e7e7e7;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        &:focus {
          outline: none;
        }
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
    }
  }
}
::placeholder {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #797979;
  @media screen and (max-width: 1750px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 14px;
  }
  @media screen and (max-width: 550px) {
    font-size: 12px;
    line-height: 150%;
  }
}
</style>