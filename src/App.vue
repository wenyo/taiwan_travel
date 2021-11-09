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

<style>
.contain {
  padding: 20px;
}
.test {
  margin: 50px;
  width: 200px;
}
</style>
