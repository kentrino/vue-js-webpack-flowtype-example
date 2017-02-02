const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require("./webpack.config.dev.js");
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  contentBase: './dist',
  stats: { 
    colors: true,
    // surpress noisy output.
    chunks: false
  }
});

const port = 8080;
const ip = '0.0.0.0';
server.listen(port, ip, () => {
  console.log('Listening at ' + ip + ':' + port);
});
