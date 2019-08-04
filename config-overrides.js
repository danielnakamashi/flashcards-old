const path = require('path');
const { override, enableEslintTypescript, addWebpackAlias } = require('customize-cra');

module.exports = override(
  enableEslintTypescript(),
  addWebpackAlias({
    components: path.resolve(__dirname, 'src/components'),
  }),
);
