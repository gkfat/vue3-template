import { createI18n } from 'vue-i18n';

const loadLocaleMessages = () => {
    const messages: {[key: string]: any } = {};

    const files = import.meta.glob('@/locales/*.json', { eager: true, as: 'raw' });

    for (let paths = Object.keys(files), i = 0; i < paths.length; i += 1) {
        const path = paths[i];
        const locale = path.split('/').pop()!.replace('.json', '');
        messages[locale] = JSON.parse(files[path]);
    }

    return messages;
};

export const i18n = createI18n({
    legacy: false,
    globalInjection: false,
    locale: 'zh',
    fallbackLocale: 'en',
    messages: loadLocaleMessages(),
});
