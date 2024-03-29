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

      <div v-if="!completedOrder" class="container__content--body">
        <div
          class="dropdown"
          :class="{
            'select-dropdown': isSelectedDropdown,
            error: !validDropdown,
          }"
        >
          <input
            type="checkbox"
            class="dropdown__switch"
            id="filter-switch"
            hidden
          />
          <label for="filter-switch" class="dropdown__options-filter">
            <ul
              class="dropdown__filter"
              role="listbox"
              tabindex="-1"
              :class="{ selected: isSelectedDropdown }"
              @click="dropdownSelected"
            >
              <li class="dropdown__filter-selected" aria-selected="true">
                <span v-if="activeType.id" class="active-value">
                  {{ activeType.label }}
                </span>
                <span
                  v-else
                  class="placeholder"
                  :class="{ 'select-dropdown': isSelectedDropdown }"
                >
                  Select Video Type
                </span>
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
        <div class="error-container">
          <span v-if="!validDropdown" class="error-message">{{
            dropdownErrorMessage
          }}</span>
        </div>
        <div class="container__content--body-data">
          <gt-input
            v-for="(input, index) in inputs"
            :key="index"
            v-model="data[input.name]"
            :placeholder="input.placeholder"
            :validation="v$[input.name].$silentErrors"
          />
        </div>
        <div class="container__content--body-deadline">
          <gt-input
            placeholder="Maximum Budget"
            inputType="number"
            v-model="data.maxBudget"
            :isNumber="isNumber"
          />
          <v-date-picker
            :popover="{ placement: 'bottom-end' }"
            v-model="data.date"
          >
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
            v-model="data.description"
          ></textarea>
        </div>
        <div class="container__content--body-mincost">
          <label for="mincost">Expected Minimum Cost in kr</label>
          <input readonly v-model="data.mincost" id="mincost" class="mincost" />
          <span
            >This is based on previous projects that are similar, and can vary
            significantly depending on what you want in the video. A complete
            price offer will be sent by email when the inquiry has been
            received.</span
          >
        </div>
      </div>
      <div
        v-if="completedOrder"
        class="container__content--success"
        id="success"
      >
        <div class="container__content--success-content">
          <span>
            Thank you for your inquiry. We will send you an offer as soon as we
            have seen this.
          </span>
        </div>
      </div>
      <div v-if="!completedOrder" class="container__content--submit">
        <div class="container__content--submit-btn">
          <div class="container__content--submit-left"></div>
          <button
            :disabled="isDisabled"
            class="container__content--submit-request"
            :class="{ 'disabled-btn': isDisabled }"
          >
            <span class="container__content--submit-name" @click="order"
              >Request Quote</span
            >
          </button>
          <div class="container__content--submit-right"></div>
        </div>
      </div>
    </div>
    <gt-modal ref="customModal" :width="modalWidth" v-model="showModal">
      <template #modalContent>
        <component @updatePrice="updatePrice" :is="activeType.component" />
      </template>
    </gt-modal>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  getCurrentInstance,
  onMounted,
  nextTick,
} from "vue";
import gtInput from "@/components/home/gt-input.vue";
import gtModal from "@/components/global/gt-modal.vue";
import musicVideo from "@/components/modals/music-video.vue";
import educationalVideo from "@/components/modals/educational-video.vue";
import productVideo from "@/components/modals/product-video.vue";
import otherVideo from "@/components/modals/other-video.vue";
import weddingVideo from "@/components/modals/wedding-video.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import axios from "axios";

const customModal = ref(null);
const completedOrder = ref(false);
const isNumber = ref(true);

