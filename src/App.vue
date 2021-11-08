<template>
  <Nav />
</template>

<script>
import { getData } from "./api/api.js";
import Nav from "./component/Nav";

export default {
  components: {
    Nav,
  },
  setup() {
    return {
      name: "Ap1p",
    };
  },
  mounted() {
    // this.getList();
  },
  methods: {
    getList() {
      getData().then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style>
.contain {
  padding: 20px;
}
</style>
