<template>
  <ul v-if="show" :class="{ scroll: options.length > 7 }">
    <li
      v-for="(option, idx) in options"
      :class="{ selected: modelValue === idx }"
      :key="idx"
      @click="optionChoese(idx)"
    >
      {{ option.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    options: {
      type: Array[Object],
      default: [{ text: "111", value: "" }],
    },
    modelValue: {
      type: Number,
      default: -1,
    },
    show: {
      type: Boolean,
      default: false,
    },
    optionToggle: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    optionChoese(idx) {
      this.$emit("update:modelValue", idx);
      this.optionToggle(false);
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: $basic-color-shadow;
}
ul {
  position: absolute;
  max-height: 200px;
  top: calc(100% - 10px);
  right: 0;
  left: 0;
  border-radius: 0 0 6px 6px;
  box-shadow: 3px 3px 3px $basic-color-shadow;
  background-color: $basic-color-white;
  padding-top: 5px;
  font-size: 18px;

  &.scroll {
    overflow-y: scroll;
  }
}

li {
  width: 100%;
  padding: 5px 10px;
  cursor: pointer;
  word-spacing: 5px;

  &:hover,
  &.selected {
    background-color: $basic-color-grey;
  }
}
</style>
