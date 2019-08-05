const path = require('path');
const { override, enableEslintTypescript, addWebpackAlias } = require('customize-cra');

module.exports = override(
  enableEslintTypescript(),
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@config': path.resolve(__dirname, 'src/config'),
    '@containers': path.resolve(__dirname, 'src/containers'),
    '@ducks': path.resolve(__dirname, 'src/ducks'),
    '@src': path.resolve(__dirname, 'src'),
  }),
);
