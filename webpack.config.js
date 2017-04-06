var path = require('path');

module.exports = {
    entry: [        
        './app/app.jsx'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {        
        modules: ['app', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015', 'stage-0'] }
                }]
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }            
        ]
    }
};