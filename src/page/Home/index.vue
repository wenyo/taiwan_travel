<template>
  <Banner>
    <div class="contain">
      <img src="@/assets/img/welcome.svg" alt="" />
      <div class="margin-10">
        <TextInput v-model="text" />
        <IconButton type="gps" color="second" />
      </div>
      <div class="margin-10">
        <Select />
        <Select />
        <IconButton type="gps" color="second" />
      </div>
    </div>
  </Banner>
</template>

<script>
import Banner from "./Banner";
import TextInput from "../../component/TextInput";
import IconButton from "../../component/IconButton";
import Select from "../../component/Select";
export default {
  components: {
    Banner,
    TextInput,
    IconButton,
    Select,
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.contain {
  min-width: 300px;
  max-width: 500px;
  width: 40%;
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
}
.margin-10 {
  .select,
  .input-text {
    margin: 5px;
  }
}
.input-text {
  width: calc(100% - 40px - 10px);
}
.select {
  width: calc(50% - 20px - 10px);
}
.icon {
  position: absolute;
  top: 5px;
  right: -5px;
}
</style>
