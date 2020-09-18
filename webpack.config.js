var path = require("path");
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
//var commonsPlugin = new webpack.optimize.spli("shared.js");

const optimization = {
  splitChunks: {
    chunks: "async",
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 6,
    maxInitialRequests: 4,
    automaticNameDelimiter: "~",
    automaticNameMaxLength: 30,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};

module.exports = {
  mode: "development",
  entry: {
    about: "./src/about_page.js",
    contact: "./src/contact_page.js",
    index: "./src/index_page.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    //where the bundle file is going to be served up from on the web server
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        enforce: "pre",
        loader: "jshint-loader",
      },
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modues/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          // "autoprefixer-loader",
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modues/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // "style-loader",
          "css-loader",
          // "autoprefixer-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modues/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // "style-loader",
          "css-loader",
          // "autoprefixer-loader",
          "less-loader",
        ],
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false, // <- here
              limit: 10,
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        exclude: /node_modues/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false, // <- here
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  optimization,
  resolve: {
    extensions: [".js", ".es6"],
  },
  devServer: {
    port: 8081,
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: false,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
