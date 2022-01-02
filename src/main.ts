import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/index.ts';
import NaiveUI from './plugins/Naive.ts';

createApp(App)
    .use(Router)
    .use(NaiveUI)
    .mount('#app');
