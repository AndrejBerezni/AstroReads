const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
});



    "start": "webpack-dev-server --config webpack.dev.js --open",
    "build": "webpack --config webpack.prod.js"