<template>
  <div class="select">
    <div class="title" @click="optionToggle(!show)">
      {{ title }}
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
      type: String,
      default: "",
    },
  },
  components: {
    Option,
  },
  data() {
    return {
      selectedIdx: this.selectedIdxChangeByModleValue(),
      show: false,
    };
  },
  methods: {
    optionToggle(show) {
      this.show = show;
    },
    selectedIdxChangeByModleValue() {
      return this.options.findIndex(
        (option) => option.value === this.modelValue
      );
    },
  },
  computed: {
    title() {
      return this.selectedIdx === -1
        ? this.defaultTitle
        : this.options[this.selectedIdx].text;
    },
  },
  watch: {
    selectedIdx() {
      this.$emit("update:modelValue", this.options[this.selectedIdx].value);
    },
    modelValue() {
      this.selectedIdx = this.selectedIdxChangeByModleValue();
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
