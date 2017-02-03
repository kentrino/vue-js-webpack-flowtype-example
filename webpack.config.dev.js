const path = require('path');
const webpack = require('webpack');

const postcssPlugins = [
  // care order
  'postcss-import',
  'postcss-cssnext'
].map(require);

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
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1', 'postcss']
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      },
      { test: /\.vue$/, loader: 'vue' },
    ]
  },
  postcss: postcssPlugins,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
