<template>
  <div class="user-container">
    <div class="user-container__content">
      <img :src="teamMember.img" alt="" class="user-container__content--img" />
      <div class="user-container__content--img-shadow">
        <div class="user-container__content--img-shadow-name">
          {{ teamMember.name }}
        </div>
        <div class="user-container__content--img-shadow-position">
          {{ teamMember.position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  teamMember: Object,
});
</script>

<style lang="scss" scoped>
.user-container {
  width: 372px;
  height: 534px;
  @media screen and (max-width: 1850px) {
    width: 265px;
    height: 380px;
  }
  @media screen and (max-width: 1440px) {
    width: 203px;
    height: 293px;
  }
  @media screen and (max-width: 550px) {
    width: 168px;
    height: 241px;
  }
  &__content {
    position: relative;
    width: 100%;
    &--img {
      width: 372px;
      height: 534px;
      position: absolute;
      @media screen and (max-width: 1850px) {
        width: 265px;
        height: 380px;
      }
      @media screen and (max-width: 1440px) {
        width: 203px;
        height: 293px;
      }
      @media screen and (max-width: 550px) {
        width: 168px;
        height: 241px;
      }
    }
    &--img-shadow {
      position: absolute;
      width: 372px;
      height: 167px;
      background: rgba(33, 33, 33, 0.52);
      backdrop-filter: blur(7.5px);
      top: 368px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-end;
      @media screen and (max-width: 1850px) {
        width: 265px;
        height: 112px;
        top: 268px;
      }
      @media screen and (max-width: 1440px) {
        width: 206px;
        height: 92px;
        top: 201px;
      }
      @media screen and (max-width: 550px) {
        width: 170px;
        height: 75px;
        top: 166px;
      }
      &-name {
        margin-bottom: 3px;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 29px;
        color: $silver;
        @media screen and (max-width: 1850px) {
          font-size: 16px;
          line-height: 150%;
        }
        @media screen and (max-width: 1440px) {
          font-size: 16px;
          line-height: 21px;
        }
        @media screen and (max-width: 550px) {
          font-size: 14px;
          line-height: 19px;
        }
      }
      &-position {
        margin-bottom: 62px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: $gold;
        @media screen and (max-width: 1850px) {
          margin-bottom: 30px;
          font-size: 15px;
          line-height: 20px;
        }
        @media screen and (max-width: 1440px) {
          font-size: 14px;
          line-height: 19px;
        }
        @media screen and (max-width: 550px) {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>