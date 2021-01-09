import "./assets/stylesheets/global.scss";
import Vue from 'vue';
import App from './App.vue';
import io from 'socket.io-client';
import VueSocketIOExtended from 'vue-socket.io-extended';

Vue.use(VueSocketIOExtended, io(window.location.href));

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})