<template>
    <List3 :title="viceTitle" :list="list3" />
</template>

<script>
import List3 from "../component/List3";
import { city_info } from "../../json/city";

export default {
  components: {
    List3,
  },
  props: {
    list: {
      type: Array[Object],
      default: [],
    },
    cityKey: {
      type: String,
      default:""
    },
    text: {
      type: String,
      default:""
    },
  },
  data() {
    return {
      viceTitle: "",
    };
  },
  computed: {
    list3() {
      return this.list.map((info) => {
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
  watch: {
    list() {
      const cityNameCh = this.cityKey === "" ? "" : city_info[this.cityKey].ch;
      const keyWordList = [cityNameCh, this.text].filter((i) => i !== "");
      this.viceTitle = keyWordList.join(", ");
    },
  },
};
</script>