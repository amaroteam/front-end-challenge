'use strict';

let environment = './src/';

const path = require('path');

module.exports = {
    entry: environment + 'app.js',
    output: {
        path: environment + '../public', 
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};