module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        importOrderSeparation: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
