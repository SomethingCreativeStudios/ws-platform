import Vue from 'vue';
import App from './App.vue';
import store from './store';

import WsDeckBuilder from 'ws-deck-builder';

console.log(WsDeckBuilder);
Vue.use(WsDeckBuilder as any, {});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
