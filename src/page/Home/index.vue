<template>
  <div>
  <Banner>
    <div class="margin-10">
      <TextInput v-model="text" />
      <IconButton type="gps" color="second" />
    </div>
    <div class="margin-10">
      <Select />
      <Select />
      <IconButton type="search" color="master" />
    </div>
  </Banner>
  <List1 title="熱門城市"/>
  </div>
</template>

<script>
import Banner from "./Banner";
import TextInput from "../../component/TextInput";
import IconButton from "../../component/IconButton";
import Select from "../../component/Select";
import List1 from "./List1";
export default {
  components: {
    Banner,
    TextInput,
    IconButton,
    Select,
    List1
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>
<style lang="scss" scoped>
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