import Vue from 'vue';

import userlogin from "./components/user-login.vue"

const params = {
    el: '.container',
    components: {
        'userlogin': userlogin
    }
};
const myvue = new Vue(params);

window.onhashchange=function () {
    if (window.location.hash == "#admin"){
        myvue.$children[0].$data.isadmin=true;
    } else {
        myvue.$children[0].$data.isadmin=false;
    }

}