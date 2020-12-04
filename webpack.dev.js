const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        proxy: {
            '*': 'http://localhost:8080'
        },
        historyApiFallback: true
    },
});