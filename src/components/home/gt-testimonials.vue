<template>
  <div class="container">
    <div class="container__content">
      <div class="container__content--title">
        <img
          class="container__content--play"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
        <div class="container__content--title-name">Testimonials</div>
        <img
          class="container__content--play second"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
      </div>
      <div class="container__content--carousel">
        <vueper-slides :dragging-distance="70" :infinite="false" class="no-shadow" :fixed-height="true">
          <template #arrow-left>
            <img src="@/assets/icons/arrow-left.svg" alt="" class="arrows" />
          </template>

          <template #arrow-right>
            <img src="@/assets/icons/arrow-right.svg" alt="" />
          </template>
          <vueper-slide v-for="(slide, index) in sliders" :key="index">
            <template #content>
              <div class="container__content--carousel-box">
                <div class="container__content--carousel-leftside">
                  <div class="container__content--carousel-textbox">
                    <div class="container__content--carousel-text">
                      <div class="container__content--carousel-leftdecor"></div>
                      <p>
                        {{ slide.content }}
                      </p>
                      <div
                        class="container__content--carousel-rightdecor"
                      ></div>
                    </div>
                  </div>
                  <div class="container__content--carousel-persdata">
                    <div class="container__content--carousel-name">
                      Jenna Smith
                    </div>
                    <div class="container__content--carousel-about">Client</div>
                  </div>
                </div>
                <div class="container__content--carousel-rightside">
                  <div class="container__content--carousel-imgbox">
                    <img
                      :src="slide.img"
                      alt="img"
                      class="container__content--carousel-imgbox-img"
                    />
                    <img
                      src="@/assets/icons/img-decor.svg"
                      alt=""
                      class="container__content--carousel-imgbox-icon"
                    />
                  </div>
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
const sliders = ref([
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id, molestie non mi. Nunc eu egestas lectus. Integer condimentum idlorem non euismod. Duis vitae turpis vel augue egestas vestibulum eu ut lacus.Morbi nec auctor mauris, at finibus arcu. Sed ut nisi euismod ipsum aliquet bibendum. Cras odio tellus, pretium at tellus in, pharetra finibus ipsum. Aenean vitae finibus elit. Integer mauris mi, hendrerit a diam et, finibus vehicula eros. Vivamus diam libero, euismod nec est dignissim, bibendum sollicitudin velit. Ut in lacus ut lectus.",
    img: require("../../assets/images/client1.svg"),
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id, molestie non mi. Nunc eu egestas lectus. Integer condimentum idlorem non euismod. Duis vitae turpis vel augue egestas vestibulum eu ut lacus.Morbi nec auctor mauris, at finibus arcu. Sed ut nisi euismod ipsum aliquet bibendum. Cras odio tellus, pretium at tellus in, pharetra finibus ipsum. Aenean vitae finibus elit. Integer mauris mi, hendrerit a diam et, finibus vehicula eros. Vivamus diam libero, euismod nec est dignissim, bibendum sollicitudin velit. Ut in lacus ut lectus.",
    img: require("@/assets/images/client1.svg"),
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id, molestie non mi. Nunc eu egestas lectus. Integer condimentum idlorem non euismod. Duis vitae turpis vel augue egestas vestibulum eu ut lacus.Morbi nec auctor mauris, at finibus arcu. Sed ut nisi euismod ipsum aliquet bibendum. Cras odio tellus, pretium at tellus in, pharetra finibus ipsum. Aenean vitae finibus elit. Integer mauris mi, hendrerit a diam et, finibus vehicula eros. Vivamus diam libero, euismod nec est dignissim, bibendum sollicitudin velit. Ut in lacus ut lectus.",
    img: require("@/assets/images/client1.svg"),
  },
]);
</script>
  
  <style lang="scss" scoped>
