<template>
  <List3 :title="viceTitle" :lists="list3" :page="page"/>
</template>

<script>
import List3 from "../component/List3";
import { city_info } from "../../json/city";
import { PAGE_TYPE } from "../../util/Type";

export default {
  components: {
    List3,
  },
  props: {
    page: {
      type: String,
      default: PAGE_TYPE[1],
    },
    lists: {
      type: Array[Object],
      default: [],
    },
    cityKey: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      viceTitle: "",
    };
  },
  mounted() {
    this.viceTitleUpdate();
  },
  methods: {
    viceTitleUpdate() {
      const cityNameCh = this.cityKey === "" ? "" : city_info[this.cityKey].ch;
      const keyWordList = [cityNameCh, this.text].filter((i) => i !== "");
      const viceTitleResult = keyWordList.join(", ");
      this.viceTitle = viceTitleResult === "" ? "搜尋結果" : viceTitleResult;
    },
  },
  computed: {
    list3() {
      return this.lists.map((info) => {
        const { ID, City, Name, Picture } = info;
        const hasPicture = Object.keys(info.Picture).length > 0;
        const PictureUrl = hasPicture ? Picture.PictureUrl1 : "";
        const PictureDescription = hasPicture
          ? Picture.PictureDescription1
          : "";
        return { ID, Name, City, PictureUrl, PictureDescription };
      });
    },
  },
  watch: {
    list3() {
      this.viceTitleUpdate();
    },
  },
};
</script>