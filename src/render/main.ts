import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import WsBattleground from 'ws-battleground';
import WsDeckBuilder from 'ws-deck-builder';
import 'ws-deck-builder/dist/style.css';

import 'primevue/resources/themes/luna-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import './index.scss';
import './theme/index.css';

const electron = require('electron');
const ipc = electron.ipcRenderer;
ipc.send('store:set', { key: 'foo.bar', value: '👩' });
ipc.invoke('store:get', 'foo').then((res: string) => {
  console.log(res);
});
ipc.send('store:delete', 'foo');
ipc.invoke('store:get', 'foo').then((res: string) => {
  console.log(res);
});

const app = createApp(App);

app.use(router);
app.use(WsBattleground, {});
app.use(WsDeckBuilder, {});
app.mount('#app');
