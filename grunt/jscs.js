'use strict';

module.exports = function (grunt) {
    return {
        options: {
            config: '.jscsrc'
        },
        node: {
            src: [
                'Gruntfile.js',
                'grunt/*.js'
            ]
        },
        source: {
            src: [
                'src/**/*.js'
            ]
        },
        specs: {
            src: [
                'spec/**/*.js'
            ]
        }
    };
};
