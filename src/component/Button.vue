<template>
  <button @click="clickFunc">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button",
    },
    clickFunc: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: $basic-color-white;
  border: 1px solid $primary-color-master;
  border-radius: 8px;
  padding: 10px;
  min-width: 120px;
  color: $primary-color-master;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: $primary-color-master;
    color: $basic-color-white;
  }
}
</style>