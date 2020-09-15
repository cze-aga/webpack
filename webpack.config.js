var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/main.js",
    publicPath: "/assets",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        enforce: "pre",
        loader: "jshint-loader",
      },
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".es6"],
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: false,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
