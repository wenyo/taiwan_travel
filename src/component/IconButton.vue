<template>
  <button
    :class="`${colors[color]} size-${size}`"
    class="icon"
    @click="clickFunc"
  >
    <img :src="icon[type]" alt="" />
  </button>
</template>

<script>
import { iconGPS, iconSearch, iconPrevious1, iconNext1 } from "./Icon.js";

const icon = {
  gps: iconGPS,
  search: iconSearch,
  previous: iconPrevious1,
  next: iconNext1,
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
      type: String,
      default: Object.keys(icon)[0],
    },
    color: {
      type: String,
      default: "master",
    },
    size: {
      type: String,
      default: "l",
    },
    clickFunc: {
      type: Function,
      default: () => {},
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
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 3px $basic-color-shadow;
  cursor: pointer;

  &.size-l {
    width: 40px;
    height: 40px;
  }

  &.size-m {
    width: 32px;
    height: 32px;
  }

  &:hover {
    box-shadow: 1px 1px 3px $basic-color-shadow inset;
  }

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

    &:hover {
      box-shadow: 1px 1px 3px $basic-color-white inset;
    }
  }
}
</style>
