const path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const config = {
  entry: ['babel-polyfill','./src/app.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
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
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }]
      }
    ],
  },
  plugins: [
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
    new CompressionPlugin()
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
