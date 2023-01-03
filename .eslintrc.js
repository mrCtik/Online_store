// module.exports = {
//     env: {
//         browser: true,
//         es2021: true
//     },
//     extends: ["plugin:react/recommended", "standard"],
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true
//         },
//         ecmaVersion: "latest",
//         sourceType: "module"
//     },
//     plugins: ["react"],
//     rules: {
//         indent: ["error", 4, { offsetTernaryExpressions: false }],
//         semi: [2, "always"],
//         "comma-dangle": ["error", "never"],
//         "space-before-function-paren": [
//             "error",
//             {
//                 anonymous: "always",
//                 named: "always",
//                 asyncArrow: "always"
//             }
//         ],
//         "multiline-ternary": ["off"],
//         quotes: [
//             "error",
//             "double",
//             {
//                 allowTemplateLiterals: true,
//                 avoidEscape: true
//             }
//         ]
//     }
// };
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: [2, "always"],
        indent: [0, 4],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "multiline-ternary": ["off"],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ]
    }
};
