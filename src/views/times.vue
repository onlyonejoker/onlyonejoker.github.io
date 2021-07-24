<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item :timestamp="value.time" placement="top" v-for="(value,index) in timeNode" :key="index">
        <el-card>
          <h4>{{value.content}}</h4>
          <p>{{value.id}}提交于{{value.times}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "times",
  data() {
    return {
      timeNode: [
        {
          time: "2021年7月24日",
          content: "之后搭建服务器修改时间轴吧",
          id: "小C",
          times: "13:11:30",
        },
      ],
    };
  },
};
</script>

<style scoped>
  .block {
    width: 100%;
    padding: 0 20%;
  }
</style>