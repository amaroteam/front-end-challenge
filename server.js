const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const args = process.argv.slice(2)
const prod = typeof args[0] !== 'undefinded' && args[0] === 'prod'
const webpackConfig = prod ? require('./webpack.config.prod') : require('./webpack.config')

new WebpackDevServer(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath,
	hot: prod ? false : true,
	historyApiFallback: true,
	quiet: false,
	noInfo: false,
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		timings: false,
		chunks: false,
		chunkModules: false
	}

}).listen(3000, 'localhost', function (err) {
	if (err) {
		console.log(err)
	}

	console.log('Listening at localhost:3000')
})