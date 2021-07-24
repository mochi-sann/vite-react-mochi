module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "react", "import" /*"simple-import-sort"*/],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: "."
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "sort-imports": 0,
    "import/newline-after-import": ["error", { count: 1 }],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        pathGroups: [
          {
            pattern: "@alias/**",
            group: "parent",
            position: "before"
          },
          {
            pattern: "@chakra-ui/react",
            group: "sibling",
            position: "before"
          },
          {
            pattern: "~/**",
            group: "sibling",
            position: "after"
          }
        ]

        // alphabetize: {
        //   order: "asc"
        // }
      }
    ],
    "import/no-unresolved": "off",
    "react/jsx-sort-props": "error",
    // "simple-import-sort/imports": "error",
    // "simple-import-sort/exports": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.tsx", "*.ts"],
      rules: { "@typescript-eslint/no-var-requires": ["off"] }
    }
  ]
}
