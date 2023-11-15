// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
        meta: {
            requireAuth: false,
        },
    },
    {
        path: '',
        redirect: '/home',
        component: () => import('@/layouts/Default.vue'),
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/Home.vue'),
            },
            {
                path: '/:catchAll(.*)*',
                component: () => import('@/views/error/404.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
