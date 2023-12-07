module.exports = {
    extends: [
        // extenind pre-defined rules
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    root: true,
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        // you can modify some rules manually
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-props-no-spreading': [
            0,
            {
                html: 'ignore',
                custom: 'ignore',
                explicitSpread: 'ignore',
            },
        ],
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'react/prop-types': 'off',
    },
    globals: {
        window: true,
        document: true,
        localStorage: true,
        FormData: true,
        FileReader: true,
        Blob: true,
        navigator: true,
    },
};
