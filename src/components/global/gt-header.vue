<template>
  <div class="nav-container">
    <div class="nav-container__box">
      <div class="nav-container__logo-box" @click="comeInHomePage">
        <img
          src="@/assets/logo/general-logo.svg"
          alt="logo"
          class="nav-container__logo-box--logo"
        />
      </div>
      <div class="nav-container__content">
        <div
          class="nav-container__content--title"
          :class="{ 'selected-title': isHomePage }"
          @click="comeInHomePage"
        >
          HOME
          <Transition name="fade" mode="out-in">
            <div class="line" v-if="isHomePage">
              <div class="line__row"></div>
            </div>
          </Transition>
        </div>
        <div
          class="nav-container__content--title"
          :class="{ 'selected-title': !isHomePage }"
          @click="comeInOrderPage"
        >
          ORDER VIDEO

          <Transition name="fade" mode="out-in">
            <div class="line" v-if="!isHomePage">
              <div class="line__row"></div>
            </div>
          </Transition>
        </div>
        <div class="nav-container__content--title">
          WIN MUSIC VIDEO PRODUCTION
        </div>
      </div>

      <div class="nav-container__burger" @click.stop="openBurgerManu">
        <Transition v-if="!isOpenBurger">
          <img
            src="@/assets/icons/burger.svg"
            alt="burger"
            class="nav-container__burger--icon"
          />
        </Transition>
        <Transition v-else>
          <img
            src="@/assets/icons/gold-burger.svg"
            alt="burger"
            class="nav-container__burger--icon"
          />
        </Transition>
      </div>
    </div>
    <Transition name="fade" mode="out-in">
      <div class="burger-manu" v-if="isOpenBurger">
        <div class="burger-manu__content">
          <div
            v-click-out-side="closeBurgerMenu"
            class="burger-manu__content--box"
          >
            <div class="burger-manu__content--box-name" @click="comeInHomePage">
              Home
            </div>
            <div class="burger-manu__content--divider"></div>
            <div
              class="burger-manu__content--box-name"
              @click="comeInOrderPage"
            >
              Order Video
            </div>
            <div class="burger-manu__content--divider"></div>
            <div class="burger-manu__content--box-name">Lorem Ipsum</div>
            <div class="burger-manu__content--divider"></div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { nextTick, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { clickOutSide as vClickOutSide } from "@mahdikhashan/vue3-click-outside";
const router = useRouter();
const route = useRoute();
const isOpenBurger = ref(false);
const isHomePage = ref(true);
const openBurgerManu = () => {
  isOpenBurger.value = !isOpenBurger.value;
};
const closeBurgerMenu = () => {
  if (isOpenBurger.value) {
    isOpenBurger.value = false;
  }
};
const comeInOrderPage = () => {
  isHomePage.value = false;
  router.push({ path: "/order" });
  isOpenBurger.value = false;
};
const comeInHomePage = () => {
  isHomePage.value = true;
  router.push({ path: "/" });
  nextTick(() => {
    document.getElementById("hero-section").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  isOpenBurger.value = false;
};
watch(
  () => route.name,
  () => {
    if (route.name === "home") {
      isHomePage.value = true;
    } else {
      isHomePage.value = false;
    }
  }
);
</script>
<style lang="scss" scoped>
.nav-container {
  z-index: 999;
  position: fixed;
  width: 100%;

  display: flex;
  flex-direction: column;
  height: 81px;
  background: rgba(23, 23, 23, 0.72);
  opacity: 0.96;
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 81px;
    &-name {
      cursor: pointer;
    }
  }
  &__logo-box {
    cursor: pointer;
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
    justify-content: center;
    width: 100%;
    &--box {
      &-name {
        cursor: pointer;
      }
    }
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
    cursor: pointer;
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
  position: relative;
  @media screen and (max-width: 1250px) {
    display: block;
  }
  &__content {
    position: absolute;
    top: 20px;
    width: 100%;
    z-index: 9999 !important;
    &--box {
      width: 440px;
      height: 152px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
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
        cursor: pointer;
      }
    }
    &--divider {
      height: 0px;
      width: 42px;
      border-bottom: 1px solid $gold;
    }
  }
}
.line {
  position: relative;
  width: 100%;

  &__row {
    position: absolute;
    height: 3px;
    width: calc(100% + 29px);
    background-color: $gold;
    top: 28px;
    left: -13px;
  }
}
.selected-title {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: $gold;
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