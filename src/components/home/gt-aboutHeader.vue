<template>
  <div class="container">
    <div class="container__content">
      <div class="container__content--title">Ready for a Video?</div>
      <div class="container__content--text">
        You pay nothing until the agreement and treatment have been approved by
        you.
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  background-image: url("@/assets/images/about-header.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 120px;
    width: 100%;
    @media screen and (max-width: 1420px) {
      padding: 50px 90px;
    }
    @media screen and (max-width: 1250px) {
      padding: 50px;
    }
    @media screen and (max-width: 550px) {
      padding: 16px;
    }
    &--title {
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 150%;
      color: $gold;
      @media screen and (max-width: 1750px) {
        font-size: 26px;
        line-height: 150%;
      }
      @media screen and (max-width: 1440px) {
        font-size: 26px;
        line-height: 150%;
      }
      @media screen and (max-width: 550px) {
        font-size: 16px;
        line-height: 150%;
      }
    }
    &--text {
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
      line-height: 150%;
      color: $silver;
      margin-top: 15px;
      @media screen and (max-width: 1750px) {
        font-size: 16px;
        line-height: 150%;
      }
      @media screen and (max-width: 1440px) {
        font-size: 18px;
        line-height: 152%;
        margin-top: 10px;
      }
      @media screen and (max-width: 550px) {
        font-size: 13px;
        line-height: 150%;
        margin-top: 4px;
      }
    }
  }
}
</style>