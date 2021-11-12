<template>
  <div class="contain-m">
    <ViceTitle :title="title" />
    <ul>
      <template v-for="(city, idx) in city_key" :key="city">
        <li @click="$emit('update', city)" v-if="idx < city_key.length / 2">
          <h4>
            <img :src="iconMapM" alt="地標圖示" />
            <span>{{ city_info[city].ch }}</span>
          </h4>
          <div class="img">
            <img :src="city_info[city].img" :alt="city_info[city].ch" />
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import ViceTitle from "../../component/ViceTitle";
import { city_info, city_key } from "../../json/city";
import { iconMapM } from "../../component/Icon";

export default {
  props: {
    title: {
      type: String,
      default: "副標題",
    },
    cityKey: {
      type: String,
      default: "",
    },
  },
  components: {
    ViceTitle,
  },
  data() {
    return {
      iconMapM,
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
  align-content: stretch;
  justify-content: space-between;
}

li {
  width: calc(20% - 10px);
  height: 100%;
  padding: 10px;
  margin: 5px;
  position: relative;
  box-shadow: 0px 4px 3px $basic-color-shadow;
  cursor: pointer;

  &:nth-child(3n-2) {
    height: 100%;
  }

  &:not(:nth-child(3n-2)) {
    height: calc(50% - 10px);
  }

  &:hover > .img img {
    opacity: 1;
  }

  .img {
    background-color: $basic-color-dark;
    height: 100%;
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      opacity: 0.5;
      transition: 0.3s;
      max-width: 150%;
      min-width: 100%;
      min-height: 100%;
      max-height: 120%;
    }
  }

  h4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: $basic-color-white;
  }
}
</style>