const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //entry point for our app
  output: {
    //where we want to output our code
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist'), //path.resolve will resolve an absolute path to this directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 3. inject styles into DOM
          'css-loader', // 2. turns css into commonjs
          'sass-loader', // 1. turns sass into css
        ],
      },
    ],
  },
};
