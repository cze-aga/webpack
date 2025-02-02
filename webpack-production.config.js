var webpackStrip = require("strip-loader");
var devConfig = require("./webpack.config.js");
var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: webpackStrip.loader("console.log"),
};

devConfig.module.rules.push(stripLoader);
module.exports = devConfig;
