<template>
  <div class="grid-content bg-purple">
    <img src="../../assets/img/logo.png" />
    <span id="userID" slot="UserName">MrC</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .el-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 36px;
    margin-right: 5px;
  }
  img {
    width: 1.875rem;
    height: 1.875rem;
    vertical-align: middle;
    border-radius: 1.875rem 1.875rem;
    margin-right: 0.325rem;
  }
  #userID {
    font-weight: 700;
    font-size: 18px;
  }
</style>