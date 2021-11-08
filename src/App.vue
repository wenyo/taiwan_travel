<template>
  <Nav />
  <Box>
    <div>Taiwain</div>
  </Box>
</template>

<script>
import Nav from "./component/Nav";
import Box from "./component/Box";

export default {
  components: {
    Nav,
    Box,
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
