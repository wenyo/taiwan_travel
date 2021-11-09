<template>
  <button :class="colors[color]" class="icon">
    <img :src="icon[type]" alt="" />
  </button>
</template>

<script>
import iconGPS from "../assets/img/Icon/GPS.svg";
import iconSearch from "../assets/img/Icon/search.svg";
import iconPrevious from "../assets/img/Icon/previous.svg";

const icon = {
  gps: iconGPS,
  search: iconSearch,
  previous: iconPrevious,
};

const colors = {
  master: "primary-color-master",
  second: "primary-color-second",
  third: "primary-color-third",
  white: "basic-color-white",
  dark: "basic-color-dark",
};

export default {
  props: {
    type: {
      type: [String],
      default: Object.keys(icon)[0],
    },
    color: {
      type: [String],
      default: "master",
    },
  },
  data() {
    return {
      icon,
      colors,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  border: unset;
  background-color: unset;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }

  &.primary-color-master {
    background-color: $primary-color-master;
  }
  &.primary-color-second {
    background-color: $primary-color-second;
  }
  &.primary-color-third {
    background-color: $primary-color-third;
  }
  &.basic-color-white {
    background-color: $basic-color-white;
  }
  &.basic-color-dark {
    background-color: $basic-color-dark;
  }
}
</style>