const data = reactive({
  videoType: {
    musicVideo: {
      link: [],
      upload: [],
    },
    educationalFilm: {
      companyName: null,
    },
    advProductVideo: {
      productName: null,
      companyName: null,
    },
    weddingVideo: {
      otherServices: null,
      guests: null,
    },
    other: {
      companyName: null,
    },
  },
  firstName: null,
  lastName: null,
  email: null,
  date: null,
  maxBudget: null,
  description: null,
  mincost: null,
});
const orderData = ref({
  type: "",
  last_name: "",
  email: "",
  first_name: "",
  max_budget: 0,
  deadline: "",
  description: "",
  min_cost: 0,
  company_name: "",
  music_file: null,
  music_link: "",
  product_name: "",
  artist_of_band: "",
  wedding_videos: {
    wedding: false,
    couples_preparations: false,
    couple_interview: false,
    friends_interview: false,
    afterwards_party: false,
    photo_session: false,
  },
  number_of_guests: null,
});
const validDropdown = ref(true);
const dropdownErrorMessage = ref(
  "You must select a type of video to submit the form."
);
const activeType = ref({});
const isSelectedDropdown = ref(false);
const showModal = ref(false);
const modalWidth = ref(900);
const videoTipes = ref([
  {
    id: 1,
    label: "Music Video",
    component: musicVideo,
  },
  {
    id: 2,
    label: "Educational Film",
    component: educationalVideo,
  },
  {
    id: 3,
    label: "Advertising / Product Video",
    component: productVideo,
  },

  {
    id: 5,
    label: "Wedding Video",
    component: weddingVideo,
  },
  {
    id: 6,
    label: "Other",
    component: otherVideo,
  },
]);
const inputs = ref([
  {
    id: 1,
    placeholder: "First Name*",
    name: "firstName",
  },
  {
    id: 2,
    placeholder: "Last Name*",
    name: "lastName",
  },
  {
    id: 3,
    placeholder: "Email*",
    name: "email",
  },
]);

const rules = computed(() => ({
  firstName: {
    required: helpers.withMessage("First name must be filled in.", required),
  },
  lastName: {
    required: helpers.withMessage("Last name must be filled in.", required),
  },
  email: {
    required: helpers.withMessage("Email address must be filled in.", required),
    email: helpers.withMessage("Email address is invalid.", email),
  },
}));
const v$ = useVuelidate(rules, data);

const isDisabled = computed(() => {
  let disabled = false;
  Object.keys(v$.value).forEach((el) => {
    if (Object.keys(data).includes(el)) {
      if (v$.value[el].$invalid) {
        disabled = true;
      }
    }
  });
  if (!Object.values(activeType.value).length) disabled = true;
  return disabled;
});

const { proxy } = getCurrentInstance();

const updatePrice = (res) => {
  if (orderData.value.type === "Wedding Video") {
    orderData.value.wedding_videos.wedding = res.checkboxes
      ? res.checkboxes[0].status
      : false;
    orderData.value.wedding_videos.friends_interview = res.checkboxes
      ? res.checkboxes[1].status
      : false;
    orderData.value.wedding_videos.couples_preparations = res.checkboxes
      ? res.checkboxes[2].status
      : false;
    orderData.value.wedding_videos.afterwards_party = res.checkboxes
      ? res.checkboxes[3].status
      : false;
    orderData.value.wedding_videos.couple_interview = res.checkboxes
      ? res.checkboxes[4].status
      : false;
    orderData.value.wedding_videos.photo_session = res.checkboxes
      ? res.checkboxes[5].status
      : false;
  } else {
    orderData.value.wedding_videos = null;
  }
  data.mincost = res.price;
  if (res.checkboxes) {
    data.videoType.weddingVideo.otherServices = res.checkboxes;
    data.videoType.weddingVideo.guests = res.data;
  }
  if (res.data.linkInputs) {
    data.videoType.musicVideo.upload = res.data.uploadInputs;
    data.videoType.musicVideo.link = res.data.linkInputs;
  }
  if (res.data.value && res.data.value.compName) {
    data.videoType.advProductVideo.companyName = res.data.value.compName;
    data.videoType.advProductVideo.productName = res.data.value.prodName;
  }
  if (res.data.educationalVideo) {
    data.videoType.educationalFilm.companyName = res.data.educationalVideo;
  }
  if (res.data.otherVideo) {
    data.videoType.other.companyName = res.data.otherVideo;
  }
  proxy.emitter.emit("closeDialog");
};

