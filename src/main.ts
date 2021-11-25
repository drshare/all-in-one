import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import NaiveUI from './plugins/Naive';

createApp(App)
    .use(Router)
    .use(NaiveUI)
    .mount('#app');
