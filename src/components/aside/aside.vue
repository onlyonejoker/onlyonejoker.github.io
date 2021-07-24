<template>
  <div id="asideBox">
    <div id="asideUser">
      <home-user-profile></home-user-profile>
    </div>
    <div id="asideNav">
      <aside-nav></aside-nav>
    </div>
  </div>
</template>


<script>
import HomeUserProfile from "../main/homeuser/homeUserProfile.vue";
import asideNav from "./asideNav.vue";
export default {
  name: "asideBox",
  components: {
    HomeUserProfile,
    asideNav,
  },
  data() {
    return {};
  },
};
</script>


<style scoped>
  #asideBox {
    height: 100%;
  }
  #asideUser {
    width: 100%;
    height: 25%;
    overflow: hidden;
    padding: 0 30%;
  }
  #asideNav {
    width: 100%;
    height: 75%;
    overflow: hidden;
  }
</style>