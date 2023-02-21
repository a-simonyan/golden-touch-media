<template>
  <div class="nav-container">
    <div class="nav-container__logo-box">
      <img
        src="@/assets/logo/general-logo.svg"
        alt="logo"
        class="nav-container__logo-box--logo"
      />
    </div>
    <div class="nav-container__content">
      <div class="nav-container__content--title">HOME</div>
      <div class="nav-container__content--title">ORDER VIDEO</div>
      <div class="nav-container__content--title">
        WIN MUSIC VIDEO PRODUCTION
      </div>
    </div>
    <details>
      <summary>
        <div class="nav-container__burger" @click="openBurgerManu">
          <img
            v-if="!isOpenBurger"
            src="@/assets/icons/burger.svg"
            alt="burger"
            class="nav-container__burger--icon"
          />
          <img
            v-if="isOpenBurger"
            src="@/assets/icons/gold-burger.svg"
            alt="burger"
            class="nav-container__burger--icon"
          />
        </div>
      </summary>
      <div class="burger-manu">
        <div class="burger-manu__content">
          <div class="burger-manu__content--box">
            <div class="burger-manu__content--box-name">Home</div>
            <div class="burger-manu__content--divider"></div>
            <div class="burger-manu__content--box-name">Order Video</div>
            <div class="burger-manu__content--divider"></div>
            <div class="burger-manu__content--box-name">Lorem Ipsum</div>
            <div class="burger-manu__content--divider"></div>
          </div>
        </div>
      </div>
    </details>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isOpenBurger = ref(false);
const openBurgerManu = () => {
  isOpenBurger.value = !isOpenBurger.value;
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/segoe-ui-4");
.nav-container {
  z-index: 999;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 81px;
  background: rgba(23, 23, 23, 0.72);
  opacity: 0.96;

  &__logo-box {
    position: relative;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1250px) {
      position: static;
    }
    &--logo {
      width: 277px;
      height: 37px;
      position: fixed;
      left: 120px;
      top: 22px;
      @media screen and (max-width: 1800px) {
        width: 245px;
        left: 100px;
        top: 22px;
      }
      @media screen and (max-width: 1500px) {
        left: 90px;
        height: 28px;
        top: 26px;
      }
      @media screen and (max-width: 1420px) {
        left: 70px;
      }
      @media screen and (max-width: 1250px) {
        height: 33px;
        position: static;
      }
      @media screen and (max-width: 550px) {
        width: 150px;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-around;

    &--title {
      margin: 0 86.5px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: $silver;
      cursor: pointer;
      @media screen and (max-width: 1680px) {
        font-size: 17px;
        margin: 0 70px;
      }
      @media screen and (max-width: 1440px) {
        font-size: 16px;
        margin: 0 40px;
      }
    }
  }
  @media screen and (max-width: 1250px) {
    &__content {
      display: none !important;
    }
  }
  &__burger {
    display: none;
    @media screen and (max-width: 1250px) {
      display: block !important;
      margin-top: 4px;
    }
    &--icon {
      width: 20px;
      height: 13px;
    }
  }
}
@media screen and (max-width: 1250px) {
  .nav-container {
    justify-content: space-between !important;
    padding: 0 50px;
  }
}
@media screen and (max-width: 550px) {
  .nav-container {
    justify-content: space-between !important;
    padding: 0 16px;
  }
}
.burger-manu {
  display: none;
  @media screen and (max-width: 1250px) {
    display: block;
    position: absolute;
    top: 170px;
    left: 0;
    width: 100%;
    &__content {
      width: 100%;
      height: 152px;
      display: flex;
      justify-content: center;
      details: [open] {

      }
      &--box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 440px;
        opacity: 1 !important;
        border-top: 1px solid $gold;
        border-bottom: 1px solid $gold;
        background: rgba(23, 23, 23, 0.5);
        box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.36);
        backdrop-filter: blur(25px);
        @media screen and (max-width: 550px) {
          width: 320px;
        }
        @media screen and (max-width: 400px) {
          width: 288px;
        }
        &-name {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 150%;
          color: $silver;
          margin: 12px 0 6px;
        }
      }
      &--divider {
        height: 0px;
        width: 42px;
        border-bottom: 1px solid $gold;
      }
    }
  }
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>