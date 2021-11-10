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
        <IconButton type="search" color="master" />
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
}
.margin-10 {
  width: 100%;
  display: flex;
  align-items: top;

  .select,
  .input-text,
  .icon {
    margin: 3px;
  }
}
.input-text {
  flex-grow: 1;
}
.select {
  flex-grow: 1;
}
.icon {
  flex-grow: 0;
  flex-shrink: 0;
}
</style>
