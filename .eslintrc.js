module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    globals: {
        defineProps: 'readonly',
    },
    rules: {
        indent: [2, 4],
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                    ['#', './src/types'],
                ],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.d.ts'],
            },
        },
    },
};
