<template>
  <Box>
    <div class="slot-container">
      <div class="contain">
        <img src="@/assets/img/welcome.svg" alt="welcome" />
        <p>台北、台中、台南、屏東、宜蘭……遊遍台灣</p>
        <slot />
      </div>
    </div>
  </Box>
</template>

<script>
import Box from "../../component/Box";
export default {
  components: {
    Box,
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

.contain {
  min-width: 300px;
  max-width: 500px;
  width: 40%;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  p {
    color: $basic-color-white;
    margin-bottom: 5px;
  }
}

</style>
