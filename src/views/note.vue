<template>
  <div>
    <div id="noteNavBox">
      <note-nav></note-nav>
    </div>
    <div class="markdown-body">
      <router-view v-if="this.$route.path!=='/classify'"></router-view>
      <html-md v-else></html-md>
    </div>
  </div>
</template>

<script>
import htmlMd from "../assets/markdown/html.md";
import noteNav from "../components/note/notenav.vue";
export default {
  name: "note",
  data() {
    return {};
  },
  components: {
    htmlMd,
    noteNav,
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
    #noteNavBox {
      position: fixed;
      top: 50px;
      left: 0;
      width: 20vw;
      height: calc(100vh - 50px);
    }
    .markdown-body {
      margin-left: 20vw;
    }
  }
</style>