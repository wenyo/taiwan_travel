<template>
  <div>
    <Banner>
      <div class="margin-10">
        <TextInput v-model="text" />
        <IconButton type="gps" color="second" />
      </div>
      <div class="margin-10">
        <Select default-title="類別" />
        <Select default-title="不分縣市" :options="city_option"/>
        <IconButton type="search" color="master" />
      </div>
    </Banner>
    <List1 title="熱門城市" />
  </div>
</template>

<script>
import Banner from "./Banner";
import TextInput from "../../component/TextInput";
import IconButton from "../../component/IconButton";
import Select from "../../component/Select";
import List1 from "./List1";
import { city_info, city_key } from "../../json/city";

export default {
  components: {
    Banner,
    TextInput,
    IconButton,
    Select,
    List1,
  },
  data() {
    return {
      text: "",
      city_option: city_key.map(city=> {return {text:city_info[city].ch, value:city}}),
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