import type { App } from 'vue';
import { vuetify } from './vuetify';
import { pinia } from './pinia';
import { i18n } from './i18n';
import router from '@/router';

export const registerPlugins = (app: App) => {
    app
        .use(i18n)
        .use(vuetify)
        .use(router)
        .use(pinia);
};
