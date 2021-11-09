<template>
  <ul>
    <li v-for="(option, idx) in options" :key="idx">{{ option }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    options: {
      type: Array[String],
      default: ["122"],
    },
  },
};
</script>
