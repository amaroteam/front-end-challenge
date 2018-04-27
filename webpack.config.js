var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'client'),
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'client'),
    publicPath: '/scripts/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { test: /\.ejs$/, loader: 'ejs-loader' }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Containers: path.resolve(__dirname, 'client/containers/'),
      Components: path.resolve(__dirname, 'client/components/'),
      Actions: path.resolve(__dirname, 'client/actions/')
    }
  },
};
