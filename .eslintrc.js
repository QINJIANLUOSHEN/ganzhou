module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off', // Composition Function 不一定需要默认导出
    'max-len': ['error', { code: 160 }], // 单行最大160个字符
    'multiline-comment-style': ['error', 'starred-block'], // 格式化注释
  },
};
