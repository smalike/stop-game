var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'cheap-source-map',
    entry: {
        bundle: './src/index.js',
        vendor: ['react', 'react-router'],
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name]-[chunkhash].js',
        chunkFilename: '[name]-[chunkhash].js]',
        publicPath: '/static/',
    },
    plugins: [
        //new CleanWebpackPlugin([
        //    'static'
        //]),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
        }),
        new ExtractTextPlugin('[name]-[chunkhash].css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[chunkhash].js'),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: __dirname,
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            exclude: /node_modules/,
        }]
    }
};
