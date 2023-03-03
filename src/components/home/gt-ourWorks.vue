<template>
  <div class="container" id="our-works">
    <div class="container__content">
      <div class="container__content--title">
        <img
          class="container__content--play"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
        <div class="container__content--title-name">Our Works</div>
        <img
          class="container__content--play second"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
      </div>
      <div class="container__content--carousel">
        <carousel
          ref="carouselRef"
          snapAlign="center"
          @update:modelValue="changeActiveItem"
          :itemsToShow="showSlides"
        >
          <slide v-for="(slide, index) in sliders" :key="`slide_${index}`">
            <img v-if="slide.img" :src="slide.img" alt="" />
          </slide>
        </carousel>
      </div>
      <div class="container__content--slider">
        <VueSlider
          :dragOnClick="false"
          @change="changeSliderItem"
          v-model="activeSlide"
          class="container__content--slider"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import VueSlider from "vue-3-slider-component";
import { Carousel, Slide } from "vue3-carousel";
const activeSlide = ref(null);
const activeItem = ref(0);
const carouselRef = ref(null);
const showSlides = ref(window.innerWidth > 880 ? 3 : 1);
const sliders = ref([
  {
    id: 0,
    img: null,
  },
  {
    id: 1,
    img: require("@/assets/images/slide-img1.jpg"),
  },
  {
    id: 2,
    img: require("@/assets/images/slide-img2.jpg"),
  },
  {
    id: 3,
    img: require("@/assets/images/slide-img3.jpg"),
  },
  {
    id: 4,
    img: require("@/assets/images/slide-img1.jpg"),
  },
  {
    id: 5,
    img: require("@/assets/images/slide-img2.jpg"),
  },
  {
    id: 6,
    img: require("@/assets/images/slide-img3.jpg"),
  },
  {
    id: 7,
    img: null,
  },
]);

onMounted(() => {
  if (window.innerWidth < 880) {
    sliders.value = sliders.value.filter((slide) => slide.img !== null);
  }
});

const changeActiveItem = (e) => {
  activeSlide.value =
    (100 / (sliders.value.length - showSlides.value)) *
    (showSlides.value === 1 ? e : e - 1);
  activeItem.value = e;
};

const changeSliderItem = (e) => {
  const slideStep = 100 / (sliders.value.length - showSlides.value);
  const changingPage =
    Math.round(e / slideStep) + (showSlides.value === 1 ? 0 : 1);
  if (activeItem.value !== changingPage) {
    carouselRef.value.nav.slideTo(changingPage);
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #212121;
  &__content {
    padding: 100px 0;
    @media screen and (max-width: 1750px) {
      padding: 70px 0;
    }
    @media screen and (max-width: 1420px) {
      padding: 70px 0;
    }
    @media screen and (max-width: 1024px) {
      padding: 70px 0;
    }
    @media screen and (max-width: 550px) {
      padding: 30px 0;
    }

    &--slider {
      background-color: #171717;
      width: 758px !important;
      height: 6px !important;
      padding: 0px !important;
      margin: 0 auto;
      @media screen and (max-width: 1750px) {
        width: 541px !important;
      }
      @media screen and (max-width: 1024px) {
        width: 376px !important;
      }
      @media screen and (max-width: 550px) {
        width: 235px !important;
      }
    }
    &--carousel {
      padding: 100px 0;
      @media screen and (max-width: 880px) {
        padding: 50px 0;
      }
      @media screen and (max-width: 400px) {
        padding: 0 !important;
      }
      li {
        width: calc(100% / 3) !important;
        transition: all 500ms;
        @media screen and (max-width: 880px) {
          width: 100% !important;
        }
      }
      li:not(.carousel__slide) {
        height: 354px !important;
      }
      img {
        width: 100%;
        height: 100%;
      }
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
    &--title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @media screen and (max-width: 1024px) {
        justify-content: center;
      }
      &-name {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 53px;
        color: $gold;
        padding: 0 20px;
        @media screen and (max-width: 1750px) {
          font-size: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 150%;
        }
        @media screen and (max-width: 1024px) {
          font-size: 18px;
        }
        @media screen and (max-width: 550px) {
          font-size: 16px;
          padding: 0 5px;
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
::v-deep {
  .vue-slider-dot-handle,
  .vue-slider-dot {
    cursor: pointer;
    width: 81px !important;
    height: 10px !important;
    border-radius: 11px;
    background-color: $gold;
    @media screen and (max-width: 1750px) {
      width: 69px !important;
      height: 8px !important;
    }
    @media screen and (max-width: 1024px) {
      width: 64px !important;
    }
    @media screen and (max-width: 550px) {
      width: 45px !important;
      height: 5px !important;
    }
  }
  .vue-slider-process,
  .vue-slider-rail {
    background-color: #171717;
  }

  .vue-slider-dot-tooltip-inner {
    display: none;
  }
  .vue-slider-dot-handle-focus {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  .carousel {
    height: 505px;
    @media screen and (max-width: 1750px) {
      height: 360px !important;
    }
    @media screen and (max-width: 1250px) {
      height: 300px !important;
    }
    .carousel__viewport {
      height: 100%;
      ol {
        height: 100%;
      }
    }
    &__slide {
      &--active {
        width: 758px !important;
        height: 478px !important;
        @media screen and (max-width: 1750px) {
          height: 360px !important;
        }
        @media screen and (max-width: 1250px) {
          height: 300px !important;
        }
        @media screen and (max-width: 1024px) {
          height: 210px !important;
        }
        @media screen and (max-width: 880px) {
          height: 360px !important;
        }
        @media screen and (max-width: 550px) {
          height: 250px !important;
        }
        @media screen and (max-width: 400px) {
          height: 175px !important;
        }
        img {
          @media screen and (max-width: 880px) {
            width: auto;
          }
        }
      }
      &--next {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 473px;
          height: 354px;
          @media screen and (max-width: 1750px) {
            width: 355px !important;
            height: 265px !important;
          }
          @media screen and (max-width: 1250px) {
            width: 271px !important;
            height: 181px !important;
          }
          @media screen and (max-width: 1100px) {
            width: 240px !important;
            height: 160px !important;
          }
        }
      }
      &--prev {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 473px;
          height: 354px;
          @media screen and (max-width: 1750px) {
            width: 355px !important;
            height: 265px !important;
          }
          @media screen and (max-width: 1250px) {
            width: 271px !important;
            height: 181px !important;
          }
          @media screen and (max-width: 1100px) {
            width: 240px !important;
            height: 160px !important;
          }
        }
      }
    }
  }
  .carousel__track {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>