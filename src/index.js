import Vue from 'vue';

import userlogin from "./components/user-login.vue"
import pagenav from "./components/page-nav.vue"
import newslist from "./components/news-list.vue"
import newsdetail from "./components/news-detail.vue";
import VueRouter from 'vue-router'
import VueResource from "vue-resource";



Vue.use(VueRouter);
Vue.use(VueResource);

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