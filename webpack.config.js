var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    resolve: {
        extensions: ['', '.js']
    },
    entry: './src/init.js',
    output: {
        path: './dist/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                query: {
                    helperDirs: [
                        __dirname + '/src/helpers/handlebars'
                    ]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new LiveReloadPlugin()
    ]
};