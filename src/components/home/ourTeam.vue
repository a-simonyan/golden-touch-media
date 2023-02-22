<template>
  <div class="container">
    <div class="container__line">
      <img src="@/assets/icons/line.svg" alt="line" />
    </div>
    <div class="container__content">
      <div class="container__content--title">
        <img
          class="container__content--play"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
        <div class="container__content--title-name">Our Team</div>
        <img
          class="container__content--play second"
          src="@/assets/icons/play-music-icon.svg"
          alt="play"
        />
      </div>
      <section>
        <div class="container__content--body scrollbar">
          <div class="container__content--body-box">
            <gt-team-member
              class="container__content--body-box-member"
              v-for="teamMember in teamMembers"
              :key="teamMember.id"
              :teamMember="teamMember"
            />
          </div>
          <!-- <div class="container__content--body-pseduo-track"></div> -->
        </div>
      </section>

      <div class="container__content--body-view">
        <div class="container__content--body-vname">View All</div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import gtTeamMember from "./teamMember.vue";
import { ref } from "vue";
const teamMembers = ref([
  {
    id: 1,
    img: `${require("@/assets/images/member1.svg")}`,
    name: "Lorem Impsum",
    position: "General Manager / Director",
  },
  {
    id: 2,
    img: `${require("@/assets/images/member2.svg")}`,
    name: "Lorem Impsum",
    position: "Producer",
  },
  {
    id: 3,
    img: `${require("@/assets/images/member3.svg")}`,
    name: "Lorem Impsum",
    position: "Financial Manager",
  },
  {
    id: 4,
    img: `${require("@/assets/images/member4.svg")}`,
    name: "Lorem Impsum",
    position: "Editing / VFX",
  },
]);
</script>
  
<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #212121;
  @media screen and (max-width: 1440px) {
  }
  &__line {
    position: relative;
    @media screen and (max-width: 950px) {
      display: none;
    }
    img {
      position: absolute;
      top: 225px;
      width: 100%;
      @media screen and (max-width: 1850px) {
        top: 50px;
      }
      @media screen and (max-width: 1225px) {
        top: 100px;
      }
    }
  }
  &__content {
    padding: 100px 120px;
    @media screen and (max-width: 1750px) {
      padding: 70px 120px;
    }
    @media screen and (max-width: 1420px) {
      padding: 70px 50px;
    }
    @media screen and (max-width: 1024px) {
      padding: 50px 0 50px 50px;
    }

    @media screen and (max-width: 550px) {
      padding: 30px 0 30px 16px;
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
        padding-right: 50px;
      }
      @media screen and (max-width: 550px) {
        padding-right: 16px;
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

    &--body {
      padding: 50px 0;
      @media screen and (max-width: 1100px) {
        max-width: 100vw;
        overflow-x: scroll;
        position: relative;
        scrollbar-width: thin;
        -ms-overflow-style: none;
        padding: 50px 0 0 0;
      }

      &-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 64px;
        @media screen and (max-width: 1440px) {
          display: flex;
          padding-bottom: 10px;
          gap: 25px;
        }
        @media screen and (max-width: 550px) {
          gap: 0px;
        }
      }
      &-box-member {
        @media screen and (max-width: 1440px) {
          height: 300px;
          width: 203px;
          flex-shrink: 0;
        }
        @media screen and (max-width: 550px) {
          height: 241px;
          width: 185px;
        }
      }

      &-view {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        @media screen and (max-width: 1850px) {
          margin-top: 25px;
        }
        @media screen and (max-width: 1850px) {
          margin-top: 0px;
        }
      }
      &-vname {
        text-decoration-line: underline;
        color: $gold;
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 150%;
        @media screen and (max-width: 1850px) {
          font-size: 18px;
          line-height: 150%;
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
.scrollbar::-webkit-scrollbar {
  height: 0px;
  width: 0px;

}
.scrollbar::-webkit-scrollbar:vertical {
  display: none;
}
.scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
}

.scrollbar::-webkit-scrollbar-thumb {
  height: 5px;
  background-color: $gold;
  border-radius: 11px;
  margin-top: 10px;
  width: 56px;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #f1db9d;
}
section {
  width: 100%;
}
</style>