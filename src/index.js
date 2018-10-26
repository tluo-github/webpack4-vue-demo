import Vue from 'vue';
import me_name from "./components/myage.vue";


const params = {
    el: '.container',
    components: {
        'myname': me_name
    }
};
new Vue(params);