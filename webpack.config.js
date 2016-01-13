var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    debug: true,
    devtool: 'eval-source-map',
    target: 'web',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/js/index.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'build/js'),
        publicPath: '/js/',
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
            new webpack.HotModuleReplacementPlugin(),
            new WebpackNotifierPlugin(),
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        contentBase: 'build',
        hot: true,
    },
};
