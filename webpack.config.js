const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./scripts/pages/index.js', './scripts/pages/photographer.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true,
};