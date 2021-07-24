<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu class="el-menu-vertical-demo" background-color="var(--background-color)" text-color="var(--color)" active-text-color="rgb(62, 175, 124)" :router="true">

        <el-menu-item index="/" @click="$store.state.isAsideDisplay=true">
          <i class="iconfont icon-shouye"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index="/classify">
          <template slot="title">
            <i class="iconfont icon-leimupinleifenleileibie"></i>
            <span>分类</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/classify/html" @click="$store.state.isAsideDisplay=true">html</el-menu-item>
            <el-menu-item index="/classify/css" @click="$store.state.isAsideDisplay=true">css</el-menu-item>
            <el-menu-item index="/classify/javascript" @click="$store.state.isAsideDisplay=true">javascript</el-menu-item>
            <el-menu-item index="/classify/vue" @click="$store.state.isAsideDisplay=true">vue</el-menu-item>
            <el-menu-item index="/classify/webpack" @click="$store.state.isAsideDisplay=true">webpack</el-menu-item>
          </el-menu-item-group>

        </el-submenu>

        <el-menu-item index="/time" @click="$store.state.isAsideDisplay=true">
          <i class="iconfont icon-linedesign-04"></i>
          <span slot="title">时间轴</span>
        </el-menu-item>
        <el-menu-item index="/say" @click="$store.state.isAsideDisplay=true">
          <i class="iconfont icon-msg"></i>
          <span slot="title">留言</span>
        </el-menu-item>

        <el-submenu index="/about">
          <template slot="title">
            <i class="iconfont icon-guanyu"></i>
            <span>关于</span>
          </template>

          <el-menu-item-group>
            <el-menu-item index="/about" @click="$store.state.isAsideDisplay=true">
              <i class="iconfont icon-guanyu"></i>
              关于博主
            </el-menu-item>
            <el-menu-item>
              <i class="iconfont icon-guanyu"></i>
              <a href="https://github.com/onlyonejoker">GitHub</a>
            </el-menu-item>
            <el-menu-item>
              <i class="iconfont icon-guanyu"></i>
              不知道写点啥
            </el-menu-item>

          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "asideNav",
  methods: {},
};
</script>

<style scoped>
  .el-menu {
    border: 0;
  }
  .iconfont {
    margin-right: 5px;
  }
</style>