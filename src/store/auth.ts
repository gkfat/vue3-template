import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface AuthState {
    token: string | null;
}

export const useAuthStore = defineStore('auth', () => {
    const token = ref(null as string | null);

    const logout = () => {
        token.value = null;
    };

    return {
        token,
        logout,
    };
});
