<template>
  <div id="homeUserBox">
    <home-user-profile></home-user-profile>
    <div id="homeUserintroduce">
      <div>本页面采用的技术栈</div>
      <ul>
        <li>vue</li>
        <li>vuex</li>
        <li>vue-router</li>
        <li>element-ui</li>
        <li>vue-cli</li>
        <li>axios</li>
      </ul>
    </div>
    <div id="homeTime">
      <home-time></home-time>
    </div>
  </div>
</template>

<script>
import homeTime from "./time.vue";
import homeUserProfile from "./homeUserProfile.vue";
export default {
  name: "homeUser",
  components: {
    homeTime,
    homeUserProfile,
  },
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style scoped>
  #homeUserBox {
    width: 100%;
    height: 100%;
    padding: 10%;
    box-shadow: 0 0 8px 0px rgba(99, 99, 99, 0.2);
  }
  #homeUserBox:hover {
    box-shadow: 0 0 8px 1px rgba(99, 99, 99, 0.3);
  }

  #homeUserintroduce {
    width: 100%;
    height: 30%;
    text-align: center;
  }
  #homeUserintroduce ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #homeUserintroduce ul li {
    width: 50%;
    margin-bottom: 5px;
  }
  #homeUserintroduce ul li:nth-child(odd) {
    border-right: solid 2px var(--color);
  }

  #homeTime {
    width: 100%;
    height: 20%;
  }
</style>