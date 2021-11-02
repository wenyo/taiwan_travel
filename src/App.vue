<template>
  <div>{{ name }}</div>
  <div>name</div>
</template>

<script>
export default {
  data() {
    return {
      name: "App",
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      const api = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON";
      this.$http.get(api).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style></style>
