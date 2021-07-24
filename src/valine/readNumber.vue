<template>
  <div id="<Your/Path/Name>" class="leancloud_visitors" data-flag-title="Your Article Title">
    <i class="post-meta-item-text">访问量</i>
    <i class="leancloud-visitors-count">0</i>
  </div>
</template>

<script>
import Valine from "valine";
export default {
  name: "valine",
  mounted() {
    new Valine({
      visitor: true,
    });
  },
};
</script>

<style></style>