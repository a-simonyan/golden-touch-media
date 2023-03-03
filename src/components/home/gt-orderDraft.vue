<template>
  <div class="container">
    <div class="container__content">
      <div class="container__content--header">
        <div class="container__content--header-title">Order Draft</div>
        <div class="container__content--header-text">
          When you send the form, we will contact you with a draft or more
          questions. You do not commit to anything until we agree on the
          concept, the agreement is written and signed and we start the work.
        </div>
      </div>
      <div class="container__content--body">
        <div class="dropdown" v-click-out-side="closeDropdown">
          <input
            type="checkbox"
            class="dropdown__switch"
            id="filter-switch"
            hidden
          />
          <label for="filter-switch" class="dropdown__options-filter">
            <ul class="dropdown__filter" role="listbox" tabindex="-1">
              <li class="dropdown__filter-selected" aria-selected="true">
                <span v-if="activeType.id" class="active-value">
                  {{ activeType.label }}
                </span>
                <span v-else class="placeholder"> Select Video Type </span>
              </li>
              <li>
                <ul class="dropdown__select">
                  <li
                    :class="{ active: activeType.id === type.id }"
                    @click="selectDropdown(type)"
                    class="dropdown__select-option"
                    role="option"
                    v-for="(type, index) in videoTipes"
                    :key="index"
                  >
                    {{ type.label }}
                  </li>
                </ul>
              </li>
            </ul>
          </label>
        </div>
        <div class="container__content--body-data">
          <gt-input
            v-for="(input, index) in inputs"
            :key="index"
            :placeholder="input.placeholder"
          />
        </div>
        <div class="container__content--body-deadline">
          <gt-input placeholder="Maximum Budget" />
          <v-date-picker :popover="{ placement: 'bottom-end' }" v-model="date">
            <template v-slot="{ inputValue, togglePopover }">
              <div @click="togglePopover()" class="datepicker-container">
                <span v-if="inputValue" class="datepicker-container--value">
                  {{ inputValue }}
                </span>
                <span v-else class="datepicker-container--placeholder">
                  Deadline
                </span>
                <img
                  src="@/assets/icons/datepicker.svg"
                  alt="datepicker"
                  class="datepicker-container--icon"
                />
              </div>
            </template>
          </v-date-picker>
        </div>
        <div class="container__content--body-description">
          <textarea
            placeholder="Briefly describe the need..."
            rows="5"
            cols="33"
            class="gt-textarea"
          ></textarea>
        </div>
        <div class="container__content--body-mincost">
          <label for="mincost">Expected Minimum Cost in kr</label>
          <input v-model="mincost" id="mincost" type="text" class="mincost" />
          <span
            >This is based on previous projects that are similar, and can vary
            significantly depending on what you want in the video. A complete
            price offer will be sent by email when the inquiry has been
            received.</span
          >
        </div>
      </div>

      <div class="container__content--submit">
        <div class="container__content--submit-btn">
          <div class="container__content--submit-left"></div>
          <button class="container__content--submit-request">
            <span class="container__content--submit-name">Request Quote</span>
          </button>
          <div class="container__content--submit-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gtInput from "@/components/home/gt-input.vue";
import { clickOutSide as vClickOutSide } from "@mahdikhashan/vue3-click-outside";

