<template>
  <List1 title="熱門城市" :city-key="cityKey" @update="clickFunc" />
  <List2 title="熱門活動" :lists="list2" />
  <List3 title="熱門餐飲" :title-type="2" :lists="list3" />
</template>

<script>
import List1 from "../component/List1.vue";
import List2 from "../component/List2.vue";
import List3 from "../component/List3.vue";
export default {
  components: { List1, List2, List3 },
  props: {
    clickFunc: {
      type: Function,
      default: () => {},
    },
    cityKey: {
      type: String,
      default: "",
    },
    activities: {
      type: Array[Object],
      default: [],
    },
    restaurants: {
      type: Array[Object],
      default: [],
    },
  },
  computed: {
    list2() {
      return this.getList(this.activities);
    },
    list3() {
      console.log(this.getList(this.restaurants));
      return this.getList(this.restaurants);
    },
  },
  methods: {
    getList(list) {
      return list.map((info) => {
        const { ID, City, Name, Picture, Description } = info;
        const hasPicture = Object.keys(info.Picture).length > 0;
        const PictureUrl = hasPicture ? Picture.PictureUrl1 : "";
        const PictureDescription = hasPicture
          ? Picture.PictureDescription1
          : "";
        return { ID, Name, City, PictureUrl, PictureDescription, Description };
      });
    },
  },
};
</script>