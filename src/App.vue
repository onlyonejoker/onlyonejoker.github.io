<template>
  <div id="app" @click.stop="clickFn">
    <el-container>
      <!-- 主导航栏 -->
      <el-header height="50px">
        <main-nav></main-nav>
      </el-header>
      <el-container>
        <!-- 响应式侧边栏 -->
        <transition name="aside">
          <el-aside width="70%" :class="{isNone:!this.$store.state.isAsideDisplay}">
            <main-aside></main-aside>
          </el-aside>
        </transition>
        <!-- 主要页面内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 特效 -->
    <special ref="special"></special>
    <!-- 遮罩 -->
    <div :class="{barrier:!this.$store.state.isAsideDisplay}"></div>
  </div>

  <!-- <div id="app" @click.stop.prevent="clickFn" :class="{ black: this.$store.state.bodyBg }">
    <main-nav></main-nav>
    <router-view></router-view>
    <transition name="slide-fade">
      <div v-if="show" class="hxjzg" :style="{ top: isTop, left: isLeft, color: isColor[index] }">
        {{ hxjzg[index] }}
      </div>
    </transition>
  </div> -->
</template>

<script>
import mainNav from "./components/head/header.vue";
import mainAside from "./components/aside/aside.vue";
import special from "./components/special/special.vue";
export default {
  name: "app",
  components: {
    mainNav,
    mainAside,
    special,
  },
  methods: {
    clickFn(e) {
      this.$refs.special.clickFn(e);
    },
  },
  computed: {},
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (document.documentElement.offsetWidth > 768) {
        this.$store.state.isAsideDisplay = true;
        this.$store.state.isApp = false;
      }
    });
  },
};
</script>

<style scoped>
  #app {
    position: relative;
    background-color: var(--background-color);
    color: var(--color);
  }
  .el-header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 998;
    background-color: var(--background-color);
  }
  .el-container {
    width: 100%;
    position: relative;
  }
  .isNone {
    transform: translateX(0%) !important;
    background-color: var(--background-color) !important;
    color: var(--color) !important;
    transition: all 0.3s ease;
  }
  .barrier {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 8, 8, 0.7);
    z-index: 1;
  }
  .el-aside {
    position: fixed;
    left: 0;
    top: 50px;
    transform: translateX(-100%);
    z-index: 997;
    height: calc(100vh - 50px);
    background-color: var(--background-color);
    transition: all 0.3s ease;
  }
  .el-main {
    padding: 0;
    overflow: visible;
  }
  @import url("./assets/css/base.css");
  @import url("./assets/icon/iconfont.css");
</style>