.container {
  width: 100%;
  &__content {
    padding: 100px 120px;
    @media screen and (max-width: 1750px) {
      padding: 70px 120px;
    }
    @media screen and (max-width: 1420px) {
      padding: 70px 90px;
    }
    @media screen and (max-width: 1250px) {
      padding: 70px 50px;
    }
    @media screen and (max-width: 550px) {
      padding: 30px 16px;
    }
    &--carousel {
      &-img {
        width: 353px;
        height: 395px;
      }
      &-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 130px;
        @media screen and (max-width: 1500px) {
          gap: 50px;
        }
        @media screen and (max-width: 1250px) {
          gap: 20px;
        }
        @media screen and (max-width: 1200px) {
          gap: 50px;
          flex-direction: column-reverse;
        }
        @media screen and (max-width: 880px) {
          gap: 36px;
          flex-direction: column-reverse;
        }
      }
      &-text {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: $silver;
        padding: 15px;
        width: 810px;

        @media screen and (max-width: 1750px) {
          line-height: 170%;
          width: 607px;
        }
        @media screen and (max-width: 880px) {
          font-size: 14px;
          line-height: 170%;
          width: 400px;
        }
        @media screen and (max-width: 550px) {
          font-size: 12px;
          line-height: 170%;
          width: 370px;
        }
        @media screen and (max-width: 450px) {
          width: 250px;
        }
      }

      &-textbox {
        min-width: 810px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        @media screen and (max-width: 1750px) {
          min-width: 607px;
        }
        @media screen and (max-width: 880px) {
          min-width: 400px;
        }
        @media screen and (max-width: 550px) {
          min-width: 370px;
        }
        @media screen and (max-width: 450px) {
          min-width: 250px;
        }
      }
      &-imgbox {
        position: relative;
        min-width: 417px;
        height: 459px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1750px) {
          min-width: 299.55px;
          height: 327.86px;
        }
        @media screen and (max-width: 880px) {
          width: 272.55px;
          height: 327.86px;
        }
        @media screen and (max-width: 550px) {
          width: 160px;
          height: 176px;
        }
        &-img {
          position: absolute;
          z-index: 1;
          width: 353px;
          height: 395px;
          @media screen and (max-width: 1750px) {
            width: 254px;
            height: 284px;
          }
          @media screen and (max-width: 880px) {
            width: 227px;
            height: 284px;
          }
          @media screen and (max-width: 550px) {
            width: 135.44px;
            height: 151.46px;
          }
        }
        &-icon {
          position: absolute;
          width: 417px;
          height: 459px;
          @media screen and (max-width: 1750px) {
            width: 299.55px;
            height: 327.86px;
          }
          @media screen and (max-width: 880px) {
            width: 272.55px;
            height: 327.86px;
          }
          @media screen and (max-width: 550px) {
            width: 160px;
            height: 176px;
          }
        }
      }
      &-leftside {
        @media screen and (max-width: 1200px) {
          display: flex;
          flex-direction: column-reverse;
        }
      }
      &-leftdecor {
        position: absolute;
        width: 72px;
        height: 56px;
        border-top: 1.5px solid $gold;
        border-left: 1.5px solid $gold;
        top: 0;
        left: 0px;
      }
      &-rightdecor {
        position: absolute;
        width: 72px;
        height: 56px;
        border-bottom: 1.5px solid $gold;
        border-right: 1.5px solid $gold;
        bottom: 0;
        right: 0px;
      }
      &-persdata {
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        padding-left: 15px;
        gap: 8px;
        @media screen and (max-width: 1200px) {
          flex-direction: row;
          align-items: center;
          padding: 0;
          margin: 0 auto 40px;
        }
      }
      &-name {
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 35px;
        color: $gold;
        @media screen and (max-width: 1750px) {
          font-size: 18px;
          line-height: 150%;
        }
      }
      &-about {
        color: #656565;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        @media screen and (max-width: 1750px) {
          font-size: 15px;
          line-height: 150%;
        }
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
        color: $silver;
        padding: 0 20px;
        @media screen and (max-width: 1750px) {
          font-size: 26px;
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
.arrows {
  width: 41px;
  height: 41px;
}
.vueperslide,
.vueperslide--active .vueperslide--visible {
  display: flex;
  align-items: center;
  justify-content: center;
}
::v-deep .vueperslides__bullet .default {
  color: $gold;
}
::v-deep .vueperslides__arrows {
  color: $gold !important;
}
::v-deep .vueperslides--fixed-height {
  height: 600px !important;
  @media screen and (max-width: 1200px) {
    height: 950px !important;
  }
  @media screen and (max-width: 880px) {
    height: 880px !important;
  }
  @media screen and (max-width: 550px) {
    height: 745px !important;
  }
}
::-webkit-scrollbar-thumb {
  background: #d8be69;
  border-radius: 10px;
}
::-webkit-scrollbar {
  width: 5px;
}
::v-deep {
  .vueperslides--touchable .vueperslides__track {
    cursor: auto;
  }
  .vueperslides__arrow {
    width: 30px;
    height: 30px;
    @media screen and (max-width: 1200px) {
      position: absolute;
      top: 25%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>