var grunt = require('grunt');

module.exports = function () {
    return {
        options: grunt.file.readJSON('.jshintrc'),
        node: {
            src: [
                'Gruntfile.js',
                'grunt/*.js'
            ],
            options: {
                node: true
            }
        },
        source: {
            src: [
                'src/**/*.js'
            ]
        },
        spec: {
            src: [
                'spec/**/*.js'
            ],
            options: {
                maxstatements: 20
            }
        }
    };
};
