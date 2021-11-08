<template>
  <div class="box-container">
    <div class="shadow">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-container {
  background: cornflowerblue;
  width: 100%;
  padding: 10px;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    top: 50%;
    bottom: -15px;
    box-shadow: 0 15px 10px #777;
  }

  &::before {
    left: 10px;
  }
}
</style>
