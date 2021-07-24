<template>
  <div class="navBox" :class="{colDefaule:this.isDefaulef}">
    <div class="span4">
      <i class="iconfont icon-Palettetiaoseban" @click="bjClick"></i>
      <div id="bj" :style="{ display: isTsb }">
        <p>调色板</p>
        <div id="tsb">
          <div @click="tsbClick1" :class="{ bjc: isColor == 1 }">黑夜</div>
          <div @click="tsbClick2" :class="{ bjc: isColor == 2 }">日间</div>
          <div @click="tsbClick3" :class="{ bjc: isColor == 3 }">保留</div>
        </div>
      </div>
    </div>

    <div class="span20">
      <i class="iconfont icon-sousuo" :class="{iDefaule:this.isDefaulef}" @click="searchBtn"></i>
      <input type="text" @focus="focusFn" @blur="blurFn" :class="{ focus: isFocus,inputDefaule:this.isDefaulef}" id="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: "sousuo",
  methods: {
    focusFn() {
      this.isFocus = true;
    },
    blurFn() {
      this.isFocus = false;
    },
    bjClick() {
      if (!this.isDefaulef) {
        this.isDefaulef = true;
      } else {
        if (this.isTsb == "block") {
          this.isTsb = "none";
        } else {
          this.isTsb = "block";
        }
      }
    },
    tsbClick1() {
      this.isColor = 1;
      document.documentElement.style.setProperty("--color", "#fff");
      document.documentElement.style.setProperty(
        "--background-color",
        "#181818"
      );
      document.documentElement.style.setProperty(
        "--search-background-color",
        "#fff"
      );
    },
    tsbClick2() {
      this.isColor = 2;
      document.documentElement.style.setProperty("--color", "#181818");
      document.documentElement.style.setProperty("--background-color", "#fff");
      document.documentElement.style.setProperty(
        "--search-background-color",
        "gary"
      );
    },
    tsbClick3() {
      this.isColor = 3;
    },
    searchBtn() {
      this.isDefaulef = false;
    },
  },
  data() {
    return {
      isFocus: false,
      isTsb: "none",
      isColor: 2,
      isDefaulef: true,
      time: "",
    };
  },
  mounted() {
    if (document.documentElement.offsetWidth > 768) {
      this.isDefaulef = false;
    } else {
      this.isDefaulef = true;
    }
    window.addEventListener("resize", () => {
      if (this.time) {
        clearTimeout(this.time);
      }
      this.time = setTimeout(() => {
        if (document.documentElement.offsetWidth > 768) {
          this.isDefaulef = false;
        } else {
          this.isDefaulef = true;
        }
      }, 500);
    });
  },
};
</script>

<style scoped>
  @keyframes drawer {
    0% {
      border: 1px solid gray;
    }
    25% {
      border: 1px solid gray;
      padding: 0;
    }
    40% {
      padding: 0;
      opacity: 0;
    }
    50% {
      border: 1px solid gray;
      padding: 0;
      opacity: 0;
      width: 0;
    }
    75% {
      border: 0;
      padding: 0;
      opacity: 0;
      width: 0;
    }
    100% {
      border: 0;
      padding: 0;
      width: 0;
      opacity: 0;
    }
  }
  @keyframes drawer1 {
    0% {
      padding-left: 0%;
    }
    25% {
      padding-left: 25%;
    }
    50% {
      padding-left: 50%;
    }
    75% {
      padding-left: 65%;
    }
    99% {
      padding-left: 65%;
    }
    100% {
      padding-left: 65%;
    }
  }
  .navBox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .iDefaule {
    transform: translateX(0px);
    transition: all 0.7s;
  }
  .inputDefaule {
    animation: drawer 0.7s linear forwards;
  }
  .colDefaule {
    animation: drawer1 0.7s linear forwards;
  }

  .span20 {
    width: 100%;
    position: relative;
  }
  .icon-sousuo {
    position: absolute;
    width: 1.6rem;
    font-size: 20px;
    height: 100%;
    line-height: 32px;
    right: 0;
    top: 0;
    left: 4px;
    z-index: 1000;
  }
  .icon-sousuo::before {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  #search {
    width: 100%;
    height: 2rem;
    max-width: 270px;
    outline: 0;
    padding-left: 1.6rem;
    border: 1px solid gray;
    background-color: transparent;
    color: var(--color);
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px var(--background-color) inset !important;
  }
  input:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px var(--background-color) inset !important;
  }
  input:-internal-autofill-previewed,
  input:-internal-autofill-selected {
    -webkit-text-fill-color: var(--color) !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }

  .focus {
    border-color: rgb(62, 175, 124) !important;
  }

  .icon-Palettetiaoseban {
    flex: 1;
    font-size: 1.5625rem;
    margin: 0 10px;
    color: rgb(62, 175, 124);
  }
  #bj {
    position: fixed;
    left: calc(50vw - 75px);
    top: 50px;
    width: 153px;
    height: 82px;
    padding: 15px;
    background-color: var(--background-color);
    color: var(--color);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
  p {
    height: 16px;
    line-height: 16px;
  }
  #tsb {
    width: 100%;
    height: 25px;
    border: 1px solid gray;
    margin-top: 8px;
  }
  #tsb > div {
    width: 33.3333%;
    height: 25px;
    font-size: 16px;
    line-height: 25px;
    float: left;
    cursor: pointer;
  }
  #tsb > div:nth-child(2) {
    border-left: 1px solid gray;
    border-right: 1px solid gray;
  }
  .bjc {
    background-color: rgb(62, 175, 124);
  }
</style>