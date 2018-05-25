
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));
const home   = Vue.component('home',require('./components/home'));
const about  = Vue.component('about',require('./components/about'));
const contact= Vue.component('contact',require('./components/contact'));

const router=new VueRouter({
    mode:'history',
    routes:[
        {
         path:'/about',
         name:'about',
         component:about
        }
        ,
        {
         path:'/contact',
         name:'contact',
         component:contact
        }
    ],

});

// app
const app = new Vue({
    el: '#app',
    components:{ home },
    router,
});
