<template>
  <div>{{ name }}</div>
  <div>name</div>
</template>

<script>
import { getData } from "./api/api.js";
export default {
  setup() {
    return {
      name: "Ap1p",
    };
  },
  mounted() {
    this.getList();
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

<style></style>
