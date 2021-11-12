<template>
  <div>
    <Banner>
      <div class="margin-10">
        <TextInput v-model="text" />
        <IconButton type="gps" color="second" />
      </div>
      <div class="margin-10">
        <Select default-title="類別" />
        <Select
          default-title="不分縣市"
          :options="cityOption"
          v-model="cityKey"
        />
        <IconButton
          type="search"
          color="master"
          :click-func="()=>scenicSpotFetch(cityKey)"
        />
      </div>
    </Banner>
    <List1 title="熱門城市" :city-key="cityKey" @update="cityKeyUpdate" />
    <List3 :title="viceTitle3" :list="list3" />
  </div>
</template>

<script>
import Banner from "./Banner";
import TextInput from "../../component/TextInput";
import IconButton from "../../component/IconButton";
import Select from "../../component/Select";
import List1 from "../component/List1";
import List3 from "../component/List3";
import { city_info, city_key } from "../../json/city";
import { getScenicSpot } from "../../api/api";

export default {
  components: {
    Banner,
    TextInput,
    IconButton,
    Select,
    List1,
    List3,
  },
  data() {
    return {
      text: "",
      scenicSpotList: [],
      cityKey: "",
      cityOption: city_key.map((city) => {
        return { text: city_info[city].ch, value: city };
      }),
      viceTitle3: "",
    };
  },
  computed: {
    list3() {
      return this.scenicSpotList.map((info) => {
        const { City, Name, Picture } = info;
        const hasPicture = Object.keys(info.Picture).length > 0;
        const PictureUrl = hasPicture ? Picture.PictureUrl1 : "";
        const PictureDescription = hasPicture
          ? Picture.PictureDescription1
          : "";
        return { Name, City, PictureUrl, PictureDescription };
      });
    },
  },
  methods: {
    scenicSpotFetch(cityKey) {
      const cityNameEn = cityKey === "" ? "" : city_info[cityKey].en;
      getScenicSpot({
        city: cityNameEn,
        name: this.text,
      }).then((res) => (this.scenicSpotList = res));
    },
    cityKeyUpdate(val){
      this.cityKey = val;
      this.scenicSpotFetch(val)
    }
  },
  watch: {
    scenicSpotList() {
      const cityNameCh =
        this.cityKey === "" ? "" : city_info[this.cityKey].ch;
      const keyWordList = [cityNameCh, this.text].filter(i=>i!=="");
      this.viceTitle3 = keyWordList.join(", ");
    },
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