import "./assets/stylesheets/global.scss";
import Vue from 'vue';
import PageHeader from './assets/components/page-header.vue'

new Vue({
    el: '#page-header',
    render: h => h(PageHeader),
})