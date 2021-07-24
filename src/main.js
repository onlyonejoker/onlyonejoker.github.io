import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/axios";
import "./plugins/element.js";
import "element-ui/lib/theme-chalk/display.css";
import "github-markdown-css";
Vue.config.productionTip = false;

const vm = new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
export default vm;
