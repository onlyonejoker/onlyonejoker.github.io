import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import vuex from "../store/index";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/say",
		name: "say",
		component: () => import("../views/say.vue"),
	},
	{
		path: "/classify",
		name: "classify",
		children: [
			{path: "html", name: "html", component: () => import("../views/note/html.vue")},
			{path: "css", name: "css", component: () => import("../views/note/css.vue")},
			{path: "javascript", name: "javascript", component: () => import("../views/note/javascript.vue")},
			{path: "vue", name: "vue", component: () => import("../views/note/vue.vue")},
			{path: "webpack", name: "webpack", component: () => import("../views/note/webpack.vue")},
		],
		component: () => import("../views/note.vue"),
	},
	{
		path: "/time",
		name: "time",
		component: () => import("../views/times.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/about.vue"),
	},
];
const router = new VueRouter({
	routes,
	/* 	mode: "history", */
});
router.beforeEach((to, from, next) => {
	let html = [
		{
			label: "HTML基础",
			children: [
				{
					label: "常用标签",
				},
				{
					label: "特殊标签",
				},
			],
		},
		{
			label: "表单与表格",
			children: [
				{
					label: "表单标签",
				},
				{
					label: "表格标签",
				},
			],
		},
		{
			label: "HTML5新增",
			children: [
				{
					label: "语义化标签",
				},
				{
					label: "视频与音频标签",
				},
			],
		},
		{
			label: "HTML注意事项",
			children: [
				{
					label: "常见错误",
				},
				{
					label: "特殊用法与补充",
				},
			],
		},
	];
	let css = [
		{
			label: "CSS基础",
			children: [
				{
					label: "css选择器",
				},
				{
					label: "文字样式",
				},
				{
					label: "伪类选择器",
				},
				{
					label: "css背景",
				},
				{
					label: "css三大特性与权重",
				},
			],
		},
		{
			label: "css布局",
			children: [
				{
					label: "盒子模型",
				},
				{
					label: "内外边距与怪异盒子",
				},
			],
		},
		{
			label: "浮动",
			children: [
				{
					label: "浮动的特性与基本使用",
				},
				{
					label: "清除浮动",
				},
			],
		},
		{
			label: "定位",
			children: [
				{
					label: "定位方式",
				},
				{
					label: "特殊用法与补充",
				},
			],
		},
		{
			label: "css3新增",
			children: [
				{
					label: "新增选择器",
				},
				{
					label: "平移,2D转换,3D转化",
				},
				{
					label: "过渡与动画",
				},
			],
		},
		{
			label: "布局高级",
			children: [
				{
					label: "flex布局",
				},
				{
					label: "媒体查询与rem",
				},
				{
					label: "响应式布局",
				},
			],
		},
		{
			label: "补充",
			children: [
				{
					label: "常见问题",
				},
				{
					label: "css函数",
				},
			],
		},
	];
	let javascript = [
		{
			label: "js基础",
			children: [
				{
					label: "数据类型、变量、运算符、流程控制",
				},
				{
					label: "函数",
				},
				{
					label: "对象",
				},
			],
		},
		{
			label: "js内置对象",
			children: [
				{
					label: "math对象常用",
				},
				{
					label: "date对象常用",
				},
				{
					label: "array对象常用",
				},
				{
					label: "string对象常用",
				},
			],
		},
		{
			label: "jsAPI(DOM)",
			children: [
				{
					label: "获取元素与基础事件",
				},
				{
					label: "操作元素(增删改查)",
				},
				{
					label: "鼠标事件与键盘事件",
				},
				{
					label: "节点操作",
				},
				{
					label: "高级事件",
				},
			],
		},
		{
			label: "jsAPI(BOM)",
			children: [
				{
					label: "window事件",
				},
				{
					label: "定时器",
				},
				{
					label: "异步与同步",
				},
				{
					label: "location",
				},
				{
					label: "特效",
				},
			],
		},
	];
	let vue = [
		{
			label: "vue基础",
			children: [
				{
					label: "基础语法",
				},
				{
					label: "组件与模块化",
				},
			],
		},
		{
			label: "vue架手架",
			children: [
				{
					label: "配置",
				},
				{
					label: "常用npm命令",
				},
			],
		},
		{
			label: "vue路由",
			children: [
				{
					label: "基本用法",
				},
				{
					label: "路由导航",
				},
			],
		},
		{
			label: "vueX",
			children: [
				{
					label: "基本用法",
				},
				{
					label: "高级用法",
				},
			],
		},
		{
			label: "axios",
			children: [
				{
					label: "基本用法",
				},
				{
					label: "高级用法",
				},
			],
		},
		{
			label: "组件库",
			children: [
				{
					label: "elementui",
				},
				{
					label: "aunt",
				},
			],
		},
	];
	let webpack = [
		{
			label: "HTML基础",
			children: [
				{
					label: "常用标签",
				},
				{
					label: "特殊标签",
				},
			],
		},
		{
			label: "表单与表格",
			children: [
				{
					label: "表单标签",
				},
				{
					label: "表格标签",
				},
			],
		},
		{
			label: "HTML5新增",
			children: [
				{
					label: "语义化标签",
				},
				{
					label: "视频与音频标签",
				},
			],
		},
		{
			label: "HTML注意事项",
			children: [
				{
					label: "常见错误",
				},
				{
					label: "特殊用法与补充",
				},
			],
		},
	];
	switch (to.fullPath) {
		case "/classify/html":
			vuex.state.nodeNavData = [];
			html.forEach(value => {
				vuex.state.nodeNavData.push(value);
			});
			break;
		case "/classify":
			vuex.state.nodeNavData = [];
			html.forEach(value => {
				vuex.state.nodeNavData.push(value);
			});
			break;
		case "/classify/css":
			vuex.state.nodeNavData = [];
			css.forEach(value => {
				vuex.state.nodeNavData.push(value);
			});
			break;
		case "/classify/javascript":
			vuex.state.nodeNavData = [];
			javascript.forEach(value => {
				vuex.state.nodeNavData.push(value);
			});
			break;
		case "/classify/vue":
			vuex.state.nodeNavData = [];
			vue.forEach(value => {
				vuex.state.nodeNavData.push(value);
			});
			break;
		case "/classify/webpack":
			vuex.state.nodeNavData = [];
			webpack.forEach(value => {
				vuex.state.nodeNavData.push(value);
			});
			break;
		default:
			break;
	}
	next();
});
export default router;
