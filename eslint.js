module.exports = {
    parserOptions: {
        project: "./tsconfig.eslint.json"
    },
    plugins: [
        "prettier",
        "jest",
        "unicorn",
        "import"
    ],
    extends: [
        "airbnb-typescript/base",
        "plugin:jest/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    rules: {
        "import/order": ["off"],
        "class-methods-use-this": ["off"],
        "no-underscore-dangle": [
            "error",
            {
                "allow": [
                    "_links",
                    "_embedded"
                ]
            }
        ],
        "import/prefer-default-export": [
            "off"
        ],
        "complexity": ["error", 6],
        "unicorn/filename-case": [
            "error",
            {
                "case": "camelCase"
            }
        ],
        "unicorn/no-array-instanceof": [
            "error"
        ],
        "unicorn/no-for-loop": [
            "error"
        ],
        "unicorn/no-unsafe-regex": [
            "error"
        ],
        "unicorn/no-zero-fractions": [
            "error"
        ],
        "unicorn/prefer-exponentiation-operator": [
            "error"
        ],
        "unicorn/prefer-includes": [
            "error"
        ],
        "unicorn/prefer-spread": [
            "error"
        ],
        "unicorn/prefer-starts-ends-with": [
            "error"
        ],
        "unicorn/regex-shorthand": [
            "warn"
        ],
        "unicorn/throw-new-error": [
            "error"
        ]
    }
}
