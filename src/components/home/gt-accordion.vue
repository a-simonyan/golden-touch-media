<template>
  <div class="card" v-for="item in items" :key="item.id">
    <div class="card-header" @click.prevent="toggleExpand(item)">
      <span class="card-title" :class="{ 'open-accord': item.isExpand }">{{
        item.title
      }}</span>
      <div class="icon">
        <img
          v-if="!item.isExpand"
          src="@/assets/icons/plus-icon.svg"
          alt="plus"
          class="plus-minus"
        />
        <img
          v-else
          src="@/assets/icons/minus-icon.svg"
          alt="plus"
          class="plus-minus"
        />
      </div>
    </div>

    <div
      class="card-body"
      :ref="'content' + item.id"
      :style="[item.isExpand ? { height: item.computedHeight } : {}]"
    >
      <div class="card-content">
        <div height="125px">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id. Proin vitae ipsum id quam pretium ultricies. Praesent aliquet maximuPellentesque et pulvinar risus. Mauris id iaculis velit. Sed rutrum euismod arcu ut mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi lectus odio, aliquet egetmi eget, placerat interdum ex. Donec et mi placerat, volutpat risus vitae, pulvinar quam",
          isExpand: false,
          computedHeight: 125,
        },
        {
          id: 2,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id. Proin vitae ipsum id quam pretium ultricies. Praesent aliquet maximuPellentesque et pulvinar risus. Mauris id iaculis velit. Sed rutrum euismod arcu ut mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi lectus odio, aliquet egetmi eget, placerat interdum ex. Donec et mi placerat, volutpat risus vitae, pulvinar quam",
          isExpand: false,
          computedHeight: 125,
        },
        {
          id: 3,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id. Proin vitae ipsum id quam pretium ultricies. Praesent aliquet maximuPellentesque et pulvinar risus. Mauris id iaculis velit. Sed rutrum euismod arcu ut mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi lectus odio, aliquet egetmi eget, placerat interdum ex. Donec et mi placerat, volutpat risus vitae, pulvinar quam",

          isExpand: false,
          computedHeight: 0,
        },
        {
          id: 4,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis sem, tristique ut elementum id. Proin vitae ipsum id quam pretium ultricies. Praesent aliquet maximuPellentesque et pulvinar risus. Mauris id iaculis velit. Sed rutrum euismod arcu ut mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi lectus odio, aliquet egetmi eget, placerat interdum ex. Donec et mi placerat, volutpat risus vitae, pulvinar quam",
          isExpand: false,
          computedHeight: 0,
        },
      ],
    };
  },
  methods: {
    toggleExpand(item) {
      item.isExpand = !item.isExpand;
    },
    getComputedHeight() {
      this.items.forEach((item) => {
        var content = this.$refs["content" + item.id][0];

        content.style.height = "auto";
        content.style.position = "absolute";
        content.style.visibility = "hidden";
        content.style.display = "block";

        var height = getComputedStyle(content).height;
        item.computedHeight = height;

        content.style.height = 0;
        content.style.position = null;
        content.style.visibility = null;
        content.style.display = null;
      });
    },
  },
  mounted() {
    this.getComputedHeight();
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  margin: 8px 0;
  padding: 0 10px;
  border-top: 1.5px solid #424242;
}

.card-header,
.card-content {
  margin: 25px 0 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: $silver;
}
.card-content {
  padding: 0 0 25px;
}
.card-header {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.card-title {
  font-style: normal;
  font-weight: 400 !important;
  font-size: 20px;
  line-height: 150%;
  color: $silver;
}

.card-body {
  height: 0;
  overflow: hidden;
  transition: 0.3s;
}

.icon {
  float: right;
  padding-right: 25px;
}
.plus-minus {
  width: 22px;
  height: 22px;
}
.open-accord {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #d8be69;
}
@media screen and (max-width: 1750px) {
  .card-title,
  .card-content {
    font-size: 15px;
    line-height: 150%;
  }
  .plus-minus {
    width: 17px;
    height: 17px;
  }
}
@media screen and (max-width: 1250px) {
  .card-title,
  .card-content {
    font-size: 14px;
    line-height: 150%;
  }
  .plus-minus {
    width: 16px;
    height: 16px;
  }
}
@media screen and (max-width: 800px) {
  .card-title,
  .card-content {
    font-size: 11px;
    line-height: 150%;
  }
  .plus-minus {
    width: 11px;
    height: 11px;
  }
  .icon {
    padding-right: 15px;
  }
}
</style>