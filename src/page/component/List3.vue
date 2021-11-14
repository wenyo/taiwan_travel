<template>
  <div class="contain-m">
    <ViceTitle :title="title" :type="titleType" />
    <ul>
      <li v-for="info in lists" :key="info.ID">
        <Box>
          <div class="img">
            <img
              v-if="!!info.PictureUrl"
              :src="info.PictureUrl"
              :alt="info.PictureDescription"
            />
            <img v-else class="no-image" :src="noImage" alt="沒有圖片" />
          </div>
          <h3>{{ info.Name }}</h3>
          <div class="loctation">
            <img :src="iconMap" alt="loctation" />
            <p>{{ info.City }}</p>
          </div>
        </Box>
      </li>
    </ul>
  </div>
</template>

<script>
import Box from "../../component/Box.vue";
import ViceTitle from "../../component/ViceTitle";
import { iconMap, noImage } from "../../component/Icon.js";
import { PAGE_TYPE } from "../../util/Type";

export default {
  props: {
    page: {
      type: String,
    },
    title: {
      type: String,
    },
    lists: {
      type: Array[Object],
      default: [],
    },
  },
  components: {
    ViceTitle,
    Box,
  },
  computed: {
    titleType() {
      return PAGE_TYPE.indexOf(this.page);
    },
  },
  data() {
    return {
      iconMap,
      noImage,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
}

li {
  width: 20%;
  padding: 5px;
  margin-bottom: 30px;
  line-height: 1.3em;
  align-content: stretch;

  .box-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0 5px $basic-color-shadow;
    }
  }

  .img {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &:not(.no-image) {
        max-width: 150%;
        min-width: 100%;
        min-height: 100%;
        max-height: 120%;
      }
    }

    .no-image {
      width: 60%;
    }
  }
}

h3 {
  margin: 10px 0;
}

.loctation {
  color: $primary-color-third;
  display: inline-flex;
  align-items: center;
}
</style>