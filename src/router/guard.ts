import { Router } from 'vue-router';

import { useAuthStore } from '@/store/auth';

export const installGuard = (router: Router) => {
    router.beforeEach((to, from, next) => {
        const authStore = useAuthStore();
        const { user } = authStore.state;
        const { requiresAuth, requiresAdmin } = to.meta;

        if (to.name === '404') {
            return next();
        }

        // 是否需要登入
        if (requiresAuth) {
            if (!user && to.name !== 'Login') {
                return next({
                    name: 'Login',
                });
            }
        }

        return next();
    });
};