import {
    createRouter, createWebHistory, Router, RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        name: 'Home Page',
        path: '/',
        component: () => import('../pages/index.vue'),
    },
    {
        name: 'Color Page',
        path: '/color',
        component: () => import('../pages/color.vue'),
    },
    {
        name: 'nav Page',
        path: '/nav',
        component: () => import('../pages/navigate.vue'),
    },
];

const router: Router = createRouter({
    routes,
    history: createWebHistory(),
});
export default router;
