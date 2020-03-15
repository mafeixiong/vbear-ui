import Vue from 'vue'
import plugin from './lib/plugin'
import App from './App'
Vue.use(plugin)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
