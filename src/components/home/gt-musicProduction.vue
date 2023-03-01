<template>
  <div class="production-container">
    <div class="production-container__content">
      <div class="production-container__content--text-box">
        <div class="production-container__content--title">
          Win music video production
        </div>
        <div class="production-container__content--body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          turpis sem, tristique ut elementum id, molestie non mi. Nunc eu
          egestas lectus. Integer condimentum id lorem non euismod. Duis vitae
          turpis vel augue egestas vestibulum eu ut lacus. Morbi nec auctor
          mauris, at finibus arcu. Sed ut nisi euismod ipsum aliquet bibendum.
          Cras odio tellus, pretium at tellus in, pharetra finibus ipsum. Aenean
          vitae finibus elit. Integer mauris mi, hendrerit a diam et, finibus
          vehicula eros. Vivamus diam libero.
        </div>
      </div>
      <div class="production-container__content--image">
        <div class="production-container__content--image-box">
          <img
            class="production-container__content--image-box-icon"
            src="@/assets/icons/production-icon.svg"
            alt="icon"
          />
          <img
            class="production-container__content--image-box-image"
            src="@/assets/images/production-img.svg"
            alt="img"
          />
          <img
            class="production-container__content--image-box-icon camera-icon"
            src="@/assets/icons/production-icon-right.svg"
            alt="icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.production-container {
  width: 100%;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 120px;
    gap: 67px;
    @media screen and (max-width: 1420px) {
      padding: 70px 90px;
    }
    @media screen and (max-width: 1250px) {
      padding: 70px 50px;
    }
    @media screen and (max-width: 1024px) {
      padding: 40px 50px 50px;
    }
    @media screen and (max-width: 750px) {
      flex-direction: column-reverse;
      gap: 30px;
    }
    @media screen and (max-width: 550px) {
      padding: 30px 16px;
    }
    &--image-box {
      display: flex;
      align-items: center;
      &-image {
        width: 537px;
        height: 451px;
        border: 2px solid rgba(231, 231, 231, 0.55);
        @media screen and (max-width: 1750px) {
          width: 339px;
          height: 284px;
        }
        @media screen and (max-width: 1024px) {
          width: 206px;
          height: 174px;
        }
        @media screen and (max-width: 550px) {
          width: 191px;
          height: 161px;
        }
      }
      &-icon {
        width: 104px;
        height: 451px;
        @media screen and (max-width: 1750px) {
          width: 66px;
          height: 284px;
        }
        @media screen and (max-width: 1024px) {
          width: 56px;
          height: 174px;
        }
        @media screen and (max-width: 750px) {
          display: none;
        }
        @media screen and (max-width: 550px) {
          width: 39px;
          height: 153px;
        }
      }
    }
    &--title {
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 53px;
      color: $gold;
      @media screen and (max-width: 1750px) {
        font-size: 26px;
        line-height: 150%;
      }
      @media screen and (max-width: 1024px) {
        font-size: 18px;
      }
      @media screen and (max-width: 750px) {
        text-align: center;
      }
      @media screen and (max-width: 550px) {
        font-size: 16px;
      }
    }
    &--body {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      color: $silver;
      margin-top: 81px;
      @media screen and (max-width: 1750px) {
        font-size: 16px;
        line-height: 160%;
        margin-top: 32px;
      }
      @media screen and (max-width: 1024px) {
        font-size: 14px;
        line-height: 155%;
        margin-top: 12px;
      }
      @media screen and (max-width: 750px) {
        text-align: center;
      }
      @media screen and (max-width: 550px) {
        font-size: 12px;
      }
    }
  }
}
.camera-icon {
  display: none;
  @media screen and (max-width: 750px) {
    display: block !important;
  }
}
</style>