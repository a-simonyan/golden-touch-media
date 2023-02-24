
<template>
  <div class="footer-container">
    <div class="footer-container__content">
      <div class="footer-container__content--body">
        <div>
          <picture>
            <source
              media="(min-width:1400px)"
              srcset="@/assets/logo/footer-logo.svg"
            />
            <img src="@/assets/logo/general-logo.svg" alt="logo" class="logo" />
          </picture>
        </div>
        <div class="footer-container__content--body-content">
          <div class="footer-container__content--body-column">
            <div class="footer-container__content--body-title">Company</div>
            <div class="divider"></div>
            <div class="footer-container__content--body-box">
              <div class="footer-container__content--body-row">
                <img src="@/assets/icons/li-icon.svg" alt="li" class="li" />
                <span>
                  <a href="#our-works"> Our Works </a>
                </span>
              </div>
              <div class="footer-container__content--body-row">
                <img src="@/assets/icons/li-icon.svg" alt="li" class="li" />
                <span>
                  <a href="#our-team"> Our Team </a>
                </span>
              </div>
            </div>
          </div>
          <div class="footer-container__content--body-column">
            <div class="footer-container__content--body-title">
              Our Services
            </div>
            <div class="divider"></div>

            <div class="footer-container__content--body-box">
              <div class="footer-container__content--body-row">
                <img src="@/assets/icons/li-icon.svg" alt="li" class="li" />
                <span>
                  <a href="#services"> Production </a>
                </span>
              </div>
              <div class="footer-container__content--body-row">
                <img src="@/assets/icons/li-icon.svg" alt="li" class="li" />
                <span>
                  <a :href="windowWidth > 1024 ? '#services' : '#production'">
                    Processed
                  </a>
                </span>
              </div>
              <div class="footer-container__content--body-row">
                <img src="@/assets/icons/li-icon.svg" alt="li" class="li" />
                <span>
                  <a :href="windowWidth > 1024 ? '#services' : '#processed'">
                    Finished Work
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="footer-container__content--body-column">
            <div class="footer-container__content--body-title">Contact Us</div>
            <div class="divider"></div>

            <div class="footer-container__content--body-box">
              <div class="footer-container__content--body-row">
                <img src="@/assets/icons/phone-icon.svg" alt="phone" />
                <span>+0 123 456 789</span>
              </div>
              <div class="footer-container__content--body-row">
                <img src="@/assets/icons/message-icon.svg" alt="phone" />
                <span>example@gmail.com</span>
              </div>
              <div class="footer-container__content--body-row">
                <img src="@/assets/icons/location-icon.svg" alt="phone" />
                <span>Lorem ipsum, dolor</span>
              </div>
            </div>
          </div>
          <div class="footer-container__content--body-column">
            <div class="footer-container__content--body-title">Follow Us</div>
            <div class="divider"></div>

            <div class="footer-container__content--body-box">
              <div class="footer-container__content--body-social-media">
                <div class="footer-container__content--body-youtube">
                  <img src="@/assets/icons/youtube-icon.svg" alt="youtube" />
                  <span>Youtube</span>
                </div>
                <div class="footer-container__content--body-instagram">
                  <img
                    src="@/assets/icons/instagram-icon.svg"
                    alt="instagram"
                  />
                  <span>Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-container__content--footer">
        Copyright © 2022 - Golden Touch Media AS. All rights reserved.
      </div>
    </div>
  </div>
</template> 

<script setup>
import { ref, onBeforeMount } from "vue";
const windowWidth = ref(null);
onBeforeMount(() => {
  windowWidth.value = window.innerWidth;
  console.log(windowWidth.value, "width");
});
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  background-color: #212121;
  &__content {
    padding: 47px 287px 26px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1850px) {
      padding: 47px 200px 26px;
    }
    @media screen and (max-width: 1400px) {
      padding: 47px 120px 26px;
    }
    @media screen and (max-width: 1024px) {
      padding: 26px 50px;
    }
    @media screen and (max-width: 550px) {
      padding: 26px 16px;
    }
    &--body {
      border-bottom: 2px solid #424242;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 40px;
      @media screen and (max-width: 1400px) {
        flex-direction: column;
        gap: 30px;
        padding-bottom: 26px;
      }
      &-social-media {
        display: flex;
        align-items: center;
      }
      &-youtube {
        display: flex;
        align-items: center;
        span {
          display: none;
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 150%;
          margin-left: 10px;
          @media screen and (max-width: 750px) {
            display: block !important;
          }
        }
      }
      &-instagram {
        display: flex;
        align-items: center;
        span {
          display: none;
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 150%;
          margin-left: 10px;
          @media screen and (max-width: 750px) {
            display: block !important;
          }
        }
      }
      &-row {
        display: flex;
        align-items: center;
        span {
          margin-left: 8px;
          @media screen and (max-width: 750px) {
            text-align: center;
            margin-left: 0px;
          }
        }
      }
      &-title {
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 29px;
        color: $gold;
        margin-bottom: 18px;
        @media screen and (max-width: 1750px) {
          font-size: 18px;
          line-height: 24px;
        }
        @media screen and (max-width: 1400px) {
          font-size: 16px;
          line-height: 21px;
          margin-bottom: 10px;
        }
      }
      &-social-media {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
      }
      &-box {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #9c9c9c;
        display: flex;
        flex-direction: column;
        gap: 12px;
        @media screen and (max-width: 1750px) {
          font-size: 15px;
          line-height: 150%;
        }
        @media screen and (max-width: 1400px) {
          font-size: 14px;
          line-height: 150%;
        }
        @media screen and (max-width: 750px) {
          font-size: 14px;
          line-height: 150%;
          align-items: center;
          margin-top: 12px;
        }
      }
    }
    &--body-content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 160px;
      @media screen and (max-width: 1750px) {
        gap: 107px;
      }
      @media screen and (max-width: 1750px) {
        gap: 91px;
      }
      @media screen and (max-width: 1024px) {
        gap: 60px;
      }
      @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
    }

    &--body-column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media screen and (max-width: 750px) {
        align-items: center;
      }
    }
    &--footer {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $gold;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 26px;
      @media screen and (max-width: 1400px) {
        font-size: 13px;
        line-height: 150%;
        color: #626262;
      }
      @media screen and (max-width: 750px) {
        font-size: 10px;
        line-height: 150%;
        color: #626262;
      }
    }
  }
}
.logo {
  width: 181px;
  height: 156px;
  @media screen and (max-width: 1750px) {
    width: 131px;
    height: 114px;
  }
  @media screen and (max-width: 1400px) {
    width: 236px;
    height: 28px;
  }
}
.divider {
  display: none;
  height: 0px;
  border-bottom: 1px solid $gold;
  width: 50px;
}
@media screen and (max-width: 750px) {
  .li {
    display: none;
  }
  .divider {
    display: block !important;
  }
}
</style>