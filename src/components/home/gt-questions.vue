<template>
  <div class="questions-container">
    <div class="questions-container__content">
      <div class="questions-container__content--title">
        <img
          class="questions-container__content--play"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
        <div class="questions-container__content--title-name">
          Frequently Asked Questions
        </div>
        <div class="questions-container__content--title-small">FAQ</div>
        <img
          class="questions-container__content--play second"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
      </div>
      <div class="questions-container__content--accordion">
        <gt-accordion-vue />
      </div>
      <div class="questions-container__content--accordion-divider"></div>
    </div>
  </div>
</template>

<script setup>
import gtAccordionVue from "./gt-accordion.vue";

</script>

<style lang="scss" scoped>
.questions-container {
  width: 100%;
  height: 100%;
  &__content {
    padding: 100px 120px;
    @media screen and (max-width: 1750px) {
      padding: 70px 120px;
    }
    @media screen and (max-width: 1420px) {
      padding: 70px 90px;
    }
    @media screen and (max-width: 1420px) {
      padding: 70px 50px;
    }
    @media screen and (max-width: 550px) {
      padding: 30px 16px;
    }

    &--play {
      width: 181px;
      height: 39px;
      @media screen and (max-width: 1750px) {
        width: 131px;
        height: 28px;
      }
      @media screen and (max-width: 1024px) {
        width: 123px;
        height: 27px;
      }
      @media screen and (max-width: 550px) {
        height: 18px;
        width: 82px;
      }
    }
    &--accordion {
      &-divider {
        width: 100%;
        height: 0px;
        border-top: 1.5px solid #424242;
      }
    }
    &--title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 70px;
      @media screen and (max-width: 1024px) {
        justify-content: center;
        margin-bottom: 40px;
      }

      &-name {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 53px;
        color: #d6d6d6;
        padding: 0 20px;
        @media screen and (max-width: 1750px) {
          font-size: 26px;
          line-height: 150%;
        }
        @media screen and (max-width: 1024px) {
          font-size: 18px;
        }
        @media screen and (max-width: 880px) {
          display: none;
        }
      }
      &-small {
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: $gold;
        padding: 0 15px;
        display: none;
        @media screen and (max-width: 880px) {
          display: block;
        }
      }
    }
  }
}
.second {
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
}
</style>