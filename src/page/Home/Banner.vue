<template>
  <Box>
    <div class="slot-container">
      <slot />
    </div>
  </Box>
</template>

<script>
import Box from "../../component/Box";
export default {
  components: {
    Box,
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.box-container {
  margin-bottom: 20px;
}

.slot-container {
  height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("~@/assets/img/1-bg-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
