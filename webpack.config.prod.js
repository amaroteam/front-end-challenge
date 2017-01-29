'use strict';
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	entry: [
		`webpack-dev-server/client?http://localhost:3000`,
		path.join(__dirname, 'app/index.js')
	],
	output: {
		path: path.join(__dirname, '/dist/js/'),
		filename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/template/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new ExtractTextPlugin('style.css', {
			allChunks: true
		}),
		new OptimizeCssAssetsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}, 
			{
				test: /\.json?$/,
				loader: 'json'
			},
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract('css!stylus')
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	}
}