<template>
  <div class="box-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.box-container {
  background-color: $basic-color-white;
  width: 100%;
  position: relative;
  padding: 20px;
  margin: 0 auto;

  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    width: 45%;
    max-width: 400px;
    top: 90%;
    bottom: 15px;
    box-shadow: 0 15px 10px $basic-color-shadow;
  }

  &::before {
    left: 3px;
    transform: rotate(-3deg);
  }

  &::after {
    right: 3px;
    left: auto;
    transform: rotate(3deg);
  }
}
</style>
