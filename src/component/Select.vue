<template>
  <div class="select">
    <div class="title">{{ title }}</div>
    <Option :options="options" />
  </div>
</template>

<script>
import Option from "./Option";

export default {
  props: {
    options: {
      type: Array[String],
      default: ["122"],
    },
    title: {
      typr: String,
      default: "請選擇",
    },
    modelValue: {
      type: Number,
      default: -1,
    },
  },
  components: {
    Option,
  },
};
</script>

<style lang="scss" scoped>
.select > div {
  border-radius: 6px;
  border: none;
  box-shadow: 0 4px 3px $basic-color-dark#{57};
  font-size: 18px;
  padding: 10px;
  background-color: $basic-color-white;
  width: 100%;
}
</style>