const mincost = ref(0);
const date = ref(null);
const activeType = ref({});
const videoTipes = ref([
  {
    id: 1,
    label: "Music Video",
  },
  {
    id: 2,
    label: "Educational Film",
  },
  {
    id: 3,
    label: "Advertising / Product Video",
  },
  {
    id: 4,
    label: "Interview / Portrait Video",
  },
  {
    id: 5,
    label: "Wedding Video",
  },
  {
    id: 6,
    label: "Other",
  },
]);
const inputs = ref([
  {
    id: 1,
    placeholder: "First Name*",
  },
  {
    id: 2,
    placeholder: "Last Name*",
  },
  {
    id: 3,
    placeholder: "Last Name*",
  },
]);
const closeDropdown = () => {
  document.addEventListener("click", (e) => {
    const toggle = document.querySelector(".dropdown__switch");
    const element = e.target;
    if (element == toggle) return;
    const isDropdownChild = element.closest(".dropdown__filter");
    if (!isDropdownChild) {
      toggle.checked = false;
    }
  });
};
const selectDropdown = (type) => {
  if (activeType.value.id !== type?.id) {
    activeType.value = type;
  } else {
    activeType.value = {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &--body {
      padding: 0px 235px;
      @media screen and (max-width: 1725px) {
        padding: 0 175px;
      }
      @media screen and (max-width: 1440px) {
        padding: 0 100px;
      }
      @media screen and (max-width: 1250px) {
        padding: 0 50px;
      }
      &-data {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5%;
        width: 100%;
        margin-top: 48px;
        @media screen and (max-width: 1250px) {
          display: flex !important;
          flex-direction: column !important;
          gap: 48px !important;
        }
      }
      &-deadline {
        margin-top: 48px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5%;
        @media screen and (max-width: 1250px) {
          display: flex !important;
          flex-direction: column !important;
          gap: 48px !important;
        }
      }
      &-description {
        margin-top: 48px;
      }
      &-mincost {
        margin-top: 48px;
        label {
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 150%;
          color: $silver;
        }
        span {
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 150%;
          color: #575757;
        }
      }
    }
    &--header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 107px 184px;
      @media screen and (max-width: 1725px) {
        padding: 70px 140px 40px;
      }
      @media screen and (max-width: 1250px) {
        padding: 40px 70px;
      }
      &-title {
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 53px;
        color: $gold;
        @media screen and (max-width: 1725px) {
          font-size: 26px;
          line-height: 35px;
        }
        @media screen and (max-width: 1250px) {
          font-size: 20px;
          line-height: 27px;
        }
      }
      &-text {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        color: $silver;
        margin-top: 80px;
        text-align: center;
        @media screen and (max-width: 1725px) {
          font-size: 16px;
          line-height: 160%;
          margin-top: 32px;
        }
        @media screen and (max-width: 1250px) {
          font-size: 14px;
          line-height: 154%;
          margin-top: 12px;
        }
      }
    }
    &--submit {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 82px 50px;
      &-left {
        width: 93px;
        height: 48px;
        border-top: 1.5px solid #ffffff;
        border-left: 1.5px solid #ffffff;
        position: absolute;
        left: 0;
        top: 0;
      }
      &-right {
        width: 93px;
        height: 48px;
        border-bottom: 1.5px solid #ffffff;
        border-right: 1.5px solid #ffffff;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      &-btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 304px;
        height: 89px;
      }
      &-request {
        width: 261px;
        height: 57px;
        outline: inherit;
        border: none;
        background-color: $gold;
      }
      &-name {
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
.datepicker-container {
  display: flex;
  padding-left: 34px;
  align-items: center;
  height: 62px;
  background: rgba(31, 31, 31, 0.65);
  opacity: 0.8;
  border: 1px solid rgba(168, 168, 168, 0.99);
  backdrop-filter: blur(25px);
  width: 100%;
  position: relative;
  &--icon {
    position: absolute;
    top: 17px;
    right: 30px;
  }
  &--placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #5f5f5f;
  }
  &--value {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #e7e7e7;
  }
}

.gt-textarea {
  width: 100%;
  height: 245px;
  padding: 20px 34px;
  color: $silver;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  background: rgba(31, 31, 31, 0.65);
  border: 1px solid rgba(168, 168, 168, 0.99);
}
.gt-textarea:focus {
  outline: none;
}
::placeholder {
  color: #5f5f5f;
  opacity: 1;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
}
.mincost {
  width: 100%;
  height: 62px;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(168, 168, 168, 0.99) !important;
  padding-left: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #5f5f5f;
}
.mincost:focus {
  outline: none;
}
$tablet: 100%;

@mixin breakpoint($point) {
  @if $point == untilTablet {
    @media (max-width: $tablet) {
      @content;
    }
  } @else if $point == tablet {
    @media (min-width: $tablet) {
      @content;
    }
  }
}
.dropdown {
  width: 100%;
  background: rgba(31, 31, 31, 0.65);
  border: 1px solid rgba(168, 168, 168, 0.99);

  @include breakpoint(tablet) {
    width: 600px;
  }

  &__switch:checked + &__options-filter &__select {
    transform: scaleY(1);
  }

  &__switch:checked + &__options-filter &__filter:after {
    transform: rotate(-135deg);
  }

  &__options-filter {
    width: 100%;
    cursor: pointer;
  }

  &__filter {
    list-style-type: none;
    height: 62px;
    position: relative;
    display: flex;
    width: 100%;
    transition: 0.3s;

    &-selected {
      list-style-type: none;
      font-style: normal;
      font-weight: 600 !important;
      font-size: 20px;
      line-height: 150%;
      padding: 0px 34px;
      display: flex;
      align-items: center;
      .active-value {
        color: #e7e7e7;
      }
      .placeholder {
        color: #5f5f5f;
      }
      &::after {
        border-width: 1px 1px 0px 1px;
        border-style: solid;
        border-color: #d8be69;
      }
    }
    &:focus {
      outline: none;
    }

    &::after {
      position: absolute;
      top: 45%;
      right: 20px;
      content: "";
      width: 10px;
      height: 10px;
      width: 10px;
      height: 10px;
      border-right: 2px solid #595959;
      border-bottom: 2px solid #595959;
      transform: rotate(45deg) translateX(-45%);
      transition: 0.2s ease-in-out;
    }
  }

  &__select {
    z-index: 99;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 5px;
    overflow: hidden;
    background: rgba(31, 31, 31, 0.65);
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #d8be69;
    transform: scaleY(0);
    transform-origin: top;
    font-weight: 300;
    transition: 0.2s ease-in-out;
  }

  &__select-option {
    background: #1f1f1f;

    border: 0.5px solid #474747;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: $silver;

    padding: 20px;
    transition: 0.3s;

    &:last-of-type {
      border-bottom: 0;
    }

    &:hover {
      background: #3c392f;
      color: $gold;
    }
  }
}
.active {
  background: #3c392f !important;
  color: $gold !important;
}
::v-deep {
  .vc-popover-caret {
    display: none;
  }
  .vc-popover-content.direction-bottom.vc-container {
    margin-top: 0 !important;
  }
  .vc-popover-content.direction-bottom.vc-container {
    border-radius: 0 !important;
    border: none;
    border-bottom: 1.5px solid #d8be69 !important;
  }
  .vc-pane-container {
    background: #212121;
  }
  .vc-day {
    color: #d9d9d9;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 150%;
    width: 38px !important;
    height: 38px !important;
  }
  .vc-day-content:hover {
    border-radius: 0;
    width: 38px;
    height: 38px;
    border: 1px solid #d8be69;
    background: #3c392f;
  }
  .vc-highlight {
    background-color: rgba(95, 95, 95, 0.5) !important;
    border: 1px solid #d8be69 !important;
    border-radius: 0 !important;
    width: 38px;
    height: 38px;
  }
  .vc-highlights {
    .vc-day-content.vc-focusable {
      color: $gold;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 150%;
    }
  }
  .vc-title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150% !important;
    color: #d9d9d9 !important;
  }
  .vc-weeks {
    padding-top: 25px !important;
  }
}
</style>