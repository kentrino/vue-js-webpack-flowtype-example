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
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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
