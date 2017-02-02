const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      },
      { test: /\.vue$/, loader: 'vue' },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
