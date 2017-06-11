var path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		path.resolve(__dirname, 'src', 'app.js'),
		path.resolve(__dirname, 'src', 'style.scss')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader?sourceMap', 'sass-loader'],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('build/style.css'),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.ejs'),
			inject: false
		})
	]
};