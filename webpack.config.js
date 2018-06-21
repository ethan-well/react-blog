const path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: ['babel-polyfill','./src/app.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
    // chunkFilename: 'common.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /(src)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build/*'], {
      watch: true,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        ie8: false,
        mangle: true,
        output: { comments: false },
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true,
          unused: false
         }
      },
      sourceMap: true,
      cache: true
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css"
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    open: true,
    inline: true
  }
};

module.exports = config;