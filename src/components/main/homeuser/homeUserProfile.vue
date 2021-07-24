<template>
  <div>
    <div id="homeUserImg"> <img src="../../../assets\img\logo.png" alt=""></div>
    <div id="homeUserId"><span>MrC</span></div>
  </div>
</template>

<script>
export default {
  name: "homeUserProfile",
};
</script>

<style scoped>
  #homeUserImg img {
    width: 100px;
    height: 100px;
    border-radius: 100px 100px;
  }
  #homeUserImg {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #homeUserId {
    width: 100%;
    height: 10%;
    margin-top: 10%;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
</style>