import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import "lib-flexible"

Vue.use(VueRouter);

import Home from "./compoenets/Home.vue"
import Son1 from "./compoenets/Son1.vue"
import Son11 from "./views/Son11.vue"
import Son2 from "./compoenets/Son2.vue"
import Son3 from "./compoenets/Son3.vue"
import Son4 from "./compoenets/Son4.vue"
import Son41 from "./views/Son41.vue"
import Son42 from "./views/Son42.vue"
import Son5 from "./compoenets/Son5.vue"
import yemian3 from "./compoenets/yemian3.vue"





import "./css/iconfont.css"
import "./css/index.css"
import "./css/base.css"







const routes = [//路由
    {
        path: "/",
        redirect: '/home',
    },
    {
        path: "/home",
        component:Home,
    },
    {
        path: "/son1",
        component:Son1,
    },
    {
        path: "/son11",
        component:Son11,
    },

    {
        path: "/son2",
        component:Son2,
    },
    {
        path: "/son3",
        component:Son3,
    },
    {
        path: "/son4",
        component:Son4,
    },
    {
        path: "/son41",
        component:Son41,
    },
    {
        path: "/son42",
        component:Son42,
    },
    {
        path: "/son5",
        component:Son5,
    },

    {
        path: "/yemian3",
        component:yemian3,
    },

    // {
    //     name: 'son1',
    //     path: '/son1 ',
    //     component:Son1
        // children:[
        //     {
        //         name: 'hot',
        //         path: '/hot ',
        //         component: Hot
        //     },
        //     {
        //         name: 'sl',
        //         path: '/sl ',
        //         component: Sl
        //     },
        //     {
        //         name: 'pl',
        //         path: '/pl ',
        //         component: Pl
        //     },
        //
        //

]


const router = new VueRouter({//路由相当于选项卡
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.path == "/") {
//         next("/head")
//     } else {
//         next()
//     }
//     // console.log(to);
//     // console.log(from);
// })


new Vue({
    el: "#app",
    render: function (h) {
        return h(App);
    },
    router
})