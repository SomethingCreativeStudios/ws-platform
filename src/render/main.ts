import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-plus';
import WsBattleground from 'ws-battleground';

import './index.scss';
import 'element-plus/lib/theme-chalk/index.css';
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
app.use(ElementUI);
app.mount('#app');
