var path = require('path');

var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'bundle.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                loaders: ['eslint-loader'],
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
        ],
        plugins: [
            new WebpackNotifierPlugin(),
        ],
    },
};
