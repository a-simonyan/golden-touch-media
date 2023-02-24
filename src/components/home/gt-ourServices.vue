<template>
  <div class="services-container">
    <div class="services-container__content">
      <div class="services-container__content--title">
        <img
          class="services-container__content--play"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
        <div class="services-container__content--title-name">Our Services</div>
        <img
          class="services-container__content--play second"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
      </div>
      <div class="services-container__content--services">
        <div class="services-container__content--services-column">
          <div class="services-container__content--services-icon">
            <img src="@/assets/icons/production.svg" alt="prod" />
          </div>
          <div class="services-container__content--services-name">
            Production
          </div>
          <div class="services-container__content--services-body">
            <span class="services-container__content--services-rows"
              >We can help you with direction, photography and production
              management</span
            >
            <span class="services-container__content--services-rows"
              >We have comprehensive procedures and checklists to ensure that
              your production runs smoothly</span
            >
            <span class="services-container__content--services-rows"
              >Focus on the result and we’ll focus on how you get there</span
            >
          </div>
        </div>
        <div class="services-container__content--services-column">
          <div class="services-container__content--services-icon">
            <img src="@/assets/icons/processed.svg" alt="procesed" />
          </div>
          <div class="services-container__content--services-name">
            Processed
          </div>
          <div class="services-container__content--services-body">
            <span class="services-container__content--services-rows"
              >We can help you with scripts and content.
            </span>
            <span class="services-container__content--services-rows"
              >We arrange all resources for a production.</span
            >
            <span class="services-container__content--services-rows"
              >We plan your recording from start to finish</span
            >
          </div>
        </div>
        <div class="services-container__content--services-column">
          <div class="services-container__content--services-icon">
            <img src="@/assets/icons/finished.svg" alt="finish" />
          </div>
          <div class="services-container__content--services-name">
            Finished work
          </div>
          <div class="services-container__content--services-body">
            <span class="services-container__content--services-rows">
              We log, cut and organize the project for you.
            </span>
            <span class="services-container__content--services-rows"
              >We finalize both soundand image.</span
            >
            <span class="services-container__content--services-rows"
              >We do everything you need from visual effects.
            </span>
            <span class="services-container__content--services-rows"
              >Get your production ready for iTunes, YouTube, Instagram, TikTok,
              etc</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.services-container {
  width: 100%;
  background-color: #212121;
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
    &--services {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 83px;
      gap: 158px;
      @media screen and (max-width: 1750px) {
        margin-top: 55px;
        gap: 120px;
      }
      @media screen and (max-width: 1250px) {
        gap: 55px;
      }
      @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;
        align-items: center;
      }

      &-icon {
        width: 76px;
        height: 76px;
        background: rgba(231, 231, 231, 0.14);
        box-shadow: 0px 0px 12px rgb(231 231 231 / 8%);
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1750px) {
          width: 57px;
          height: 57px;
        }
      }

      &-body {
        display: flex;
        flex-direction: column;
      }
      &-name {
        margin-top: 22px;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 29px;
        color: $gold;
        @media screen and (max-width: 1750px) {
          font-size: 16px;
          line-height: 150%;
          margin-top: 14px;
        }
        @media screen and (max-width: 1024px) {
          margin-top: 12px;
          margin-bottom: 4px;
        }
        @media screen and (max-width: 1024px) {
          font-size: 14px;
        }
      }
      &-rows {
        margin-top: 20px;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        color: $silver;
        @media screen and (max-width: 1750px) {
          font-size: 16px;
          margin-top: 14px;
          line-height: 150%;
        }
        @media screen and (max-width: 1250px) {
          margin-top: 8px;
        }
        @media screen and (max-width: 550px) {
          font-size: 14px;
        }
      }
      &-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33.3%;
        @media screen and (max-width: 1024px) {
          width: 100% !important;
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
        color: #d6d6d6;
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