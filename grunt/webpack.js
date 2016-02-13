var webpack = require('webpack');

module.exports = function (grunt) {
    return {
        options: require('../webpack.config.js'),
        dev: {
            devtool: 'source-map',
            watch: true,
            keepalive: true
        },
        prod: {
            plugins: [
                new webpack.optimize.UglifyJsPlugin()
            ]
        }
    };
};
