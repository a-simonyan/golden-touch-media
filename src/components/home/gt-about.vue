<template>
  <div class="container">
    <div class="container__title">
      Visma Uses Golden Touch Media Training videos as a tool
    </div>
    <div class="container__content">
      <div class="container__content--video">
        <img
          src="@/assets/images/hilde.svg"
          alt="img"
          class="container__content--video-param"
        />
      </div>
      <div class="container__content--about">
        <div class="container__content--about-text">
          Via the portal veilederen.no, VISMA uses SmartSkill films as part of
          the training. Films create emotions and impressions in a way that
          academic texts alone cannot. By giving the recipient audiovisual aids
          AND feelings about a topic, you ensure that the knowledge is fixed on
          a deeper and more level, and it is easier for you to remember the
          information you are supposed to learn.
        </div>
        <div class="container__content--about-text">
          You can also get professional training videos which, in the long term,
          will make the training faster, more efficient and thus also cheaper.
          Training of customers, suppliers, employees etc. is the key to an
          efficient everyday life.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  padding-top: 120px;
  width: 100%;
  &__title {
    padding: 30px 120px;
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 47px;
    color: $gold;
    background: rgba(33, 33, 33, 0.66);
    @media screen and (max-width: 1750px) {
      font-size: 26px;
      line-height: 35px;
    }
    @media screen and (max-width: 1420px) {
      padding: 30px 90px;
    }
    @media screen and (max-width: 1250px) {
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      padding: 30px 50px;
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
      line-height: 150%;
    }
  }
  &__content {
    padding: 100px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    @media screen and (max-width: 1750px) {
      padding: 70px 120px;
      gap: 52px;
    }
    @media screen and (max-width: 1420px) {
      padding: 70px 90px;
    }
    @media screen and (max-width: 1250px) {
      padding: 70px 50px;
    }
    @media screen and (max-width: 880px) {
      flex-direction: column;
      gap: 25px;
    }
    @media screen and (max-width: 550px) {
      padding: 30px 16px;
    }
    &--video {
      &-param {
        width: 754px;
        height: 398px;
        @media screen and (max-width: 1750px) {
          width: 567px;
          height: 299px;
        }
        @media screen and (max-width: 1250px) {
          width: 314px;
          height: 166px;
        }
        @media screen and (max-width: 550px) {
          width: 288px;
          height: 152px;
        }
      }
    }
    &--about {
      display: flex;
      flex-direction: column;
      gap: 40px;
      @media screen and (max-width: 1750px) {
        gap: 32px;
      }
      @media screen and (max-width: 1250px) {
        gap: 10px;
      }
      &-text {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: #fff;
        @media screen and (max-width: 1750px) {
          font-size: 16px;
          line-height: 150%;
        }
        @media screen and (max-width: 1250px) {
          font-size: 14px;
          line-height: 160%;
        }
        @media screen and (max-width: 880px) {
          text-align: center;
        }
        @media screen and (max-width: 550px) {
          font-size: 12px;
          line-height: 155%;
        }
      }
    }
  }
}
</style>