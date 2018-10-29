import Vue from 'vue';

//import userlogin from "./components/user-login.vue" //这种方式是全部加载进内存中
// import pagenav from "./components/page-nav.vue"
// import newslist from "./components/news-list.vue"
// import newsdetail from "./components/news-detail.vue";


import VueRouter from 'vue-router'
import VueResource from "vue-resource";
Vue.use(VueRouter);
Vue.use(VueResource);

// 异步加载组件
//第一种写法,代码文件不拆分
// const userlogin = function (resolve) {
//     require(['./components/user-login.vue'], resolve);
// };
//第二种写法，代码文件拆分
// const userlogin=r=>{
//     r(require('./components/user-login.vue'));
// };
//第三种写法，组件异步加载、文件整合到vuecs.js中
// const userlogin=r=>{
//     require.ensure([],()=>{
//         r(require("./components/user-login.vue"));
//     },"vuecs")
//
// };
//第四种写法、异步加载组件、代码文件拆分
const userlogin = () => import('./components/user-login.vue');
const newslist = () => import('./components/news-list.vue');
const newsdetail = () => import('./components/news-detail.vue');
const pagenav = () => import('./components/page-nav.vue');

const routerConfig = new VueRouter({
    routes:[
        { path: '/', component: userlogin },
        { path: '/news', component: newslist ,name:"newslist"},
        { path: '/news/:newsid', component: newsdetail ,name:"newsdetail"},
        { path: '/login', component: userlogin ,name:"userlogin"}
    ]
});

Vue.component('page-nav', pagenav);
const myvue=new Vue({
    el:".container",
    router:routerConfig
});

// const params = {
//     el: '.container',
//     components: {
//         'user-login': userlogin,
//         'page-nav' : pagenav,
//         'news-list' : newslist,
//     }
// };
// const myvue = new Vue(params);
//
// window.onhashchange=function () {
//     if (window.location.hash == "#admin"){
//         myvue.$children[0].$data.isadmin=true;
//     } else {
//         myvue.$children[0].$data.isadmin=false;
//     }
//
// }