const order = () => {
  if (!activeType.value.component) {
    validDropdown.value = false;
  } else {
    validDropdown.value = true;
  }

  nextTick(() => {
    document.getElementById("success").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  orderRequest();
};
const orderRequest = () => {
  orderData.value.last_name = data.lastName;
  orderData.value.first_name = data.firstName;
  orderData.value.email = data.email;
  orderData.value.max_budget = +data.maxBudget;
  orderData.value.deadline = data.date;
  orderData.value.description = data.description;
  orderData.value.min_cost = data.mincost;
  orderData.value.company_name =
    orderData.value.type === "Advertising / Product Video"
      ? data.videoType.advProductVideo.companyName
      : orderData.value.type === "Educational Film"
      ? data.videoType.educationalFilm.companyName
      : data.videoType.other.companyName;
  orderData.value.music_file = data.videoType.musicVideo?.upload[0]?.model
    ? data.videoType.musicVideo?.upload[0]?.model
    : null;
  orderData.value.music_link = data.videoType.musicVideo?.link[0]?.model
    ? data.videoType.musicVideo?.link[0]?.model
    : null;
  orderData.value.product_name = data.videoType.advProductVideo.productName
    ? data.videoType.advProductVideo.productName
    : null;
  orderData.value.artist_of_band = data.videoType.musicVideo?.upload[0]?.model
    ? data.videoType.musicVideo?.upload[1]?.model
    : data.videoType.musicVideo?.link[0]?.model
    ? data.videoType.musicVideo?.link[1]?.model
    : null;
  orderData.value.number_of_guests = data.videoType.weddingVideo.guests
    ? +data.videoType.weddingVideo.guests
    : null;

  axios
    .post(
      "http://localhost:1337/api/order-videos",
      {
        data: JSON.stringify(orderData.value),
        "files.music_file": orderData.value.music_file,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => {
      if (res) {
        completedOrder.value = !completedOrder.value;
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
const dropdownSelected = () => {
  isSelectedDropdown.value = !isSelectedDropdown.value;
};
const selectDropdown = (type) => {
  orderData.value.type = type.label;
  validDropdown.value = false;
  const body = document.getElementsByTagName("body")[0];
  if (activeType.value.id !== type?.id) {
    activeType.value = type;
    showModal.value = true;
    validDropdown.value = true;
    body.style.overflowY = "hidden";
  } else {
    activeType.value = {};
    validDropdown.value = false;
  }
};
onMounted(() => {
  completedOrder.value = false;
});
</script>

<style lang="scss" scoped>
.selected {
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: $gold;
  color: $gold !important;
}
.select-dropdown {
  border: none !important;
  color: $gold !important;
}
.container {
  width: 100%;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &--body {
      z-index: 99 !important;
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
      @media screen and (max-width: 550px) {
        padding: 0 16px;
      }
      &-data {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5%;
        width: 100%;
        margin-top: 28px;
        @media screen and (max-width: 1250px) {
          margin-top: 8px;
          display: flex !important;
          flex-direction: column !important;
        }
      }
      &-deadline {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5%;
        @media screen and (max-width: 1250px) {
          display: flex !important;
          flex-direction: column !important;
        }
      }
      &-description {
        @media screen and (max-width: 1250px) {
          margin-top: 28px;
        }
      }
      &-mincost {
        margin-top: 48px;
        @media screen and (max-width: 1250px) {
          margin-top: 28px;
        }

        label {
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 150%;
          color: $silver;
          @media screen and (max-width: 1750px) {
            font-size: 16px;
            line-height: 150%;
          }

          @media screen and (max-width: 550px) {
            font-size: 12px;
            line-height: 150%;
          }
        }
        span {
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 150%;
          color: #575757;
          @media screen and (max-width: 550px) {
            font-size: 12px;
            line-height: 150%;
          }
        }
      }
    }

    &--success {
      padding: 0 120px 60px;

      @media screen and (max-width: 1750px) {
        padding: 0 120px 60px;
      }
      @media screen and (max-width: 1420px) {
        padding: 0 90px 60px;
      }
      @media screen and (max-width: 1250px) {
        padding: 0 50px 60px;
      }
      @media screen and (max-width: 550px) {
        padding: 0 16px 60px;
      }
      &-content {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: rgba(255, 255, 255, 0.05);
        opacity: 0.8;
        border: 1px solid rgba(168, 168, 168, 0.99);
        backdrop-filter: blur(25px);
        @media screen and (max-width: 1750px) {
          height: 48px;
        }
        @media screen and (max-width: 1250px) {
          height: 58px;
        }
        @media screen and (max-width: 550px) {
        }
        span {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 150%;
          color: #3caa09;
          @media screen and (max-width: 1750px) {
            font-size: 16px;
            line-height: 150%;
          }
          @media screen and (max-width: 1250px) {
            font-size: 14px;
            line-height: 150%;
          }
          @media screen and (max-width: 550px) {
            font-size: 12px;
            line-height: 150%;
          }
        }
      }
    }
    &--header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 140px;
      @media screen and (max-width: 1725px) {
        padding: 70px 140px 40px;
      }
      @media screen and (max-width: 1250px) {
        padding: 40px 50px;
      }
      @media screen and (max-width: 550px) {
        padding: 40px 16px;
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
        margin-top: 60px;
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
      @media screen and (max-width: 1250px) {
        padding: 50px;
      }
      &-left {
        width: 93px;
        height: 48px;
        border-top: 1.5px solid #ffffff;
        border-left: 1.5px solid #ffffff;
        position: absolute;
        left: 0;
        top: 0;

        @media screen and (max-width: 1250px) {
          width: 35px;
          height: 35px;
        }
      }
      &-right {
        width: 93px;
        height: 48px;
        border-bottom: 1.5px solid #ffffff;
        border-right: 1.5px solid #ffffff;
        position: absolute;
        right: 0;
        bottom: 0;

        @media screen and (max-width: 1250px) {
          width: 35px;
          height: 35px;
        }
      }
      &-btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 304px;
        height: 89px;
        @media screen and (max-width: 1250px) {
          width: 221px;
          height: 68px;
        }
        @media screen and (max-width: 550px) {
          width: 152px;
          height: 59px;
        }
      }
      &-request {
        cursor: pointer;
        width: 261px;
        height: 57px;
        outline: inherit;
        border: none;
        background-color: $gold;
        @media screen and (max-width: 1250px) {
          width: 190px;
          height: 43px;
        }
        @media screen and (max-width: 550px) {
          width: 132px;
          height: 39px;
        }
      }
      &-name {
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #171717 !important;
        @media screen and (max-width: 1250px) {
          font-size: 16px;
          line-height: 150%;
        }
        @media screen and (max-width: 550px) {
          font-size: 13px;
          line-height: 150%;
        }
      }
    }
  }
}
.datepicker-container {
  cursor: pointer;
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

  &--icon {
    position: absolute;
    top: 17px;
    right: 30px;
    cursor: pointer;
    @media screen and (max-width: 1750px) {
      top: 15px;
      right: 25px;
      width: 20px;
    }
    @media screen and (max-width: 1250px) {
      top: 12px;
      right: 25px;
      width: 15px;
    }
    @media screen and (max-width: 550px) {
      top: 10px;
      right: 15px;
      width: 12px;
    }
  }
  &--placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #5f5f5f;
    @media screen and (max-width: 1750px) {
      font-size: 16px;
      line-height: 150%;
    }

    @media screen and (max-width: 550px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
  &--value {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: $silver;
    @media screen and (max-width: 1750px) {
      font-size: 16px;
    }
    @media screen and (max-width: 1250px) {
      font-size: 14px;
    }
    @media screen and (max-width: 550px) {
      font-size: 12px;
    }
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
  border-radius: 0 !important;
  @media screen and (max-width: 1750px) {
    padding: 20px 20px;
    font-size: 16px;
  }
  @media screen and (max-width: 1750px) {
    padding: 20px 20px;
    font-size: 14px;
  }
  @media screen and (max-width: 550px) {
    padding-left: 14px !important;
    font-size: 12px;
  }
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
  @media screen and (max-width: 1750px) {
    font-size: 16px;
    line-height: 150%;
  }

  @media screen and (max-width: 550px) {
    font-size: 12px;
    line-height: 16px;
  }
}
.mincost {
  width: 100%;
  height: 62px;
  background: none;
  border: none !important;
  border-bottom: 1px solid rgba(168, 168, 168, 0.99) !important;
  border-radius: 0 !important;
  padding-left: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #5f5f5f;
  margin-bottom: 5px;
  @media screen and (max-width: 1750px) {
    font-size: 18px;
    line-height: 150%;
    height: 56px !important;
  }
  @media screen and (max-width: 1250px) {
    height: 48px !important;
    font-size: 16px;
    line-height: 150%;
  }
  @media screen and (max-width: 550px) {
    height: 38px !important;
    font-size: 15px;
    line-height: 150%;
  }
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
    @media screen and (max-width: 1750px) {
      height: 56px !important;
    }
    @media screen and (max-width: 1250px) {
      height: 48px !important;
    }
    @media screen and (max-width: 550px) {
      height: 38px !important;
    }
    &-selected {
      list-style-type: none;
      font-style: normal;
      font-weight: 600 !important;
      font-size: 20px;
      line-height: 150%;
      padding: 0px 34px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 1750px) {
        padding: 0px 20px;
      }
      @media screen and (max-width: 550px) {
        padding-left: 14px !important;
      }
      .active-value {
        color: $silver;
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
      .placeholder {
        color: #5f5f5f;
        @media screen and (max-width: 1750px) {
          font-size: 16px;
          line-height: 150%;
        }

        @media screen and (max-width: 550px) {
          font-size: 12px;
          line-height: 16px;
        }
      }
      &::after {
        border-width: 1px 1px 0px 1px;
        border-style: solid;
        border-color: $gold;
      }
    }
    &:focus {
      outline: none;
    }

    &::after {
      position: absolute;
      top: 37%;
      right: 20px;
      content: "";
      width: 10px !important;
      height: 10px !important;
      border-right: 2px solid $silver;
      border-bottom: 2px solid $silver;
      transform: rotate(45deg) translateX(-45%);
      transition: 0.2s ease-in-out;
      @media screen and (max-width: 550px) {
        right: 15px;
        width: 7px !important;
        height: 7px !important;
        border-right: 1px solid $silver;
        border-bottom: 1px solid $silver;
      }
    }
  }

  &__select {
    z-index: 99;
    position: absolute;
    top: 100%;
    left: -1.5px;
    width: calc(100% + 2.5px);
    overflow: hidden;
    background: rgba(31, 31, 31, 0.65);
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: $gold;
    transform: scaleY(0);
    transform-origin: top;
    font-weight: 300;
    transition: 0.2s ease-in-out;
    &:focus-visible {
      border: none !important;
    }
  }

  &__select-option {
    background: #1f1f1f;
    border: 0.5px solid #474747;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: $silver;

    padding: 20px 34px;
    transition: 0.3s;

    @media screen and (max-width: 1750px) {
      padding: 15px 20px !important;
      font-size: 16px;
      line-height: 150%;
    }
    @media screen and (max-width: 1250) {
      font-size: 14px 34px !important;
      line-height: 150%;
    }
    @media screen and (max-width: 550px) {
      padding: 10px 14px !important;
      font-size: 12px;
      line-height: 150%;
    }

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
    border-bottom: 1.5px solid $gold !important;
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
    border: 1px solid $gold;
    background: #3c392f;
  }
  .vc-highlight {
    background-color: rgba(95, 95, 95, 0.5) !important;
    border: 1px solid $gold !important;
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
  .vc-arrow:hover {
    background-color: #212121;
  }
  .vc-nav-popover-container {
    background-color: #212121;
    border: 1px solid $gold;
    color: #d9d9d9;
    border-radius: 0;
  }
  .vc-nav-title:hover,
  .vc-nav-arrow:hover {
    background-color: #212121;
  }
  .vc-nav-item.is-active {
    border-radius: 0;
    background-color: #3c392f;
    border: 1px solid $gold;
    color: #d9d9d9;
  }
  .vc-nav-item:hover {
    background-color: #3c392f;
    border: 1px solid $gold;
    color: #d9d9d9;
    border-radius: 0;
  }
  .vc-nav-item:focus {
    border: none !important;
  }
  .vc-nav-item.is-current {
    border: none !important;
  }
  .vc-nav-title:focus,
  .vc-nav-title:focus,
  .vc-nav-arrow:focus {
    border: none !important;
  }
  .vc-popover-content.direction-top.vc-container {
    display: block !important;
    border: none;
    border-radius: 0;
    border-bottom: 1.5px solid $gold;
  }
}
.error {
  border: 1px solid #c2041b !important;
  backdrop-filter: blur(25px) !important;
}
.error-message {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #c2041b;
}
.error-container {
  height: 20px;
}
.disabled-btn {
  background-color: #3c392f !important;
  cursor: default !important;
  pointer-events: none;
}
</style>