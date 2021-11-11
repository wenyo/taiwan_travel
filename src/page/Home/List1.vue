<template>
  <div>
    <ViceTitle title="熱門城市" />
    <ul>
      <li v-for="city in city_key" :key="city">
        <span>{{ city_info[city].ch }}</span>
        <div class="img">
          <img :src="city_info[city].img" :alt="city_info[city].ch" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ViceTitle from "./ViceTitle";
import { city_info, city_key } from "../../json/city";

export default {
  components: {
    ViceTitle,
  },
  data() {
    return {
      city_info,
      city_key: city_key.filter((city) => city_info[city].img),
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  height: 245px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
}

li {
  &:nth-child(3n-2) {
    height: 100%;
  }

  &:not(:nth-child(3n-2)) {
    height: 50%;
  }

  height: 100%;
  padding: 10px;
  margin: 5px;
  position: relative;
  box-shadow: 0px 4px 3px $basic-color-shadow;

  .img {
    background-color: $basic-color-dark;
    height: 100%;

    img {
      height: 100%;
      opacity: 0.8;
    }
  }

  span {
    position: absolute;
    z-index: 1;
    color: $basic-color-white;
  }
}
</style>