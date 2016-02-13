module.exports = function () {
    var files = [{
        expand: true,
        cwd: './src/styles/',
        src: ['**/*.scss'],
        dest: './dist/css',
        ext: '.css'
    }];

    return {
        dev: {
            files: files
        },
        prod: {
            options: {
                outputStyle: 'compressed'
            },
            files: files
        }
    };
};
