import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'element-ui/lib/theme-chalk/index.css'




Vue.config.productionTip = false


new Vue({ router, render: h => h(App), }).$mount('#app')

