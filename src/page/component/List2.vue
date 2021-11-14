<template>
  <div class="contain-m">
    <ViceTitle :title="title" :type="titleType" />
    <ul>
      <li v-for="list in lists" :key="list.ID">
        <Box>
          <div class="img">
            <img
              v-if="!!list.PictureUrl"
              :src="list.PictureUrl"
              :alt="list.PictureDescription"
            />
            <img v-else class="no-image" :src="noImage" alt="沒有圖片" />
          </div>
          <div class="article">
            <h4>{{ list.Name }}</h4>
            <p>{{ list.Description }}</p>
            <div class="info">
              <div>
                <img :src="iconMap" alt="地點圖示" />
                <div>{{ list.City }}</div>
              </div>
              <Button text="活動詳情" />
            </div>
          </div>
        </Box>
      </li>
    </ul>
  </div>
</template>

<script>
import ViceTitle from "../../component/ViceTitle";
import Box from "../../component/Box";
import Button from "../../component/Button";
import { iconMap, noImage } from "../../component/Icon.js";

export default {
  components: {
    ViceTitle,
    Box,
    Button,
  },
  props: {
    titleType: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
    },
    lists: {
      type: Array[Object],
      default: [],
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
  justify-content: space-between;
}

li {
  width: 48%;
  margin-bottom: 20px;

  .box-container {
    display: flex;
    align-content: stretch;
    word-break: break-all;
  }

  .img {
    position: relative;
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    background-color: bisque;
    overflow: hidden;
    margin-right: 5%;

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
      width: 40%;
    }
  }
}

.article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  h4 {
    font-size: 16px;
    line-height: 20px;
    min-height: 40px;
    margin-bottom: 14px;
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 5;
    color: $primary-color-five;
    font-size: 14px;
    line-height: 16px;
  }
  .info {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;
    }
  }
}
</style>