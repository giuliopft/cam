import "./assets/stylesheets/global.scss";
import Vue from 'vue';
import PageHeader from './assets/components/page-header.vue';
import PageFooter from './assets/components/page-footer.vue'

new Vue({
    el: '#page-header',
    render: h => h(PageHeader),
});
new Vue({
    el: '#page-footer',
    render: h => h(PageFooter),
})