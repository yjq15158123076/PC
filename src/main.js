import Vue from "vue"
import yemian3 from "./views/yemian3.vue"
import yemian1 from "./views/yemian1.vue"
import yemian2 from "./views/yemian2.vue"
import login from "./views/login.vue"

import "./css/index.css"
import "./css/base.css"
import "./css/iconfont.css"
import 'lib-flexible'
import 'lib-flexible/flexible'
//引入vue-router
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "./views/Home.vue"//home路径

const routes=[
	{
		path:"/login",//浏览器路径
		component:login//加载的组件
	},
	{
		path:"/regis",
		component:login
	},
	{
		path:"/son_1",
		component:yemian1
	},
	{
		path:"/son_2",
		component:yemian2
	},
	{
		path:"/son_3",
		component:yemian3
	}

]
const router=new VueRouter({
	routes
})

var Event = new Vue();

Vue.prototype.Event = Event;


new Vue({
	el: "#app",
	render: function(h){
		return h(App)
	},
	router,
})