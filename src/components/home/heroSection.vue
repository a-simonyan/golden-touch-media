<template>
  <div class="hero-container">
    <div class="hero-container__content">
      <div class="hero-container__content--title">
        Professional video services
      </div>
      <div class="hero-container__content--about">
        <div>
          <div class="hero-container__content--about-text">
            We help you to be seen in the crowd so that you can convey your
            message in a good way.
          </div>
          <div class="hero-container__content--about-text">
            Whether it’s a music video, advertising film or wedding video.
          </div>
        </div>
        <div class="hero-container__content--btns">
          <div class="hero-container__content--btn-container">
            <div class="hero-container__content--btn-container-border-box">
              <div
                class="hero-container__content--btn-container-left-border"
              ></div>
            </div>
            <div>
              <button class="hero-container__content--btn-container-order-now">
                Order Now
              </button>
            </div>
            <div class="hero-container__content--btn-container-border-box">
              <div
                class="hero-container__content--btn-container-right-border"
              ></div>
            </div>
          </div>
          <div class="hero-container__content--btn-container">
            <button class="hero-container__content--btn-container-our-services">
              <span class="hero-container__content--btn-container-short-title">
                Read About
              </span>
              Our Serices
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gt-heroSection",
};
</script>

<style lang="scss" scoped>
.hero-container {
  background-image: url("@/assets/images/header.svg");
  height: 85vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &__content {
    display: flex;
    flex-direction: column;
    padding: 80px 89px 70px 120px;
    @media screen and (max-width: 1420px) {
      padding: 80px 90px 48px 90px;
    }
    @media screen and (max-width: 1250px) {
      padding: 80px 50px 48px;
    }
    @media screen and (max-width: 550px) {
      padding: 80px 16px 29px 16px;
    }
    &--title {
      font-style: normal;
      font-weight: 700;
      font-size: 35px;
      line-height: 150%;
      color: $gold;
      padding-bottom: 14px;
      @media screen and (max-width: 1770px) {
        font-size: 27px;
      }
      @media screen and (max-width: 830px) {
        font-size: 22px;
      }
      @media screen and (max-width: 550px) {
        font-size: 16px;
      }
    }
    &--about {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1380px) {
        flex-direction: column;
        align-items: flex-start;
      }

      &-text {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        color: $silver;
        margin-top: 10px;
        padding-right: 30px;
        @media screen and (max-width: 1750px) {
          font-size: 16px;
        }
        @media screen and (max-width: 830px) {
          font-size: 15px;
        }
        @media screen and (max-width: 550px) {
          font-size: 12px;
        }
      }
    }
    &--btns {
      display: flex;
      align-items: center;
      padding-top: 25px;
    }
    &--btn-container {
      padding: 0 31px;
      @media screen and (max-width: 1750px) {
        padding-left: 11px !important;
        padding-right: 20px !important;
      }
      @media screen and (max-width: 550px) {
        padding: 0 10px 0 5px !important;
      }
      &-our-services {
        cursor: pointer;
        width: 305px;
        height: 57px;
        background: $silver;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 150%;
        color: #171717;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1750px) {
          width: 224px;
          height: 44px;
          font-size: 16px;
        }
        @media screen and (max-width: 830px) {
          width: 130px;
          height: 39px;
        }
        @media screen and (max-width: 550px) {
          width: 126px;
          height: 36px;
        }
      }
      &-short-title {
        display: block;
        padding-right: 3px;
        @media screen and (max-width: 830px) {
          display: none;
        }
      }
      &-order-now {
        cursor: pointer;
        width: 225px;
        height: 57px;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 150%;
        border: none;
        color: #171717;
        background: $gold;
        @media screen and (max-width: 1750px) {
          width: 169px;
          height: 44px;
          font-size: 16px;
        }
        @media screen and (max-width: 830px) {
          width: 132px;
          height: 39px;
        }
        @media screen and (max-width: 550px) {
          width: 126px;
          height: 36px;
        }
      }
      &-border-box {
        position: relative;
      }
      &-left-border {
        position: absolute;
        width: 83px;
        height: 48px;
        border-top: 1.5px solid #ffffff;
        border-left: 1.5px solid #ffffff;
        top: -16px;
        left: -17px;
        @media screen and (max-width: 1750px) {
          width: 30px;
          height: 30px;
          top: -11px;
          left: -12px;
        }
        @media screen and (max-width: 550px) {
          top: -8px;
          left: -7px;
        }
      }
      &-right-border {
        position: absolute;
        width: 83px;
        height: 48px;
        border-right: 1.5px solid #ffffff;
        border-bottom: 1.5px solid #ffffff;
        top: -32px;
        left: 158px;
        @media screen and (max-width: 1750px) {
          top: -20px;
          left: 149px;
          width: 30px;
          height: 30px;
        }
        @media screen and (max-width: 830px) {
          left: 113px;
        }
        @media screen and (max-width: 550px) {
          left: 103px;
          top: -22px;
        }
      }
    }
  }
}
</style>