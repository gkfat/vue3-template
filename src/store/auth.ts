import { ref } from 'vue';

import { defineStore } from 'pinia';

import { User } from '@/types/user';

export const useAuthStore = defineStore('auth', () => {
    const state = ref({
        token: null as string | null,
        user: null as User.User | null,
    });

    const setToken = (token: string) => {
        state.value.token = token;
        localStorage.setItem('auth-token', token);
    };

    const getToken = (): string | null => {
        const token = localStorage.getItem('auth-token') ?? null;
        return token;
    };

    const setUser = (user: User.User) => {
        localStorage.setItem('auth-user', JSON.stringify(user));
        state.value.user = user;
    };

    /** 從 storage 取出 user */
    const getStorageUser = (): User.User | null => {
        const user = localStorage.getItem('auth-user') ?? null;

        if (typeof user === 'string') {
            return JSON.parse(user);
        }

        return user;
    };

    const logout = async () => {
        state.value.token = null;
        state.value.user = null;
        localStorage.removeItem('auth-token');
        localStorage.removeItem('auth-user');
    };

    return {
        state,
        setToken,
        getToken,
        setUser,
        getStorageUser,
        logout,
    };
});