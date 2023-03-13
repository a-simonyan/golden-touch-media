<template>
  <div class="conatainer">
    <div class="container__title">
      <div>What will be filmed?</div>
    </div>
    <div class="container__header--content">
      <div class="container__header--content-checkboxes">
        <div v-for="(item, index) in checkboxes" :key="index">
          <div
            class="container__header--content-row"
            @click="changeCheckboxStatus(index)"
          >
            <div class="container__header--content-checkbox">
              <img
                :src="
                  item.status
                    ? require('@/assets/icons/is-checked-checkbox.svg')
                    : require('@/assets/icons/empty-checkbox.svg')
                "
                alt="img"
              />
            </div>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <gt-input
        v-model="guestsCount"
        inputType="number"
        v-if="checkboxes[1].status"
        placeholder="Number of guests*"
        :isNumber="isNumber"
      />
    </div>
  </div>
</template>
    
    <script setup>
import { ref, defineEmits, onMounted, getCurrentInstance } from "vue";
import gtInput from "../home/gt-input.vue";
const guestsCount = ref(null);
const isNumber = ref(true);
const checkboxes = ref([
  { id: 1, name: "The wedding", status: true, price: 90000 },
  {
    id: 2,
    name: "Interview with friends, family, fiancees, etc.",
    status: false,
    price: 5000,
  },
  { id: 3, name: "The couple’s preparations", status: false, price: 20000 },
  { id: 4, name: "The party afterwards", status: false, price: 5000 },
  { id: 5, name: "Interview with the couple", status: false, price: 20000 },
  { id: 6, name: "The wedding photo session", status: false, price: 30000 },
]);
const emits = defineEmits(["updatePrice"]);
const { proxy } = getCurrentInstance();
onMounted(() => {
  proxy.emitter.on("submitModal", () => {
    emits("updatePrice", {
      price: checkboxes.value
        .filter((item) => item.status == true)
        .reduce((n, { price }) => n + price, 0),
      data: guestsCount,
      checkboxes: checkboxes.value,
    });
  });
});
const changeCheckboxStatus = (index) => {
  checkboxes.value[index].status = !checkboxes.value[index].status;
};
</script>
    
    <style lang="scss" scoped>
.container {
  width: 100%;
  &__title {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 150%;
      color: #e7e7e7;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    &--link {
      height: 40px;
      width: 85px;
      color: $gold;
      border-bottom: 2px solid $gold;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
    }
    &--upload {
      height: 40px;
      width: 130px;
      color: $gold;
      border-bottom: 2px solid $gold;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
    }
    &--content {
      margin: 40px 0 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      user-select: none;
      @media screen and (max-width: 690px) {
        margin: 20px 0 0;
      }
      &-row {
        display: flex;
        align-items: center;
        margin-top: 10px !important;
        cursor: pointer;
      }

      &-checkbox {
        width: 34px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      &-checkboxes {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-columns: 400px 650px;
        margin-bottom: 20px;
        @media screen and (max-width: 860px) {
          grid-template-columns: 250px 800px;
        }
        @media screen and (max-width: 690px) {
          grid-template-columns: repeat(1, 1fr);
        }
        img {
          margin-right: 10px;
        }
        span {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 150%;
          color: #e7e7e7;
          @media screen and (max-width: 1750px) {
            font-size: 16px;
            line-height: 150%;
          }
          @media screen and (max-width: 1250px) {
          }
          @media screen and (max-width: 550px) {
            font-size: 12px;
            line-height: 150%;
          }
        }
      }
      input {
        width: 100%;
        height: 55px;
        background: rgba(31, 31, 31, 0.65);
        border: 1px solid rgba(168, 168, 168, 0.99);
        padding-left: 24px;
        border-radius: 0 !important;
        color: #e7e7e7;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        &:focus {
          outline: none;
        }
        @media screen and (max-width: 1750px) {
          height: 56px !important;
          padding-left: 20px;
        }
        @media screen and (max-width: 1250px) {
          height: 48px !important;
        }
        @media screen and (max-width: 550px) {
          height: 38px !important;
          padding-left: 14px;
        }
      }
    }
  }
}
::placeholder {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #797979;
  @media screen and (max-width: 1750px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 14px;
  }
  @media screen and (max-width: 550px) {
    font-size: 12px;
    line-height: 150%;
  }
}
</style>