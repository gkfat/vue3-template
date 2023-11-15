import { injectVueContext } from '@/api';
import { useAuthStore } from '@/store/auth';

export const boot = () => {
    const authStore = useAuthStore();
    injectVueContext(authStore);
};
