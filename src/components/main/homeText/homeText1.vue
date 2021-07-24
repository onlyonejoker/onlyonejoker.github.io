<template>
  <div id="homeText1">
    <h1>简介</h1>
    <div id="textContent">
      &nbsp;&nbsp;本网站记录了博主的个人学习笔记，其中具有评论功能，使用了vue全家桶+elementUI组件库。
      本网站的搭建借鉴了vuepress插件的一些样式，其中特效与逻辑都是手写。
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  #homeText1 {
    width: 100%;
    min-height: 100px;
    box-shadow: 0 0 8px 1px rgba(122, 122, 122, 0.5);
    margin-bottom: 30px;
    font-size: 14px;
    font-family: "宋体";
    line-height: 20px;
  }
  #textContent {
    margin-top: 5px;
    border-top: 1px solid gray;
    background-color: rgba(122, 122, 122, 0.1);
    padding: 0 10px 10px;
  }
</style>