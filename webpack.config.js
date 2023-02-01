const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './scripts/pages/index.js', 
    photographer: './scripts/pages/photographer.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
  watch: true,
};