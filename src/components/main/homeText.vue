<template>
  <div id="homeTextBox">
    <home-text1></home-text1>
    <home-text2></home-text2>
  </div>
</template>

<script>
import homeText1 from "./homeText/homeText1.vue";
import homeText2 from "./homeText/homeText2.vue";
export default {
  name: "homeText",
  components: {
    homeText1,
    homeText2,
  },
};
</script>

<style scoped>
  #homeTextBox {
    box-shadow: 0 0 8px 1px rgba(129, 129, 129, 0.3);
    width: 100%;
    height: 100%;
    padding: 10% 15%;
  }
  #homeTextBox:hover {
    box-shadow: 0 0 8px 1px rgba(129, 129, 129, 0.5);
  }
</style>