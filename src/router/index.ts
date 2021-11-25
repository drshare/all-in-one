import {
    createRouter, createWebHistory, Router, RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        name: 'Home Page',
        path: '/',
        component: () => import('../pages/index.vue'),
    },
];

const router: Router = createRouter({
    routes,
    history: createWebHistory(),
});
export default router;
