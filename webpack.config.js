module.exports = {
  entry: './src/index.js',
  output: {
    path: "./build",
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
    ]
  }
}

