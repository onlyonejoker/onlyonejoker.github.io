<template>
  <div class="grid-content bg-purple">
    <div class="el-dropdown">
      <router-link to="/" :class="{ isActive: $route.path == '/' }">
        <span class="el-dropdown-link">
          <i class="iconfont icon-shouye"></i>
          首页
        </span>
      </router-link>
    </div>

    <el-dropdown>
      <router-link to="/classify" :class="{ isActive: $route.path == '/classify' }">
        <span class="el-dropdown-link">
          <i class="iconfont icon-leimupinleifenleileibie"></i>
          分类
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </router-link>
      <el-dropdown-menu slot="dropdown">

        <router-link to="/classify/html">
          <el-dropdown-item>
            html
          </el-dropdown-item>
        </router-link>

        <router-link to="/classify/css">
          <el-dropdown-item>
            css
          </el-dropdown-item>
        </router-link>

        <router-link to="/classify/javascript">
          <el-dropdown-item>
            javaScript
          </el-dropdown-item>
        </router-link>

        <router-link to="/classify/vue">
          <el-dropdown-item>
            vue
          </el-dropdown-item>
        </router-link>

        <router-link to="/classify/webpack">
          <el-dropdown-item>
            webpack
          </el-dropdown-item>
        </router-link>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="el-dropdown">
      <router-link to="/time" :class="{ isActive: $route.path == '/time' }">
        <span class="el-dropdown-link">
          <i class="iconfont icon-linedesign-04"></i>
          时间轴
        </span>
      </router-link>
    </div>

    <div class="el-dropdown">
      <router-link to="/say" :class="{ isActive: $route.path == '/say' }">
        <span class="el-dropdown-link">
          <i class="iconfont icon-msg"></i>
          留言
        </span>
      </router-link>
    </div>

    <el-dropdown :class="{ isActive: $route.path == '/about' }">
      <span class="el-dropdown-link">
        <i class="iconfont icon-guanyu"></i>
        关于
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/about">
          <el-dropdown-item>
            <i class="iconfont icon-dengluyemianyonghuming"></i>
            关于博主
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item>
          <i class="iconfont icon-github"></i>
          <a href="https://github.com/onlyonejoker"> GitHub</a>
        </el-dropdown-item>
        <el-dropdown-item>在写点啥？</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "hNav",
  computed: {},
};
</script>

<style scoped>
  .headerNavBox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bg-purple {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }
  .el-dropdown-menu {
    background-color: var(--background-color);
    color: var(--color);
  }

  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown {
    cursor: default;
  }
  .isActive {
    color: rgb(62, 175, 124);
  }
  a {
    color: var(--color);
  }
  li:hover {
    background-color: var(--background-color);
  }
  a:hover {
    color: rgb(62, 175, 124);
  }
  .el-dropdown:hover {
    color: rgb(62, 175, 124);
  }
  .el-dropdown-item {
    cursor: default;
    color: var(--color);
  }
</style>