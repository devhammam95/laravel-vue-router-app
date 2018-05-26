
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
// to import vueRouter --best way
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

/*const core     = Vue.component('core',require('./components/core.vue'));
const home     = Vue.component('home',require('./components/home.vue'));
const about    = Vue.component('about',require('./components/about.vue'));
const contact  = Vue.component('contact',require('./components/contact.vue'));
const notFound = Vue.component('notfound',require('./components/notfound.vue'));
*/

import  core     from './components/core';
import  home     from './components/home';
import  about    from './components/about';
import  contact  from './components/contact';
import  notFound from './components/notfound';

const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:home
        },
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
        },
        {
            path:'*',
            name:'notFound',
            component:notFound
        }
    ],

});

// app
const app = new Vue({
    el: '#app',
    components:{ core },
    router,
});
Vue.config.devtools=true;