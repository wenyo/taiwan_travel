<template>
  <div>
    <Banner :page="page">
      <div class="margin-10">
        <TextInput v-model="text" />
        <IconButton type="gps" color="second" />
      </div>
      <div class="margin-10">
        <Select
          default-title="類別"
          :options="searchType"
          v-model="searchTypeKey"
        />
        <Select
          default-title="不分縣市"
          :options="cityOption"
          v-model="cityKey"
        />
        <IconButton type="search" color="master" :click-func="searchClick" />
      </div>
    </Banner>
    <HotNews
      :city-key="cityKey"
      :click-func="cityKeyUpdate"
      :activities="activities"
      :restaurants="restaurants"
      v-if="searchResult.length === 0"
    />
    <SearchResult
      :page="page"
      :lists="searchResult"
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
import { PAGE_TYPE, SEARCH_TYPE } from "../../util/Type";
import { city_info, city_key } from "../../json/city";
import {
  getScenicSpot,
  getActivity,
  getRestaurant,
  getHotel,
} from "../../api/api";

const ONE_PAGE_ITEMS = 30;

export default {
  components: {
    Banner,
    SearchResult,
    HotNews,
    TextInput,
    IconButton,
    Select,
  },
  props: {
    page: {
      type: String,
      default: PAGE_TYPE[1],
    },
  },
  data() {
    return {
      text: "",
      searchResult: [],
      activities: [],
      restaurants: [],
      cityKey: "",
      searchTypeKey: "",
      cityOption: city_key.map((city) => {
        return { text: city_info[city].ch, value: city };
      }),
    };
  },
  computed: {
    searchType() {
      switch (this.page) {
        case PAGE_TYPE[0]:
          return SEARCH_TYPE.slice(0, 2);
        case PAGE_TYPE[1]:
          return SEARCH_TYPE.slice(2, 4);
        default:
          break;
      }
      return SEARCH_TYPE;
    },
  },
  mounted() {
    this.activitiesFetch({
      cityKey: city_key[0],
      text: this.text,
      count: 4,
      callback: this.activitiesSet,
    });
    this.restaurantsFetch({
      cityKey: city_key[9],
      text: this.text,
      count: 10,
      callback: this.restaurantsSet,
    });
  },
  methods: {
    searchClick() {
      let param = {
        cityKey: this.cityKey,
        text: this.text,
        count: ONE_PAGE_ITEMS,
        callback: this.searchResultSet,
      };
      switch (this.searchTypeKey) {
        case SEARCH_TYPE[0].value:
          this.scenicSpotFetch(param);
          break;
        case SEARCH_TYPE[1].value:
          this.activitiesFetch(param);
          break;
        case SEARCH_TYPE[2].value:
          this.restaurantsFetch(param);
          break;
        case SEARCH_TYPE[3].value:
          this.hotelsFetch(param);
          break;
        default:
          if (this.page === PAGE_TYPE[0]) {
            this.scenicSpotFetch(param);
          } else {
            this.restaurantsFetch(param);
          }
          break;
      }
    },
    searchResultSet(res) {
      this.searchResult = res;
    },
    activitiesSet(res) {
      this.activities = res;
    },
    restaurantsSet(res) {
      this.restaurants = res;
    },
    scenicSpotFetch({ cityKey, text, count, callback }) {
      const cityNameEn = cityKey === "" ? "" : city_info[cityKey].en;
      getScenicSpot({
        city: cityNameEn,
        name: text,
        count,
      }).then((res) => callback(res));
    },
    activitiesFetch({ cityKey, text, count, callback }) {
      const cityNameEn = cityKey === "" ? "" : city_info[cityKey].en;
      getActivity({
        city: cityNameEn,
        name: text,
        count,
      }).then((res) => callback(res));
    },
    restaurantsFetch({ cityKey, text, count, callback }) {
      const cityNameEn = cityKey === "" ? "" : city_info[cityKey].en;
      getRestaurant({
        city: cityNameEn,
        name: text,
        count,
      }).then((res) => callback(res));
    },
    hotelsFetch({ cityKey, text, count, callback }) {
      const cityNameEn = cityKey === "" ? "" : city_info[cityKey].en;
      getHotel({
        city: cityNameEn,
        name: text,
        count,
      }).then((res) => callback(res));
    },
    cityKeyUpdate(val) {
      this.cityKey = val;
      this.searchTypeKey =
        this.searchTypeKey === ""
          ? this.searchType[0].value
          : this.searchTypeKey;
      this.searchClick();
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