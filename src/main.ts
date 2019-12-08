import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import BattleGround from 'ws-battleground';

Vue.use(BattleGround);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");
