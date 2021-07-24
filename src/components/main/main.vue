<template>
  <div id="lxSir">
    <div id="mrLbox">
      <h1>MrC</h1>
      <transition name="mrL">
        <p v-if="show">{{ text[index] }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainBody",
  data() {
    return {
      show: true,
      index: 0,
      text: [
        "愿中国青年都摆脱冷气",
        "只是向上走",
        "不必听自暴自弃者流的话",
        "能做事的做事",
        "能发声的发声",
        "有一分热，发一分光",
        "就令萤火一般",
        "也可以在黑暗里发一点光",
        "不必等候炬火",
        "-----0.0-----",
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.show = !this.show;
      if (this.show) {
        this.index++;
      }
      if (this.index > 9) {
        this.index = 0;
      }
    }, 1500);
  },
};
</script>

<style scoped>
  #lxSir {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: transparent;
    background: url(../../assets/img/bg.2cfdbb33.svg) center center / cover
      no-repeat;
  }
  #mrLbox {
    display: inline-block;
    height: 20%;
    text-align: center;
  }
  h1 {
    background-color: transparent;
  }
  p {
    background-color: transparent;
    font-family: "楷体";
    font-size: 30px;
  }
  .mrL-enter-active {
    transition: all 0.3s;
  }
  .mrL-leave-active {
    transition: all 0.8s;
  }
  .mrL-enter {
    transform: translateX(-60px);
    opacity: 0;
  }
  .mrL-leave-to {
    transform: translateX(60px);
    opacity: 0;
  }
</style>