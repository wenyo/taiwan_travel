<template>
  <List1 title="熱門城市" :city-key="cityKey" @update="clickFunc" />
</template>

<script>
import List1 from "../component/List1.vue";
export default {
  components: { List1 },
  props: {
    clickFunc: {
      type: Function,
      default: () => {},
    },
    cityKey: {
      type: String,
      default: "",
    },
  },
};
</script>