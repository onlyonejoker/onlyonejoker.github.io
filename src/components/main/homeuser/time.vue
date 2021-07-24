<template>
  <div id="homeTimeBox">
    <div class="time">{{ h }}</div>
    <div class="timefg">:</div>
    <div class="time">{{ m }}</div>
    <div class="timefg">:</div>
    <div class="time">{{ s }}</div>
    <div class="hellow">{{time[index]}}</div>
  </div>
</template>

<script>
export default {
  name: "usertime",
  data: function () {
    return {
      h: "00",
      m: "00",
      s: "00",
      index: 0,
      time: [
        "早上好！今天又是充满希望的一天",
        "中午好！加油搬砖哦",
        "下午好！吃了没",
        "晚上好！今天过得怎么样",
        "夜深了！早点休息哦",
        "快滚去睡！夜猫子",
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.s = new Date().getSeconds();
      this.s = this.s < 10 ? "0" + this.s : this.s;
      this.m = new Date().getMinutes();
      this.m = this.m < 10 ? "0" + this.m : this.m;
      this.h = new Date().getHours();
      this.h = this.h < 10 ? "0" + this.h : this.h;
      this.h = this.h >= 24 ? "00" : this.h;
      if (this.h >= 6 && this.h < 12) {
        this.index = 0;
      } else if (this.h >= 12 && this.h < 14) {
        this.index = 1;
      } else if (this.h >= 14 && this.h < 18) {
        this.index = 2;
      } else if (this.h >= 18 && this.h < 22) {
        this.index = 3;
      } else if (this.h >= 22 && this.h < 24) {
        this.index = 4;
      } else if (this.h >= 0 && this.h < 6) {
        this.index = 5;
      }
    }, 1000);
  },
};
</script>

<style scoped>
  #homeTimeBox {
    width: 100%;
    height: 100%;
    color: rgb(62, 175, 124);
    font-size: 30px;
    text-align: center;
  }
  .time {
    width: 32%;
    height: 50%;
    float: left;
  }
  .timefg {
    width: 2%;
    height: 50%;
    float: left;
  }
  .hellow {
    float: left;
    width: 100%;
    height: 50%;
    font-size: 16px;
    color: orangered;
    text-align: center;
  }
</style>
