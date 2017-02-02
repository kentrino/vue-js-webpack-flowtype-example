module.exports = {
  entry: './src/index.js',
  output: {
    path: "./dist",
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
  }
}
