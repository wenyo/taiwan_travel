<template>
  <input
    class="input-text"
    type="text"
    :name="placeholder"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: [String],
      default: "搜尋關鍵字",
    },
    modelValue: {
      type: [String],
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border-radius: 6px;
  border: none;
  box-shadow: 0 4px 3px $basic-color-shadow;
  font-size: 18px;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
}
</style>
