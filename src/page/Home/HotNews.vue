<template>
  <List1 title="熱門城市" :city-key="cityKey" @update="clickFunc" />
  <List2 :activities="activities"/>
</template>

<script>
import List1 from "../component/List1.vue";
import List2 from "../component/List2.vue";
export default {
  components: { List1, List2 },
  props: {
    clickFunc: {
      type: Function,
      default: () => {},
    },
    cityKey: {
      type: String,
      default: "",
    },
    activities:{
      type: Array[Object],
      default: []
    }
  },
};
</script>