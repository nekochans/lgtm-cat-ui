module.exports = {
  extends: ['stylelint-config-smarthr', 'stylelint-config-recess-order'],
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
  ],
  rules: {
    'function-whitespace-after': null,
    'function-no-unknown': null,
  },
};
