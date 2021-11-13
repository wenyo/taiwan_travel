<template>
  <Nav />
  <Home />
</template>

<script>
import Nav from "./component/Nav";
import Home from "./page/Home";

export default {
  components: {
    Nav,
    Home,
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
