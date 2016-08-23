/*eslint-disable no-var, one-var, func-names, indent, prefer-arrow-callback, prefer-template, object-shorthand, no-console, newline-per-chained-call, one-var-declaration-per-line, vars-on-top */
var path = require('path');
var spawn = require('child_process').spawn;
var spawnSync = require('child_process').spawnSync;
var moment = require('moment');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var config = require('./webpack.config');

var args = process.argv.slice(2);

function getIPAddress() {
  var interfaces = require('os').networkInterfaces();

  for (var devName in interfaces) {
    if ({}.hasOwnProperty.call(interfaces, devName)) {
      var iface = interfaces[devName];

      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }
  }

  return '0.0.0.0';
}

config.output.filename = '[name].js';
config.output.publicPath = 'http://localhost:' + (args[0] === 'test:ui' ? 3030 : 3000) + '/';
config.devtool = '#inline-source-map';
config.entry = {
  bundle: [
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    config.entry['/scripts/app']
  ],
  modernizr: config.entry['/scripts/modernizr']
};

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin()
);

if (!args[0]) {
  config.plugins.unshift(
    new BrowserSyncPlugin({
      host: getIPAddress(),
      port: 3000,
      notify: true,
      logPrefix: 'sia',
      proxy: 'http://localhost:3030'
    }, {
      reload: false
    })
  );
}

var compiler = webpack(config);
var start;

compiler.plugin('compile', function() {
  start = moment();
  console.log(start.format('hh:mm:ss') + ' Bundling...');
});

compiler.plugin('emit', function(compilation, callback) {
  var now = moment();
  console.log('Duration: ' + now.diff(start, 's') + 's');
  console.log('Hash: ' + compilation.hash);

  if (args[0] && args[0] === 'test:ui') {
    spawnSync('pkill', ['-f', 'selenium']);

    var nightwatch = spawn(path.join(__dirname, 'node_modules/.bin/nightwatch'), [
      '-c',
      path.join(__dirname, 'test/lib/nightwatch.conf.js'),
      path.join(__dirname, 'test/ui.nightwatch.js')
    ]);

    nightwatch.stdout.on('data', data => {
      process.stdout.write(data.toString());
    });

    nightwatch.stderr.on('data', data => {
      process.stdout.write(data.toString());
    });

    nightwatch.on('close', () => {
      spawn('kill', [process.pid]);
    });
  }

  callback();
});

new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, 'app'),
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3030, 'localhost', function(err) {
  if (err) {
    console.log('err', err);
  }
});
