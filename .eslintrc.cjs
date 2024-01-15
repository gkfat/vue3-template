module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        // see https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@intlify/vue-i18n/recommended',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
        'airbnb',
        'airbnb/hooks',
    ],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'vue/html-indent': ['error', 4],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'vue/multi-word-component-names': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'no-param-reassign': 'off',
    },
};
