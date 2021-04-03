module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        jsx: true,
        useJSXTextNode: true,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/warnings',
        'plugin:unicorn/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
    rules: {
        // common rules
        'no-unused-vars': 'off',
        'comma-dangle': ['error', 'only-multiline'],
        eqeqeq: 'error',
        'no-else-return': 'error',
        'no-multi-spaces': 'error',
        'no-console': 'warn',
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: [
            'error',
            {
                ignoreImports: true,
                ignoreDestructuring: true,
                properties: 'always',
            },
        ],
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'error',
        'no-nested-ternary': 'error',
        'no-plusplus': 'error',
        'no-unneeded-ternary': ['error'],
        'one-var': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let'], next: '*' },
            {
                blankLine: 'any',
                prev: ['const', 'let'],
                next: ['const', 'let'],
            },
        ],
        'no-var': 'error',
        'prefer-const': 'error',

        // react rules
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'jsx-quotes': ['error', 'prefer-double'],
        'react/no-array-index-key': 'error',

        // comments rules
        'sort-vars': ['error', { ignoreCase: true }],
        'prefer-destructuring': [
            'error',
            {
                array: true,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],

        // unicorn rules
        'unicorn/prefer-query-selector': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-null': 'off',
        'unicorn/consistent-destructuring': 'error',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/prefer-ternary': 'error',

        // typescript rules
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/no-magic-numbers': [
            'warn',
            {
                ignoreEnums: true,
                ignoreArrayIndexes: true,
                ignore: [-1, 0, 0.1, 0.5, 0.75, 1, 1.5, 2, 9, 100],
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
