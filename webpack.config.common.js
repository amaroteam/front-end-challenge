const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: ['./index.js', './scss/app.scss']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'es2015',
							'react'
						],
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
            }
		],
	},
	plugins: [
		new CleanWebpackPlugin(['app']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: './css/[name].css'
		}),
		new CopyWebpackPlugin([
			'./products.json'
		])
	]
};
