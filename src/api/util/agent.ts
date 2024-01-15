import axios, { AxiosError } from 'axios';

import { context } from '../';

axios.interceptors.request.use(
    (config) => {
        const authStore = context.get('authStore');
        config.headers.Authorization = authStore.token;
        return config;
    },
    (error) => Promise.reject(error),
);

const errorHandler = async (error: AxiosError) => {
    const authStore = context.get('authStore');

    if (error?.response?.status) {
        if (error.response.status === 403) {
            await authStore.logout();
            authStore.router.push('/login');
        }
    }

    throw error;
};

axios.interceptors.response.use((response) => response, errorHandler);

const baseURL: string = import.meta.env.VITE_API_URL;

export const request = () => {
    const requestAsync = async (args: {
        method: 'get'|'post'|'delete'|'put',
        url: string,
        params?: URLSearchParams,
        data?: object
    }) => {
        const res = await axios({
            baseURL,
            method: args.method,
            url: args.url,
            params: args.params,
            data: args.data,
            timeout: 60000,
        });
        return res.data;
    };
    return requestAsync;
};
