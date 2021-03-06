const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const {
  override,
  enableEslintTypescript,
  addWebpackAlias,
  addWebpackPlugin
} = require('customize-cra');

dotenv.config();

module.exports = override(
  enableEslintTypescript(),
  addWebpackAlias({
    Components: path.resolve(__dirname, 'src/components'),
    Config: path.resolve(__dirname, 'src/config'),
    Containers: path.resolve(__dirname, 'src/containers'),
    Context: path.resolve(__dirname, 'src/context'),
    Ducks: path.resolve(__dirname, 'src/ducks'),
    Hooks: path.resolve(__dirname, 'src/hooks'),
    Pages: path.resolve(__dirname, 'src/pages'),
    Redux: path.resolve(__dirname, 'src/redux'),
    Types: path.resolve(__dirname, 'src/types'),
    Utils: path.resolve(__dirname, 'src/utils'),
  }),
  addWebpackPlugin(new webpack.EnvironmentPlugin(process.env)),
);