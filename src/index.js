import Vue from 'vue';

import me from "./components/me.vue";

const params = {
    el: '.container',
    components: {
        'me': me
    }
};
new Vue(params);