<template>
  <div class="container">
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
      <div class="container__content--carousel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gt-ourWorks",

  // data() {
  //   return {
  //     slides: [
  //       {
  //         id: 1,
  //         img: require("../../assets/images/slide-img1.jpg"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/images/slide-img2.jpg"),
  //       },
  //       {
  //         id: 3,
  //         img: require("../../assets/images/slide-img3.jpg"),
  //       },
  // {
  //   id: 4,
  //   img: require("../../assets/images/slide-img1.jpg"),
  // },
  // {
  //   id: 5,
  //   img: require("../../assets/images/slide-img2.jpg"),
  // },
  // ],
  // };
  // },
};
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
    @media screen and (max-width: 1420px) {
      padding: 70px 50px;
    }
    @media screen and (max-width: 550px) {
      padding: 30px 16px;
    }
    &--carousel {
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
</style>