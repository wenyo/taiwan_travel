<template>
  <nav class="contain">
    <h1>
      <router-link to="/">
        <img src="@/assets/img/logo.svg" alt="台灣旅遊景點導覽" />
        <div>Taiwain Travel 台灣旅遊景點導覽</div>
      </router-link>
    </h1>
    <ul>
      <li v-for="(route, idx) in routes" :key="idx">
        <router-link :to="route.path">
          <img :src="route.icon_img" :alt="route.text" />
          <span>{{ route.text }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from "../router";
export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $basic-color-white;
}

h1 {
  display: inline-block;
  width: 100px;

  img {
    width: 100%;
  }

  div {
    display: none;
  }
}

ul {
  display: flex;
  font-size: 14px;

  li {
    margin-left: 27px;

    .now-page span,
    &:hover span {
      border-bottom: 1px solid;
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    span {
      padding-bottom: 3px;
      transition: 0.3s;
    }

    &:first-child > a {
      color: $primary-color-master;
    }
    &:nth-child(2) > a {
      color: $primary-color-second;
    }
    &:nth-child(3) > a {
      color: $primary-color-third;
    }
  }

  img {
    height: 34px;
    margin-right: 8px;
  }
}
</style>
