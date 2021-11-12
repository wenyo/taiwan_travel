<template>
  <div class="vice-title">
    <div class="triangle"></div>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "副標題",
    },
  },
};
</script>

<style lang="scss" scoped>

.vice-title{
    display: inline-flex;
    align-items: flex-end;
    font-size: 20px;
    margin-bottom: 20px;
}

.triangle {
  border-color: transparent transparent $primary-color-master transparent;
  border-style: solid solid solid solid;
  border-width: 0 14px 20px;
  height: 0px;
  width: 0px;
  margin-right: 14px;
}

</style>