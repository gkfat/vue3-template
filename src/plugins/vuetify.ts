import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { useI18n } from 'vue-i18n';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import colors from 'vuetify/lib/util/colors.mjs';
import { i18n } from './i18n';

export const vuetify = createVuetify({
    components: {
        ...components,
    },
    directives,
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.indigo.base,
                    secondary: colors.blueGrey.lighten3,
                    warning: colors.yellow.darken1,
                    info: colors.cyan.base,
                    error: colors.red.base,
                    success: colors.green.base,
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: colors.blue.base,
                    secondary: colors.blueGrey.lighten3,
                    error: colors.red.base,
                },
            },
        },
    },
});
