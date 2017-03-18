var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractTextPlugin = new ExtractTextPlugin('app.css');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: '#source-map',//'#inline-source-map',
    context: __dirname + '/src',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        },{
            test: /\.scss$/,
            loader: extractTextPlugin.extract(['css-loader', 'sass-loader']),
        }],
    },
    devServer:{
        contentBase: 'public'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/public',
        publicPath: `/public`,
        filename: 'app.js'
    },
    externals: {
        'jquery': 'jQuery',
    },
    entry: [
        'webpack-dev-server/client?http://localhost:8081/public',
        'webpack/hot/only-dev-server',
        './entry.jsx',
    ],
    plugins: [
        new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'}),
        new webpack.HotModuleReplacementPlugin(),
        extractTextPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template/index.html'
        }),
    ]
}
