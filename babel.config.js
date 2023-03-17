module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];

  const plugins = ['module:react-native-dotenv'];

  plugins.push([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@contexts': './src/contexts',
        '@screens': './src/screens',
        '@services': './src/services',
        '@types': './src/types',
        '@utils': './src/utils',
        '@src': './src',
      },
    },
  ]);

  return {
    presets,
    plugins,
  };
};
