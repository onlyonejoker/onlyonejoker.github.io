<template>
  <el-row :gutter="0" type="flex" justify="space-between" align="center">

    <el-col :xs="{span:6,push:2}" :sm="6" :md="8" :lg="8" :xl="1">
      <header-user></header-user>
    </el-col>

    <el-col :xs="{span:16,push:2}" :sm="8" :md="8" :lg="8" :xl="11" id="sb">
      <header-search></header-search>
    </el-col>

    <el-col :xs="{span:2,pull:22,}" :sm="10" :md="8" :lg="8" :xl="1">
      <header-Nav class="hidden-xs-only"></header-Nav>
      <div class="hidden-sm-and-up" @click="appNavClick"><i class="iconfont icon-icon04"></i></div>
    </el-col>

  </el-row>
  <!-- <el-row type="flex" class="row-bg" justify="space-between">
    <slot></slot>
  </el-row> -->
</template>

<script>
import headerUser from "./hearderUser.vue";
import headerNav from "./hearderNav.vue";
import headerSearch from "./headerSearch.vue";
export default {
  name: "mainHeader",
  components: {
    headerSearch,
    headerUser,
    headerNav,
  },
  methods: {
    appNavClick() {
      this.$store.state.isAsideDisplay = !this.$store.state.isAsideDisplay;
    },
  },
  data() {
    return {
      isWeb: true,
    };
  },
};
</script>

<style scoped >
  .el-row {
    height: 100%;
  }
  .hidden-sm-and-up {
    padding: 10px 10px 10px 0;
  }
  .el-col {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  #sb {
    display: block;
  }
</style>
 