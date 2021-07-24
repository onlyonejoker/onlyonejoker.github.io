<template>
  <transition name="slide-fade">
    <div v-if="show" class="hxjzg" :style="{ top: isTop, left: isLeft, color: isColor[index] }">
      {{ hxjzg[index] }}
    </div>
  </transition>
</template>
<script>
export default {
  name: "special",
  methods: {
    clickFn(e) {
      if (this.fd) return;
      this.index++;
      this.show = true;
      this.fd = true;
      this.isTop = e.pageY + "px";
      this.isLeft = e.pageX - 20 + "px";
      this.index >= 12 ? (this.index = 0) : this.index;
      setTimeout(() => {
        this.show = false;
      }, 0);
      setTimeout(() => {
        this.fd = false;
      }, 300);
    },
  },
  data() {
    return {
      isTop: 0,
      isLeft: 0,
      show: false,
      fd: false,
      isColor: [
        "red",
        "royalblue",
        "orange",
        "green",
        "blue",
        "orangered",
        "red",
        "red",
        "orange",
        "crimson",
        "brown",
        "mediumblue",
      ],
      hxjzg: [
        "♥富强♥",
        "♥民主♥",
        "♥文明♥",
        "♥和谐♥",
        "♥自由♥",
        "♥平等♥",
        "♥公正♥",
        "♥法治♥",
        "♥爱国♥",
        "♥敬业♥",
        "♥诚信♥",
        "♥友善♥",
      ],
      index: 0,
    };
  },
};
</script>

<style scoped>
  .hxjzg {
    position: absolute;
    z-index: 999;
    font-size: 12px;
    cursor: default;
  }
  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }
</style>