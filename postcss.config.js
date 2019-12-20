module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {},
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    'cssnano': {},
  },
};
