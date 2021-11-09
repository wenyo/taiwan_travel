<template>
  <ul v-if="modelValue">
    <li v-for="(option, idx) in options" :key="idx">{{ option }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    options: {
      type: Array[String],
      default: ["1272", "999"],
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  position: absolute;
  top: calc(100% - 10px);
  right: 0;
  left: 0;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
  box-shadow: 3px 3px 3px $basic-color-shadow;
  background-color: $basic-color-white;
  padding-top: 5px;
}

li {
  width: 100%;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: $basic-color-grey;
  }
}
</style>
