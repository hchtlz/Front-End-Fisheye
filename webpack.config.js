const path = require('path');

module.exports = {
  entry: './scripts/pages/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true,
};