const path = require('path');
const { override, enableEslintTypescript, addWebpackAlias } = require('customize-cra');

module.exports = override(
  enableEslintTypescript(),
  addWebpackAlias({
    Components: path.resolve(__dirname, 'src/components'),
    Config: path.resolve(__dirname, 'src/config'),
    Containers: path.resolve(__dirname, 'src/containers'),
    Context: path.resolve(__dirname, 'src/context'),
    Ducks: path.resolve(__dirname, 'src/ducks'),
    Src: path.resolve(__dirname, 'src'),
  }),
);
