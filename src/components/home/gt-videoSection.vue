<template>
  <div class="video-container">
    <div class="video-container__content">
      <div class="video-container__content--image">
        <div class="video-container__content--border-box-border"></div>
        <img
          src="@/assets/images/viedosection-img.svg"
          class="video-container__content--border-img"
          alt="girl"
        />
      </div>
      <div class="video-container__content--about">
        <div class="video-container__content--title">
          Videos can help you tell everything
        </div>
        <div class="video-container__content--text">
          Videos give your customers the experience of being able to see your
          product in use or how your services can help them. Where images and
          text give the customer a limited insight into what the product can do,
          a video will demonstrate it and thus win over customers who are not
          yet completely convinced.
        </div>
        <div class="video-container__content--text">
          It costs a bit to make a video, but in return we have seen that a
          single video has increased online conversion for a customer by 83%.
          That means that one video paid for itself in less than 6 months (in
          this case). Don't miss unused opportunities. Contact us today and see
          what we can do for you.
        </div>
      </div>
      <div class="video-container__content--line"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.video-container {
  width: 100%;
  background-color: #171717;
  &__content {
    padding: 100px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 113px;
    @media screen and (max-width: 1420px) {
      padding: 70px 90px;
      gap: 87px;
    }
    @media screen and (max-width: 1250px) {
      padding: 40px 50px 50px 50px;
      gap: 40px;
    }
    @media screen and (max-width: 768px) {
      padding: 40px 50px 50px 50px;
      align-items: center;
      flex-direction: column;
      gap: 25px;
    }
    @media screen and (max-width: 550px) {
      padding: 40px 16px;
    }
    &--image {
      position: relative;
      min-width: 397px;
      height: 466px;
      @media screen and (max-width: 1420px) {
        min-width: 290px;
        height: 338px;
      }
      @media screen and (max-width: 1250px) {
        min-width: 230px;
        height: 265px;
      }
    }
    &--line {
      height: 0px;
      width: 100%;
      border-top: 1px solid rgba(231, 231, 231, 0.55);
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
      }
    }
    &--border-box {
      &-border {
        border: 2px solid rgba(231, 231, 231, 0.55);
        width: 361px;
        height: 429px;
        position: absolute;
        @media screen and (max-width: 1420px) {
          width: 252px;
          height: 300px;
        }
        @media screen and (max-width: 1250px) {
          width: 200px;
          height: 238px;
        }
        @media screen and (max-width: 768px) {
          margin-right: 30px;
        }
      }
    }
    &--border-img {
      position: absolute;
      position: absolute;
      bottom: -10px;
      left: 52px;
      @media screen and (max-width: 1420px) {
        bottom: 0px;
        left: 35px;
        width: 252px;
        height: 300px;
      }
      @media screen and (max-width: 1250px) {
        bottom: 0px;
        left: 31px;
        width: 200px;
        height: 238px;
      }
    }
    &--title {
      color: $gold;
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 53px;
      @media screen and (max-width: 1750px) {
        font-size: 26px;
        margin-bottom: 6px;
      }
      @media screen and (max-width: 1250px) {
        font-size: 18px;
        margin-bottom: 6px;
      }
      @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 16px;
      }
    }
    &--text {
      color: $silver;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      margin-top: 40px;
      @media screen and (max-width: 1750px) {
        font-size: 15px;
        margin-top: 26px;
        line-height: 155%;
      }
      @media screen and (max-width: 1250px) {
        font-size: 14px;
        margin-top: 12px;
      }
      @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>