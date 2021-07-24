
<template>
  <el-tree :data="this.$store.state.nodeNavData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>
<script>
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>
<style>
</style>


