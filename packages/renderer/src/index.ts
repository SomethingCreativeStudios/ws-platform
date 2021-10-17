import {createApp} from 'vue';
import App from '~/App.vue';
import router from '~/router';

import WsDeckBuilder from '@ws/deck-builder';

import '@ws/deck-builder/public/style.css';


createApp(App)
  .use(router)
  .use(WsDeckBuilder)
  .mount('#app');
