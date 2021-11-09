<template>
  <div class="select">
    <div class="title" @click="show = !show">{{ title }}</div>
    <Option :options="options" v-model="show" />
  </div>
</template>

<script>
import Option from "./Option";

export default {
  props: {
    options: {
      type: Array[String],
      default: ["122", "999"],
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
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  cursor: pointer;

  & > div {
    border-radius: 6px;
    border: none;
    box-shadow: 0 4px 3px $basic-color-shadow;
    font-size: 18px;
    padding: 10px;
    background-color: $basic-color-white;
    width: 100%;
  }
}
</style>
