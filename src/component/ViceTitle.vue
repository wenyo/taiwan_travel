<template>
  <div class="vice-title">
    <div v-if="type===1" class="icon triangle"></div>
    <div v-if="type===2" class="icon square"></div>
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
    type:{
      type: Number,
      default: 1
    }
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

.icon{
  margin-right: 14px;
}

.square{
  width: 20px;
  height: 20px;
  background-color: $primary-color-second;
}

.triangle {
  border-color: transparent transparent $primary-color-master transparent;
  border-style: solid solid solid solid;
  border-width: 0 14px 20px;
  height: 0px;
  width: 0px;
}

</style>