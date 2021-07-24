<template>
  <div id="sayPage">
    <div id="sayIntroduce">
      <p>博主很菜，留下点改善意见吧</p>
      <el-divider></el-divider>
      <valine></valine>
    </div>
  </div>
</template>

<script>
import emoji from "../assets/database/emoji";
import valine from "../valine/valine.vue";

export default {
  name: "classfly",
  data() {
    return {
      id: "",
      content: "",
      visitor: [],
      isfocus: false,
      isDisplay: true,
      emoji,
    };
  },
  components: {
    valine,
  },
  methods: {
    sayClick() {
      if (this.id == "" || this.content == "") return;
      let time =
        new Date().getFullYear() +
        "年" +
        new Date().getMonth() +
        "月" +
        new Date().getDate() +
        "日";
      let id = this.id + "|" + time;

      localStorage.setItem(id, this.content);

      let content = {};
      content.id = this.id;
      content.time = time;
      content.content = this.content;
      this.visitor.push(content);
      this.id = "";
      this.content = "";
    },
    emojiClick() {
      this.isDisplay = !this.isDisplay;
    },
    emojiFn(index) {
      console.log(index);
      this.content = this.content + this.emoji[index];
    },
  },
  computed: {},
  mounted() {
    let myDb = JSON.parse(JSON.stringify(localStorage));
    delete myDb["loglevel:webpack-dev-server"];
    delete myDb.time;
    for (const key in myDb) {
      let content = {};
      content.id = key.split("|")[0];
      content.time = key.split("|")[1];
      content.content = myDb[key];
      this.visitor.push(content);
    }
  },
};
</script>

<style scoped>
  @media screen and (max-width: 786px) {
    #sayPage {
      width: 100vw !important;
      height: 100%;
      padding: 0 5%;
    }
  }
  @media screen and (min-width: 787px) {
    #sayPage {
      width: 100%;
      height: 100%;
      padding: 0 20%;
    }
  }
  #sayIntroduce {
    font-family: "宋体";
    width: 100%;
    margin: 5vh 0 0;
    height: 10vh;
    text-align: center;
  }
  #sayIntroduce p {
    text-shadow: 0 0 2px orange;
    font-weight: 700;
  }
</style>





<!--  


#emoji {
      width: 20%;
    }
    #emoji ul li {
      width: 25%;
      height: 25%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    } 
    
    
    
     <ul>
        <li v-for="(item,index) in emojiFn" :key="index">{{item}}</li>
      </ul>
    </div>

    <div id="sayBox">
      <div class="sayBox-1">
        <div class="say-box-user">user</div>
        <input v-model="id">
      </div>

      <div style="margin: 20px 0;" class="sayBox-2">
        <div class="say-box-content">content</div>
        <textarea v-model="content" rows="8"></textarea>
      </div>

      <div id="button">
        <el-button id="sayClick" type="success" @click="sayClick">留言</el-button>
        <el-button id="emojiClick" type="success" @click="emojiClick">😀</el-button>
      </div>

      <div id="emoji" :class="{display:isDisplay}">
        <ul>
          <li v-for="(value,index) in emoji" :key="index" @click="emojiFn(index)">{{value}}</li>
        </ul>
      </div>
    </div>

    <div id="sayContentBox">
      <ul>
        <li v-for="(value,index) in visitor" :key="index" id="sayVisitor">
          <div id="sayVisitorProfile">
            <span id="valueId">{{value.id}}</span>
            <span id="valueTime">{{value.time}}</span>
          </div>
          <div>
            <div id="valueContent">
              {{value.content}}
            </div>
          </div>
        </li>
      </ul> 

        #sayIntroduce {
    font-family: "宋体";
    width: 100%;
    margin: 5vh 0 0;
    height: 10vh;
    text-align: center;
  }
  #sayIntroduce p {
    text-shadow: 0 0 2px orange;
    font-weight: 700;
  }
  #sayIntroduce ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2vh;
  }
  #sayBox {
    width: 100%;
    height: 35vh;
    position: relative;
  }
  div[class^="sayBox"] {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div[class^="say-box"] {
    width: 25%;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    text-shadow: 0 0 10px rgb(62, 175, 124);
  }
  #button {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }
  #sayClick {
    background-color: rgb(62, 175, 124);
    order: 1;
  }
  #emojiClick {
    background-color: rgb(62, 175, 124);
  }
  input {
    font-family: "宋体";
    height: 30px;
    outline: 0;
    border: 1px solid gray;
    font-size: 16px;
    width: 75%;
    border-radius: 5px 5px;
  }
  input:focus {
    outline: 0;
    border-color: rgb(62, 175, 124) !important;
  }
  textarea {
    font-family: "宋体";
    outline: 0;
    border: 1px solid gray;
    font-size: 16px;
    resize: none;
    width: 75%;
    border-radius: 5px 5px;
  }
  textarea:focus {
    outline: 0;
    border-color: rgb(62, 175, 124) !important;
  }
  #emoji {
    position: absolute;
    right: 10%;
    bottom: 30%;
    height: 50%;
    border-radius: 10px 10px;
    box-shadow: 0 0 1px 1px gray;
    cursor: pointer;
  }
  .display {
    display: none;
  }
  #emoji ul {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  #emoji ul li {
    width: 25%;
    height: 25%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #sayContentBox {
    width: 100%;
  }
  #sayContentBox ul {
    width: 100%;
    margin-top: 5vh;
  }
  #sayContentBox ul li {
    width: 100%;
    margin: 10px 0;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0 3px 0.5px gray;
    padding: 0 10px;
  }
  #sayVisitorProfile {
    margin-bottom: 10px;
    margin: 10px 0;
    border-bottom: 1px solid gray;
    min-height: 30px;
  }
  #valueId {
    color: orangered;
    margin-right: 10px;
  }
  #valueTime {
    color: var(--search-background-color);
    font-size: 12px;
  }
  #valueContent {
    line-height: 30px;
    min-height: 30px;
    margin-bottom: 10px;
  }-->