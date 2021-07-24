<template>
  <div id="homeBJ">
    <go-top></go-top>
    <main-body></main-body>
    <div id="homeContent">
      <div id="homeText">
        <home-text></home-text>
      </div>
      <div id="homeUser" :class="{userFixed:isHomeUser}">
        <homeUser></homeUser>
      </div>
    </div>
  </div>
</template>

<script>
import mainBody from "../components/main/main.vue";
import homeUser from "../components/main/homeuser/homeUser.vue";
import goTop from "../components/main/gotop.vue";
import homeText from "../components/main/homeText.vue";
export default {
  name: "Home",
  components: {
    mainBody,
    homeUser,
    goTop,
    homeText,
  },
  data() {
    return {
      flag: true,
      isHomeUser: false,
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        if (this.flag) {
          this.flag = false;
          if (document.documentElement.scrollTop >= 765) {
            this.isHomeUser = true;
          } else {
            this.isHomeUser = false;
          }
          setTimeout(() => {
            this.flag = true;
          }, 500);
        }
      },
      true
    );
  },
};
</script>
<style scoped>
  @media screen and (max-width: 786px) {
    #homeUser {
      display: none;
    }
  }
  @media screen and (min-width: 787px) {
    #homeUser {
      display: block;
    }
  }

  #homeBJ {
    width: 100%;
    height: 100%;
  }
  #homeContent {
    width: 100vw;
    display: flex;
  }
  #homeText {
    width: 60%;
    height: 100vh;
    margin-right: 10%;
    padding: 5% 5% 0;
  }
  #homeUser {
    width: 27%;
    height: 60vh;
  }
  .userFixed {
    position: sticky;
    right: -3px;
    top: 20vh;
  }
  #goTop {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
  #goTop img {
    width: 100%;
    height: 100%;
  }
</style>



