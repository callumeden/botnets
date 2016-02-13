module.exports = function () {
    return {
        default: ['prod'],
        prod: [
            'sass:prod',
            'copy',
            'webpack:prod'
        ],
        dev: [
            'clean:assets',
            'sass:dev',
            'copy',
            'parallel:dev'
        ],
        precommit: [
            'jshint',
            'jscs',
            'clean',
            'prod'
        ]
    };
};
