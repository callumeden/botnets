var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    resolve: {
        //alias: {
        //    src: __dirname + '/src',
        //    spec: __dirname + '/spec',
        //    apps: __dirname + '/src/apps',
        //    behaviours: __dirname + '/src/behaviours',
        //    entities: __dirname + '/src/entities',
        //    helpers: __dirname + '/src/helpers',
        //    components: __dirname + '/src/lib/components',
        //    services: __dirname + '/src/services'
        //},
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