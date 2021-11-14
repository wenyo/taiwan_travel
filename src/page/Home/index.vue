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
          :click-func="() => scenicSpotFetch(cityKey)"
        />
      </div>
    </Banner>
    <HotNews
      :city-key="cityKey"
      :click-func="cityKeyUpdate"
      :activities="activities"
      :restaurants="restaurants"
      v-if="scenicSpotList.length === 0"
    />
    <SearchResult
      :list="scenicSpotList"
      :cityKey="cityKey"
      :text="text"
      v-else
    />
  </div>
</template>

<script>
import Banner from "./Banner";
import SearchResult from "./SearchResult";
import HotNews from "./HotNews";
import TextInput from "../../component/TextInput";
import IconButton from "../../component/IconButton";
import Select from "../../component/Select";
import { city_info, city_key } from "../../json/city";
import { getScenicSpot, getActivity, getRestaurant } from "../../api/api";

export default {
  components: {
    Banner,
    SearchResult,
    HotNews,
    TextInput,
    IconButton,
    Select,
  },
  data() {
    return {
      text: "",
      scenicSpotList: [],
      activities: [],
      restaurants:[],
      cityKey: "",
      cityOption: city_key.map((city) => {
        return { text: city_info[city].ch, value: city };
      }),
    };
  },
  mounted() {
    this.activitiesFetch();
    this.restaurantsFetch();
  },
  methods: {
    scenicSpotFetch(cityKey) {
      const cityNameEn = cityKey === "" ? "" : city_info[cityKey].en;
      getScenicSpot({
        city: cityNameEn,
        name: this.text,
      }).then((res) => (this.scenicSpotList = res));
    },
    activitiesFetch() {
      getActivity({
        city: "Taipei",
        name: this.text,
      }).then((res) => (this.activities = res));
    },
    restaurantsFetch() {
      getRestaurant({
        city: "",
        name: this.text,
      }).then((res) => (this.restaurants = res));
    },
    cityKeyUpdate(val) {
      this.cityKey = val;
      this.scenicSpotFetch(val);
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
  width: 50%;
}
.icon {
  flex-grow: 0;
  flex-shrink: 0;
}
</style>