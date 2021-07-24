<template>
  <header-box>
    <header-user></header-user>
    <header-search></header-search>
    <header-Nav></header-Nav>
  </header-box>
</template>

<script>
import headerBox from "./head/header.vue";
import headerUser from "./head/hearderUser.vue";
import headerNav from "./head/hearderNav.vue";
import headerSearch from "./head/headerSearch.vue";
export default {
  name: "mainHeader",
  components: {
    headerBox,
    headerSearch,
    headerUser,
    headerNav,
  },
};
</script>
