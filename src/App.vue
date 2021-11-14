<template>
  <Nav />
  <router-view></router-view>
</template>

<script>
import Nav from "./component/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
#app {
  background-color: $primary-color-forth;
  color: $basic-color-dark;
}

.contain {
  padding: 20px;
}

.contain-l{
    height: calc(100vh - 145px);
}

.contain-m {
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px 40px;
}

.test {
  margin: 50px;
  width: 200px;
}
</style>
