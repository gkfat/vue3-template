import { Store } from 'pinia';

export const context = new Map();

/** 注入依賴 vue context, 避免 import cycle */
export const injectVueContext = (authStore: Store<'auth'>) => {
    if (context.has('authStore')) {
        return;
    }
    context.set('authStore', authStore);
};
