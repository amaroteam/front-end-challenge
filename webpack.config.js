const webpack = require('webpack')
const notification = require('webpack-notifier')
const pkg = require('./package.json')

/**
 * Webpaclk configurations
 */
module.exports = {
  entry: './app/App.js',
  devtool: 'source-map',
  output: {
    path: './public/assets/scripts/app',
    publicPath: 'assets/scripts/app',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new notification({
      title: pkg.name,
      alwaysNotify: true
    })
  ]
}
