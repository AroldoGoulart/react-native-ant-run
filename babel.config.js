module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const moduleResolver = [
    'module-resolver',
    {
      root: ['./'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@': './src',
        '@assets': './assets',
        '@components': './src/components',
        '@contexts': './src/contexts/*',
        '@screens': './src/screens',
        '@services': './src/services',
        '@types': './src/types',
        '@utils': './src/utils',
      },
    },
  ];

  const plugins = [[...moduleResolver, 'module:react-native-dotenv']];

  return {
    presets,
    plugins,
  };
};
