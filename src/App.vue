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
  padding: 20px 100px;
}

.test {
  margin: 50px;
  width: 200px;
}
</style>
