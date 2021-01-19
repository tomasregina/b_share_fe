module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/html-indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "semi": "off",
    "object-shorthand": "off",
    "vue/order-in-components": "off",
    "space-before-function-paren": "off",
    "vue/require-default-prop": "off",
    "key-spacing": "off",
    "comma-dangle": "off",
    "no-multiple-empty-lines": "off",
    "quotes": "off",
    "vue/attributes-order": "off",
    "no-console": "off",
    "prefer-const": "warn",
    "no-unused-vars": "off",
    "padded-blocks": "off",
    "spaced-comment": "off",
    "arrow-spacing": "off",
    "indent": "off",
    "no-unreachable": "off",
    "comma-spacing": "off",
    "no-multi-spaces": "off",
    "brace-style": "off",
    "keyword-spacing": "off",
    "object-curly-newline": "off"










  }
}
