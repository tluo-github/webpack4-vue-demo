import Vue from 'vue';

import userlogin from "./components/user-login.vue"

const params = {
    el: '.container',
    components: {
        'userlogin': userlogin
    }
};
new Vue(params);