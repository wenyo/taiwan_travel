<template>
  <div class="select">
    <div class="title" @click="optionToggle(!show)">
      {{ title }}{{modelValue}}
    </div>
    <Option
      :options="options"
      v-model="selectedIdx"
      :show="show"
      :optionToggle="optionToggle"
    />
  </div>
</template>

<script>
import Option from "./Option";

export default {
  props: {
    options: {
      type: Array[Object],
      default: [{ text: "111", value: "" }],
    },
    defaultTitle: {
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
      selectedIdx: this.modelValue,
      show: false,
    };
  },
  methods: {
    optionToggle(show) {
      this.show = show;
    },
  },
  computed: {
    title() {
      return this.modelValue === -1
        ? this.defaultTitle
        : this.options[this.modelValue].text;
    },
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
