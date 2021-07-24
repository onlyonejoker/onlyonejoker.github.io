<template>
  <div id="pl"></div>
</template>

<script>
import Valine from "valine";
export default {
  name: "valine",
  mounted() {
    new Valine({
      el: "#pl",
      appId: "Je6hYAcdaMAi56ES0X6sB6Nx-gzGzoHsz",
      appKey: "m3K8zq5u0IUPohsgtnt58Phz",
      placeholder: "有问题就留言",
      recordIP: true,
      avatarForce: true,
    });
  },
};
</script>

<style></style>
